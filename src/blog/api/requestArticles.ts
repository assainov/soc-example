import axios from 'axios';

export type apiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const requestArticles = () => axios.get<apiPost[]>('https://jsonplaceholder.typicode.com/posts');