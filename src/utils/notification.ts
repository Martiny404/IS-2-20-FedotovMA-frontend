import { toast } from 'react-toastify';

type NotificationType = 'error' | 'warning' | 'success';

export function notification(
	message: string,
	type: NotificationType,
	time: number
) {
	switch (type) {
		case 'error':
			toast.error(message, {
				position: 'top-center',
				autoClose: time,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			break;
		case 'success': {
			toast.success(message, {
				position: 'top-center',
				autoClose: time,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			break;
		}
		case 'warning': {
			toast.warn(message, {
				position: 'top-center',
				autoClose: time,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			break;
		}
	}
}
