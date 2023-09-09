// RefreshButton.js

import React from 'react';
import { Button } from '@mui/material';

const Refreshbutton = ({ onRefresh }) => {
  return (
    <Button variant="outlined" onClick={onRefresh}>
      Refresh State
    </Button>
  );
};

export default Refreshbutton;
