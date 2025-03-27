import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles.json';

const ArticleList = () => {
  return (
    <div>
      <h2>Статьи</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
