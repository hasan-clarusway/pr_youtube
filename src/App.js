import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Sidebar } from './components';
import { useState } from "react";

const App = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }

  return (

  <BrowserRouter>
    <Box sx={{ backgroundColor: '#CB4335' }}>
      <Navbar handleClick={handleClick} />
      <Routes>        
        <Route exact path='/' element={<Feed open={open} /> } />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
};

export default App;