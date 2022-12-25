import { Button } from '@/components/ui/form-elements/Button';
import { Modal } from '@/components/ui/modal';
import { FC, useState } from 'react';
import styles from './EditAdminProduct.module.scss';
import publicStyles from '../../AdminPublic.module.scss';

export const AdminDeleteProduct: FC<{ handler: () => void }> = ({
	handler,
}) => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant='outlined' onClick={openModal}>
				Удалить продукт
			</Button>
			<Modal opened={open} onClose={closeModal}>
				<div className={publicStyles.removeBlock}>
					<p>Вы действительно хотите удалить продукт?</p>
					<div className={publicStyles.btns}>
						<Button onClick={closeModal}>Отмена</Button>
						<Button onClick={handler}>Удалить</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
};
