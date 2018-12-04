import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  {
    console.log("generowanie pojedynczego posta");
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
      <p className={styles['vote-count']}><FormattedMessage id="Votes" /> {props.post.voteCount}</p>
      <p className={styles['vote-icon-up']}><FaThumbsUp onClick={props.onThumbUp} /></p>
      <p className={styles['vote-icon-down']}><FaThumbsDown onClick={props.onThumbDown} /></p>
      <hr className={styles.divider} />
    </div>
  );  
}
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
