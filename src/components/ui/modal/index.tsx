import { useMount } from '@/hooks/useModalMount';
import { FC, PropsWithChildren } from 'react';
import { ModalLayout } from './ModalLayout';
import { Portal } from './Portal';

export interface IModal {
	onClose: () => void;
	opened: boolean;
}
export const Modal: FC<PropsWithChildren<IModal>> = ({
	opened,
	onClose,
	children,
}) => {
	const { mounted } = useMount(opened);
	if (!mounted) {
		return null;
	}
	return (
		<Portal>
			<ModalLayout onClose={onClose} opened={opened}>
				{children}
			</ModalLayout>
		</Portal>
	);
};
