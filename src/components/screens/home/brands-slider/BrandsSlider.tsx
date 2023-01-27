import { getBrandsUrl } from '@/config/url.config';
import { IBrand } from '@/types/brand.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BrandsSlider.module.scss';

export const BrandsSlider: FC<{ brands: IBrand[] }> = ({ brands }) => {
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
			{brands.map(brand => (
				<SwiperSlide className={styles.slide} key={brand.id}>
					<Link className={styles.link} href={getBrandsUrl(brand.id)}>
						<Image
							alt={brand.name}
							src={brand?.brandImgPath || '/no_image.jpeg'}
							width={180}
							height={130}
						/>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
