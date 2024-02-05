import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, Sidebar } from "./";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

const Feed = ({open}) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "2px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

      {!open ?
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      :
        <Stack
          sx={{justifyContent: "space-between", alignItems: 'center', marginTop: '30px',direction: "column", color: '#900C3F'   }}
          spacing={{ xs: 1, sm: 2, md: 4 }}                    
        >
          <Avatar sx={{color: '#000080', background: '#900C3F'}}>M</Avatar>
          <HomeIcon/>
          <SettingsIcon />
          <LogoutIcon />
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#dcdcdc", fontSize: '12px' }}>
            Copyright © <br /> 2024 <br /> MY Media
          </Typography>        
        </Stack>
      }   
      </Box>     
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#000000" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;