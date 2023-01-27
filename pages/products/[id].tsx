import { getOne, getProducts } from '@/services/product.service';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ProductTypes } from '@/types/product.types';
import { Product } from '@/components/screens/products/Product';

const ProductPage: NextPage<{ product: ProductTypes.IProduct }> = ({
	product,
}) => {
	return <Product product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const products = await getProducts();
		const paths = products.map(p => ({
			params: {
				id: p.id.toString(),
			},
		}));

		return {
			fallback: 'blocking',
			paths,
		};
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = String(params?.id);

		const product = await getOne(id);

		return {
			props: {
				product,
			},
			revalidate: 10,
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default ProductPage;
