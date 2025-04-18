// UploadPosts.js
import React, { useState } from 'react';
import '../App.css';

const UploadPosts = () => {
  const [tweetContent, setTweetContent] = useState('');

  const handleUpload = () => {
    // Call your upload Lambda here later
    console.log('Tweet uploaded:', tweetContent);
    setTweetContent('');
  };

  return (
    <div className="upload-form">
      <textarea
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
        placeholder="Write your tweet(s) here. Use line breaks to separate multiple tweets."
      />
      <button onClick={handleUpload}>Upload Tweets</button>
    </div>
  );
};

export default UploadPosts;
