import { Heading } from '@/components/ui/heading/Heading';
import { useProduct } from '@/hooks/data/product/useAdminProduct';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import styles from './AdminEditPhotos.module.scss';
import { AddPhotosForm } from './AddPhotosForm';
import Image from 'next/image';
import { Button } from '@/components/ui/form-elements/Button';
import { MaterialIcon } from '@/components/ui/MaterialIcon';

export const AdminEditPhotos: FC = () => {
	const { data: product, addPhotoMutation, removePhotoMutation } = useProduct();

	if (!product) return null;

	return (
		<Meta
			title='Страница добавления и удаления фотографий продукта'
			description='На этой странице администраторы могут просматривать дополнительные фотографии продукта, добавлять и удалять их'
		>
			<div>
				<Heading className={styles.h1} headingLevel='h1'>
					Продукт: {product.name}
				</Heading>
				{product.images.length === 0 ? (
					<Heading className={styles.h2} headingLevel='h2'>
						Дополнительных фотографий нет!
					</Heading>
				) : (
					<ul className={styles.images}>
						{product.images.map(image => (
							<li key={image.id}>
								<Image
									width={300}
									height={200}
									alt={`${image.id}`}
									src={image.photo}
								/>
								<Button
									onClick={() => removePhotoMutation(image.id)}
									className={styles.removeBtn}
								>
									<MaterialIcon muiName='FaTrash' />
								</Button>
							</li>
						))}
					</ul>
				)}
			</div>
			<AddPhotosForm
				onSubmitHandler={(path: string) => addPhotoMutation(path)}
			/>
		</Meta>
	);
};
