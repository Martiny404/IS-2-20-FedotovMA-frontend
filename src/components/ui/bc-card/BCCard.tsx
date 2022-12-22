import { getAdminUrl } from '@/config/url.config';
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
}

export const BCCard: FC<{ item: IBCCard; forAdmin?: boolean }> = ({
	item,
	forAdmin = false,
}) => {
	const { push } = useRouter();

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

			{forAdmin ? (
				<div className={styles.edit}>
					<Button onClick={() => push(getAdminUrl(`brands/edit/${item.id}`))}>
						<MaterialIcon muiName='MdModeEditOutline' />
					</Button>
				</div>
			) : null}
		</div>
	);
};
