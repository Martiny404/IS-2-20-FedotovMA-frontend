import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ProductCard.module.scss';
export const ProductCardDescription: FC<{
	name: string;
	shortText: string;
	fullText: string;
}> = ({ name, shortText, fullText }) => {
	const [open, setOpen] = useState(false);

	const visible = () => {
		setOpen(true);
	};

	const hide = () => {
		setOpen(false);
	};

	return (
		<div onMouseEnter={visible} onMouseLeave={hide} className={styles.textWrap}>
			<p>{`${name} | ${shortText}`}</p>

			<CSSTransition
				in={open}
				timeout={400}
				unmountOnExit
				classNames='reminder-anim'
			>
				<p className={styles.tooltip}>{fullText}</p>
			</CSSTransition>
		</div>
	);
};
