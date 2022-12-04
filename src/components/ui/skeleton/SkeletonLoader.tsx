import { FC } from 'react';
import clsx from 'clsx';
import { Skeleton } from '@mui/material';

export const SkeletonLoader: FC<{ className?: string }> = ({ className }) => {
	return (
		<Skeleton
			className={clsx({
				className: !!className,
			})}
			variant='rounded'
		/>
	);
};
