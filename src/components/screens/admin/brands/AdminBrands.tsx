import { BCCard } from '@/components/ui/bc-card/BCCard';
import { getAdminUrl } from '@/config/url.config';
import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import styles from '../AdminPublic.module.scss';

export const AdminBrands: FC = () => {
	const brands = useGetAllBrands();

	return (
		<Meta
			title='Страница со списком брендов в админ-панеле'
			description='Здесь полный список брендов, представленных в магазине'
		>
			<AdminNavigation />

			<Link href={getAdminUrl('brands/create')} className='my-link'>
				Создать бренд
			</Link>

			<ul className={styles.list}>
				{brands.map(brand => (
					<BCCard
						key={brand.id}
						item={{ ...brand, image: brand.brandImgPath }}
						forAdmin={true}
					/>
				))}
			</ul>
		</Meta>
	);
};
