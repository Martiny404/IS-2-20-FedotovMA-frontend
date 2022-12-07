import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss';

import { ANIMATION_TIME } from '@/constants/other';
import { IModal } from '.';

const overlayAnimation = {
	enter: styles.overlayEnter,
	enterActive: styles.overlayEnterActive,
	exit: styles.overlayExit,
	exitActive: styles.overlayExitActive,
};

const contentAnimation = {
	enter: styles.contentEnter,
	enterActive: styles.contentEnterActive,
	exit: styles.contentExit,
	exitActive: styles.contentExitActive,
};

export const ModalLayout: FC<PropsWithChildren<IModal>> = ({
	onClose,
	children,
	opened,
}) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const [animationIn, setAnimationIn] = useState(false);

	useEffect(() => {
		setAnimationIn(opened);
	}, [opened]);

	return (
		<div className={styles.container}>
			<CSSTransition
				in={animationIn}
				nodeRef={overlayRef}
				timeout={ANIMATION_TIME}
				mountOnEnter
				unmountOnExit
				classNames={overlayAnimation}
			>
				<div ref={overlayRef} className={styles.overlay} onClick={onClose} />
			</CSSTransition>
			<CSSTransition
				in={animationIn}
				nodeRef={contentRef}
				timeout={ANIMATION_TIME}
				mountOnEnter
				unmountOnExit
				classNames={contentAnimation}
			>
				<div ref={contentRef} className={styles.content}>
					{children}
				</div>
			</CSSTransition>
		</div>
	);
};
