import { Basket } from '@/components/screens/basket/Basket';
import { NextPageAuth } from '@/types/auth.types';

const BasketPage: NextPageAuth = () => {
	return <Basket />;
};

BasketPage.onlyForUsers = true;

export default BasketPage;
