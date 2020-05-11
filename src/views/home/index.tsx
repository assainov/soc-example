import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { homePageViewed } from '../actions';
import Article from '../../blog/models/article';
import { RootState } from '../../configureStore';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(homePageViewed);
  }, [dispatch]);

  const articles = useSelector<RootState, Article[]>((state) => state.articles);
  const loading = useSelector<RootState, boolean>((state) => state.ui.loading);
  return (
    <>
      <h1>Articles</h1>
      {loading ? 'Loading...' : (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              {article.heading}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Home;