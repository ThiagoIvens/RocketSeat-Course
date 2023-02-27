import { signOut } from '@/contexts/AuthContext';
import { rejects } from 'assert';
import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { resolve } from 'path';

interface AxiosErrorResponse {
	code?: string;
}

type FailedRequestQueue = {
	onSuccess: (token: string) => void;
	onFailure: (error: AxiosError) => void;
};

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue = Array<FailedRequestQueue>();

export const api = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		Authorization: `Bearer ${cookies['@jassy:token']}`
	}
});


api.interceptors.response.use(response => {
	return response
}, (error: AxiosError<AxiosErrorResponse>) => {
	if (error.response?.status === 401) {
		if (error.response.data?.code === 'token.expired') {
			cookies = parseCookies();

			const { '@jassy:refreshToken': refreshToken } = cookies;
			const originalConfig = error.config;

			if (!isRefreshing) {
				isRefreshing = true;

				api.post('/refresh', {
					refreshToken,
				}).then(response => {

					const { token } = response.data;

					setCookie(undefined, '@jassy:token', token, {
						maxAge: 60 * 60 * 24 * 30,
						path: '/',
					})

					setCookie(undefined, '@jassy:refreshToken', response.data.refreshToken, {
						maxAge: 60 * 60 * 24 * 30,
						path: '/',
					})

					api.defaults.headers['Authorization'] = `Bearer ${token}`;

					failedRequestsQueue.forEach(request => request.onSuccess(token));
					failedRequestsQueue = []
				}).catch((error) => {
					failedRequestsQueue.forEach(request => request.onFailure(error));
					failedRequestsQueue = []
				}).finally(() => {
					isRefreshing = false;
				})
			}

			return new Promise((resolve, reject) => {
				failedRequestsQueue.push({
					onSuccess: (token: string) => {
						if (!originalConfig?.headers) {
							return
						}
						originalConfig.headers['Authorization'] = `Bearer ${token}`

						resolve(api(originalConfig))
					},
					onFailure: (error: AxiosError) => {
						reject(error)
					}
				})
			})
		} else {
			signOut();
		}
	}


	return Promise.reject(error)
});