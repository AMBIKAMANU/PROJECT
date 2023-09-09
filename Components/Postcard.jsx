
// PostCard.js

import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Postdialog from '../Components/Postdialog'
const Postcard = ({ post }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDialogOpen}>View Comments</Button>
        <Postdialog open={dialogOpen} onClose={handleDialogClose} postId={post.id} />
        <Button>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Postcard;
