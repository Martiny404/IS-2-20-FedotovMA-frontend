import { FC } from 'react';
import { AdminNavigation } from './navigation/AdminNavigation';
import styles from './Admin.module.scss';

export const Admin: FC = () => {
	return (
		<div>
			<AdminNavigation />
		</div>
	);
};
