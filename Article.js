import React from 'react';
import articles from '../data/articles.json';

const Article = ({ match }) => {
  const articleId = parseInt(match.params.id);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <h2>Статья не найдена</h2>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
