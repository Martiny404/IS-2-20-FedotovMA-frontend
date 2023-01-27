import { getCategoriesUrl } from '@/config/url.config';
import { ICategory } from '@/types/category.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/brands-slider/BrandsSlider.module.scss';

const CategorySlider: FC<{ categories: ICategory[] }> = ({ categories }) => {
	return (
		<Swiper
			spaceBetween={15}
			breakpoints={{
				1200: {
					slidesPerView: 5,
				},
				883: {
					slidesPerView: 4,
				},
				630: {
					slidesPerView: 3,
				},
				599: {
					slidesPerView: 2,
				},
				378: {
					slidesPerView: 1,
				},
			}}
			grabCursor
			className={clsx('my-swiper', styles.brands)}
		>
			{categories.map(category => (
				<SwiperSlide className={styles.slide} key={category.id}>
					<Link className={styles.link} href={getCategoriesUrl(category.id)}>
						<Image
							alt={category.name}
							src={category.categoryImgPath || '/no_image.jpeg'}
							width={180}
							height={130}
						/>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default CategorySlider;
