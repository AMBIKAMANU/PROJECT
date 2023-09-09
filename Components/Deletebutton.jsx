import React from 'react';
import { Button } from '@mui/material';

function Deletebutton({ postId, onDelete }) {
  const handleDelete = () => {
    // Placeholder logic for handling post deletion and updating the delete queue
    console.log(`Deleting post with ID ${postId}`);
    
    // Simulate a delay for the delete operation (you should replace this with your actual delete logic)
    setTimeout(() => {
      console.log(`Post with ID ${postId} deleted successfully.`);
      
      // After successful delete, notify the parent component to update the queue
      onDelete(postId);
    }, 1000); // Simulated delay of 1 second
  };

  return (
    <Button variant="outlined" color="error" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default Deletebutton;
