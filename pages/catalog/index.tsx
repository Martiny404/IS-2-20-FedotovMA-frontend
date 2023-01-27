import type { GetServerSideProps, NextPage } from 'next';
import { getAllProducts } from '@/services/product.service';
import { Catalog, CatalogProps } from '@/components/screens/catalog/Catalog';
import { getCategoryOptions } from '@/services/category.service';

import { getAllBrands } from '@/services/brand.service';

const CatalogPage: NextPage<CatalogProps> = ({
	response,
	category,
	brands,
}) => {
	return <Catalog response={response} brands={brands} category={category} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	try {
		const id = query?.id ? +query?.id : undefined;
		const brandId = query?.brandId ? +query?.brandId : undefined;

		if (!id) {
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			};
		}

		const discount = query?.discount
			? JSON.parse(query?.discount.toString())
			: undefined;

		const sort = query?.sort ? query.sort.toString() : undefined;

		const type = query?.type ? query.type.toString() : undefined;

		const page = query?.page ? +query?.page : undefined;

		const filters = query?.filters ? query.filters.toString() : undefined;

		const response = await getAllProducts({
			categoryId: id,
			page,
			brandId,
			filters,
			discount,
			sort,
			type,
		});

		const category = await getCategoryOptions(id);

		const brands = await getAllBrands();

		if (!category) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				response,
				category,
				brands,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default CatalogPage;
