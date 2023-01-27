import { getAdminUrl } from '@/config/url.config';
import { parseDate } from '@/utils/parseDate';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button } from '../form-elements/Button';
import { MaterialIcon } from '../MaterialIcon';
import styles from './BCCard.module.scss';

interface IBCCard {
	id: number;
	name: string;
	description?: string;
	image?: string;
	endDate?: string;
}

export const BCCard: FC<{
	item: IBCCard;
	forAdmin?: boolean;
	type: 'brand' | 'category' | 'offer' | 'post';
}> = ({ item, forAdmin = false, type = 'brand' }) => {
	const { push } = useRouter();

	let href = getAdminUrl(`brands/edit/${item.id}`);

	if (type == 'category') {
		href = getAdminUrl(`categories/edit/${item.id}`);
	}
	if (type == 'offer') {
		href = getAdminUrl(`offers/edit/${item.id}`);
	}
	if (type == 'post') {
		href = getAdminUrl(`posts/edit/${item.id}`);
	}

	return (
		<div className={styles.bccard}>
			<div className={styles.img}>
				<Image
					src={item.image || '/no_image.jpeg'}
					alt={item.name}
					width={200}
					height={200}
				/>
			</div>
			<span className={styles.name}>{item.name}</span>
			{item.endDate && type == 'offer' ? (
				<>
					<span className={styles.endDate}>акция действует до:</span>
					<b>{parseDate(item.endDate)}</b>
				</>
			) : null}

			{forAdmin ? (
				<div className={styles.edit}>
					<Button onClick={() => push(href)}>
						<MaterialIcon muiName='MdModeEditOutline' />
					</Button>
				</div>
			) : null}
		</div>
	);
};
