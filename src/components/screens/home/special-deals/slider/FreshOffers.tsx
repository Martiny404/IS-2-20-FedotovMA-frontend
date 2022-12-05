import SwiperCore, { Navigation, Pagination } from 'swiper';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OfferSlide } from './OfferSlide';
import styles from './FreshOffers.module.scss';

SwiperCore.use([Navigation, Pagination]);

export interface IOfferSlide {
	id: number;
	photo: string;
	description?: string;
}

const settings = {
	slidesPerView: 1,
	loop: true,
	id: 'swiper-offers',
	navigation: true,
};

export const FreshOffers: FC<{ offers: IOfferSlide[] }> = ({ offers }) => {
	return (
		<Swiper className={`${styles.slider} my-swiper`} {...settings}>
			{offers.map(offer => (
				<SwiperSlide key={offer.id}>
					<OfferSlide
						id={offer.id}
						src={offer.photo}
						alt={offer?.description || 'Special offer'}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
