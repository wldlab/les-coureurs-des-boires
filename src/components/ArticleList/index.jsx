// vendor
import React from 'react';

// vendor components
import classNames from 'classnames';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

// utils
import PropTypes from 'prop-types';

// components
import ReadMoreLink from '../ui/ReadMoreLink';

// style
import './style.scss';

const renderTitle = string =>
  (string ? <h2 className="article-list__title">{string}</h2> : null);

const ArticleListItem = ({ article, index }) => {
  const itemClass = classNames(
    'article-list__item',
    `article-list__item--order-${index + 1}`,
  );

  return (
    <li className={itemClass}>
      <div className="article-list__item-contener">
        <Img
          className="article-list__item-thumbnail"
          sizes={article.thumbnail.sizes}
          alt={article.thumbnail.alt}
        />
        <p className="article-list__item-date">Publié {article.date}</p>
        <h3 className="article-list__item-title">
          <Link to={article.path}>{article.title}</Link>
        </h3>
        <p className="article-list__item-text">{article.excerpt}</p>
        <p className="article-list__item-link">
          <ReadMoreLink to={article.path} />
        </p>
      </div>
    </li>
  );
};

const ArticleList = ({ title, articles }) => (
  <section className="article-list">
    {renderTitle(title)}

    <ul className="article-list__list">
      {articles.map((article, index) => (
        <ArticleListItem article={article} index={index} key={article.id} />
      ))}
    </ul>
  </section>
);

ArticleListItem.propTypes = {
  article: PropTypes.shape({
    thumbnail: PropTypes.shape({
      sizes: PropTypes.object,
      alt: PropTypes.string,
    }),
    date: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

ArticleList.defaultProps = {
  title: null,
};

export default ArticleList;
