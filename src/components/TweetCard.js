// src/components/TweetCard.js
import React from 'react';

const TweetCard = ({ tweet }) => {
  return (
    <div className="tweet-card">
      <p>{tweet.content}</p>
      <span>{tweet.date}</span>
    </div>
  );
};

export default TweetCard;
