// CommentDialog.js

import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import axios from 'axios';

const Postdialog = ({ open, onClose, postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (open) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [open, postId]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Comments</DialogTitle>
      <DialogContent>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Typography variant="body2">{comment.body}</Typography>
          </div>
        ))}
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Postdialog;
