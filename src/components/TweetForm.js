// src/components/TweetForm.js
import React, { useState } from 'react';

const TweetForm = ({ onSubmit }) => {
  const [tweetContent, setTweetContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tweetContent);
    setTweetContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
        placeholder="Write your tweet here"
      />
      <button type="submit">Upload Tweet</button>
    </form>
  );
};

export default TweetForm;
