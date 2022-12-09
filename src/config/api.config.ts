export const API_URL = `${process.env.APP_URL}/api`;
export const STATIC_URL = `${process.env.APP_URL}`;
export const getUserApi = (endpoint: string) => `${API_URL}/user/${endpoint}`;
export const getProductApi = (endpoint: string) =>
	`${API_URL}/product/${endpoint}`;
export const getBrandApi = (endpoint: string) => `${API_URL}/brand/${endpoint}`;
export const getOrderApi = (endpoint: string) => `${API_URL}/order/${endpoint}`;
export const getCategoryApi = (endpoint: string) =>
	`${API_URL}/category/${endpoint}`;
export const getOptionApi = (endpoint: string) =>
	`${API_URL}/option/${endpoint}`;
export const getFileApi = (endpoint: string) => `${API_URL}$/file/${endpoint}`;
export const getStatisticsApi = (endpoint: string) =>
	`${API_URL}/statistics/${endpoint}`;
export const getSpecialOfferApi = (endpoint: string) =>
	`${API_URL}/special-offer/${endpoint}`;

export const getAuthApi = (endpoint: string) => `${API_URL}/auth/${endpoint}`;
