import { Button } from '@/components/ui/form-elements/Button';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './AdminEditPhotos.module.scss';

interface IAddPhoto {
	photo: string;
}

interface AddPhotosFormProps {
	onSubmitHandler: (path: string) => void;
}

export const AddPhotosForm: FC<AddPhotosFormProps> = ({ onSubmitHandler }) => {
	const { control, handleSubmit } = useForm<IAddPhoto>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IAddPhoto> = data => {
		onSubmitHandler(data.photo);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='photo'
				control={control}
				defaultValue=''
				rules={{
					required: 'Фото обязательное поле!',
				}}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<UploadField
						placeholder='Фото'
						error={error}
						folder='product'
						value={value}
						onChange={onChange}
					/>
				)}
			/>
			<Button className={styles.submitBtn}>Добавить фото</Button>
		</form>
	);
};
