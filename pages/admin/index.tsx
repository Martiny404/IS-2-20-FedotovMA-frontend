import { AdminStatistics } from '@/components/screens/admin/statistics/AdminStatistics';
import { GET_MOST_ORDERED_PRODUCTS } from '@/constants/queries';
import { useGetOrdersByTime } from '@/hooks/data/statistic/useGetOrdersByTime';
import { useMostOrderedProducts } from '@/hooks/data/statistic/useMostOrderedProducts';
import { getMostOrdered } from '@/services/statistics.service';
import { NextPageAuth } from '@/types/auth.types';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from 'react-query';

const AdminHomePage: NextPageAuth = () => {
	return <AdminStatistics />;
};

AdminHomePage.onlyForAdmin = true;

export default AdminHomePage;
