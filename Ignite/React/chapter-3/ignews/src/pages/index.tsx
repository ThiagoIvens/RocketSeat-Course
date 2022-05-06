import Head from 'next/head'
import { Header } from '../components/Header'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
	product: {
		priceId: string;
		amount: number;
	}
}

export default function Home({ product }: HomeProps) {

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
						<span>for { product.amount } month</span>
					</p>
					<SubscribeButton priceId={product.priceId} />
				</section>

				<img src="/images/avatar.svg" alt="Girl coding" />
			</main>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const price = await stripe.prices.retrieve('price_1KwJEwFdo76ZCKAwviA6fCxj', {
		expand: ['product']
	});

	const product = {
		priceID: price.id,
		amount: new Intl.NumberFormat('en-us', {
			style: 'currency',
			currency: 'USD'
		}).format(price.unit_amount / 100),
	};
	
	return {
		props: {
			product,
		}
	}
}