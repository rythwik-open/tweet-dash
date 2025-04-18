// src/pages/PostedTweets.js
import React, { useState, useEffect } from 'react';

const PostedTweets = () => {
  const [postedTweets, setPostedTweets] = useState([]);

  useEffect(() => {
    // Fetch the posted tweets from your API or database here
    const fetchPostedTweets = async () => {
      // Example, this would be an actual API call in a real project
      const tweets = [
        { content: 'Posted Tweet 1', date: '2025-04-18 09:00' },
        { content: 'Posted Tweet 2', date: '2025-04-18 08:00' },
      ];
      setPostedTweets(tweets);
    };

    fetchPostedTweets();
  }, []);

  return (
    <div>
      <h2>Posted Tweets</h2>
      <p>Below are the tweets that have already been posted.</p>
      {postedTweets.length === 0 ? (
        <p>No tweets posted yet.</p>
      ) : (
        <ul>
          {postedTweets.map((tweet, index) => (
            <li key={index}>
              <strong>{tweet.date}</strong>: {tweet.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostedTweets;
