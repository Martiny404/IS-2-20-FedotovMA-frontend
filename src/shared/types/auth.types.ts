import { NextPage } from 'next';

export type RoleType = {
	onlyForAdmin?: boolean;
	onlyForUsers?: boolean;
};

export type NextPageAuth<P = {}> = NextPage<P> & RoleType;

export type ComponentAuthFields = {
	Component: RoleType;
};
