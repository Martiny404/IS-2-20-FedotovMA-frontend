import { Brand } from '@/components/screens/brands/Brand';
import { getAllBrands, getBrandInfo } from '@/services/brand.service';
import { IBrand } from '@/types/brand.types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const BrandPage: NextPage<{ brand: IBrand }> = ({ brand }) => {
	return <Brand brand={brand} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const brands = await getAllBrands();
		const paths = brands.map(b => ({
			params: {
				id: b.id.toString(),
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

		const brand = await getBrandInfo(+id);

		return {
			props: {
				brand,
			},
			revalidate: 10,
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default BrandPage;
