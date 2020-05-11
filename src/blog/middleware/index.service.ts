import { apiPost } from '../api/requestArticles';

export const transformArticles = (posts: apiPost[]) => {
  return posts.map(({id, title, body}) => ({id, heading: title, description: body}))
}