import { Category } from '@/components/screens/categories/Category';
import { getAllCategories, getCategoryInfo } from '@/services/category.service';
import { ICategory } from '@/types/category.types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const CategoryPage: NextPage<{ category: ICategory }> = ({ category }) => {
	return <Category category={category} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const categories = await getAllCategories();
		const paths = categories.map(c => ({
			params: {
				id: c.id.toString(),
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

		const category = await getCategoryInfo(+id);

		return {
			props: {
				category,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default CategoryPage;
