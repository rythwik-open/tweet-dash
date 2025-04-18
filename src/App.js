// src/pages/UploadPosts.js
import React, { useState } from 'react';
import TweetForm from './components/TweetForm';

const UploadPosts = () => {
  const handleTweetSubmit = (content) => {
    // Logic to submit tweet content (send to API, add to database, etc.)
    console.log('Tweet Submitted:', content);
  };

  return (
    <div>
      <h2>Upload Your Tweets</h2>
      <p>Enter your tweet content and click upload to add it to the queue for posting.</p>
      <TweetForm onSubmit={handleTweetSubmit} />
    </div>
  );
};

export default UploadPosts;
