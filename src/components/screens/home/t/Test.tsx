import { Button } from '@/components/ui/form-elements/Button';
import { SimpleAnimatedModal } from '@/components/ui/modal';
import { FC, useState } from 'react';

export const Test: FC = () => {
	const [o, setO] = useState(false);

	const onClose = () => {
		setO(false);
	};

	const setOpen = () => {
		setO(true);
	};

	return (
		<div style={{ marginTop: 30 }}>
			<Button onClick={setOpen}>click</Button>
			<SimpleAnimatedModal onClose={onClose} opened={o}>
				<h5>Hello world!</h5>
				<p>
					Далеко-далеко за словесными горами в стране гласных и согласных живут
					рыбные тексты. Она переписали дал силуэт раз инициал, первую он
					запятых назад злых повстречался деревни ты текстами.
				</p>
			</SimpleAnimatedModal>
		</div>
	);
};
