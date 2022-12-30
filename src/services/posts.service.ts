import { axiosClassic, instance } from '@/api/interceptors.api';
import { getPostsApi } from '@/config/api.config';
import { IPost } from '@/types/posts.types';

export const getAllPosts = async () => {
	const response = await axiosClassic.get<IPost[]>(getPostsApi(''));
	return response.data;
};
export const getOnePost = async (postId: number) => {
	const response = await axiosClassic.get<IPost>(getPostsApi(`${postId}`));
	return response.data;
};

export interface CreatePostDto {
	theme: string;

	text: string;

	poster: string;
}

export const createPost = async (dto: CreatePostDto) => {
	const response = await instance.post<IPost>(getPostsApi(``), dto);
	return response.data;
};

export interface UpdatePostDto {
	theme?: string;

	text?: string;

	poster?: string;
}

export const editPost = async (postId: number, dto: UpdatePostDto) => {
	const response = await instance.patch<IPost>(getPostsApi(`${postId}`), dto);
	return response.data;
};

export const deletePost = async (postId: number) => {
	const response = await instance.delete(getPostsApi(`${postId}`));
	return response.data;
};

export const updatePostViews = async (postId: number) => {
	const response = await instance.post(getPostsApi(`views/${postId}`));
	return response.data;
};
