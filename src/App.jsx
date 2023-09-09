
import React, { useEffect, useState } from 'react';
import PostList from '../Components/PostList';
import Searchbox from '../Components/Searchbox';
import Refreshbutton from '../Components/Refreshbutton';
import axios from 'axios';

const App = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [initialPosts, setInitialPosts] = useState([]);

  useEffect(() => {
    // Load state from local storage on component mount
    const storedState = JSON.parse(localStorage.getItem('postManagementState'));
    if (storedState) {
      setFilteredPosts(storedState.filteredPosts);
      setSearchQuery(storedState.searchQuery);
      setInitialPosts(storedState.initialPosts);
    }
  }, []);

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem(
      'postManagementState',
      JSON.stringify({ filteredPosts, searchQuery, initialPosts })
    );
  }, [filteredPosts, searchQuery, initialPosts]);

  const handleSearch = (query) => {
    // Implement fuzzy search logic here to filter posts
    const filtered = initialPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
    setSearchQuery(query);
  };

  const handleRefresh = () => {
    // Clear the local state
    setFilteredPosts([]);
    setSearchQuery('');
    setInitialPosts([]);
  
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Update the initialPosts state with new data
        setInitialPosts(response.data);
  
        // Optionally, apply the current search query to filter the newly fetched data
        if (searchQuery) {
          const filtered = response.data.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredPosts(filtered);
        }
      })
      .catch((error) => {
        console.error('Error fetching posts during refresh:', error);
      });
  };
  

  return (
    <div>
      <Searchbox onSearch={handleSearch} />
      <Refreshbutton onRefresh={handleRefresh} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default App;
