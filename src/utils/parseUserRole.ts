import { UserRole } from '@/types/user.types';

export function parseUserRole(role: UserRole) {
	return role == 'admin' ? 'Админ' : 'Пользователь';
}
