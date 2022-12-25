import { Button } from '@/components/ui/form-elements/Button';
import { Modal } from '@/components/ui/modal';
import { FC, useState } from 'react';
import styles from '../../AdminPublic.module.scss';

export const AdminDeleteOffer: FC<{ handler: () => void }> = ({ handler }) => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<div className={styles.removeWrapper}>
			<Button variant='outlined' onClick={openModal}>
				Удалить акцию
			</Button>
			<Modal opened={open} onClose={closeModal}>
				<div className={styles.removeBlock}>
					<p>Вы действительно хотите удалить акцию?</p>
					<div className={styles.btns}>
						<Button onClick={closeModal}>Отмена</Button>
						<Button onClick={handler}>Удалить</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
};
