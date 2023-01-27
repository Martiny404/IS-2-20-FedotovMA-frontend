import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Image from 'next/image';

import styles from './Product.module.scss';
import clsx from 'clsx';

export interface ImageSliderProps {
	id: string | number;
	photo: string;
}

export const ImageSlider: FC<{ images: ImageSliderProps[] }> = ({ images }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className={styles.swipers}>
			<Swiper
				slidesPerView={1}
				id='swiper-product-images'
				navigation={true}
				modules={[Navigation, Thumbs, FreeMode]}
				thumbs={{ swiper: thumbsSwiper }}
				className={clsx('my-swiper', styles.swiper)}
			>
				{images.map(image => (
					<SwiperSlide className={styles.slide} key={image.id}>
						<div className={styles.img}>
							<Image src={image.photo} fill alt='фото продукта' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{images.length > 1 && (
				<Swiper
					spaceBetween={10}
					// @ts-ignore:next-line
					onSwiper={setThumbsSwiper}
					slidesPerView={4}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className={clsx('my-swiper', styles.secondSwiper)}
				>
					{images.map(image => (
						<SwiperSlide
							className={clsx(styles.slide, styles.secondSlide)}
							key={image.id}
						>
							<div className={styles.secondImg}>
								<Image src={image.photo} fill alt='фото продукта' />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
};
