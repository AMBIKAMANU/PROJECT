// PostList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Postcard from '../Components/Postcard'
const PostList = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Postcard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
