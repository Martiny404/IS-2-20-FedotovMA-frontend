import { ProductCard } from '@/components/ui/product-card/ProductCard';
import { IMostOrderedProduct } from '@/types/statistics.types';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styles from './MostOrderedProducts.module.scss';
import clsx from 'clsx';
import { useHydrate } from '@/hooks/useHydrate';

SwiperCore.use([Navigation]);

const MostOrderedProducts: FC<{ items: IMostOrderedProduct[] }> = ({
	items,
}) => {
	const hydrated = useHydrate();

	// if (!hydrated) return null;
	return (
		<Swiper
			id='swiper-most-ordered-home'
			navigation
			spaceBetween={20}
			className={clsx('my-swiper', styles.slider)}
			loop
			breakpoints={{
				1200: {
					slidesPerView: 4,
				},
				883: {
					slidesPerView: 3,
				},
				630: {
					allowTouchMove: true,
					slidesPerView: 2,
				},
				599: {
					allowTouchMove: true,
					slidesPerView: 1,
				},
			}}
		>
			{items.map(item => (
				<SwiperSlide key={item.id}>
					<ProductCard item={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default MostOrderedProducts;
