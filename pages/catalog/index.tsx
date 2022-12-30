import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const CatalogPage: NextPage = () => {
	const r = useRouter();

	return <h1>{JSON.stringify(r.query)}</h1>;
};

export default CatalogPage;
