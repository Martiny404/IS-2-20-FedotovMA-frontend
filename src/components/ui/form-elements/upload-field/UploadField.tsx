import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { useUpload } from '@/hooks/useUpload';

import { IUploadField } from '../form.interface';
import styles from '../form-elements.module.scss';
import { Spinner } from '../../spinner/Spinner';

const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	isNoImage = false,
	style,
	value,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder);
	return (
		<div className={clsx(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type='file' onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.uploadFileContainer}>
						{isLoading ? (
							<Spinner />
						) : (
							value && <Image alt='image' src={value} width={96} height={96} />
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadField;
