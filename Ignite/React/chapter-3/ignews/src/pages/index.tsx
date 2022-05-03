import Head from 'next/head'
import { Header } from '../components/Header'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'


export default function Home() {
	return (
		<>
			<Head>
				<title>HOME | ig.news</title>
			</Head>

			<main className={styles.contantContainer}>
				<section className={styles.hero}>
					<span>👏 &nbsp; Hey, welcome</span>
					<h1>News about <br /> 
					the <span>React</span> world.</h1>
					<p>
						Get acess to all the publications <br />
						<span>for $9.90 month</span>
					</p>
					<SubscribeButton />
				</section>

				<img src="/images/avatar.svg" alt="Girl coding" />
			</main>
		</>
	)
}