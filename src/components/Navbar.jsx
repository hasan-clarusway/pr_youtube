import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import youtube from '../assets/youtube.png';
import { SearchBar } from "./";
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({handleClick, open}) => {
      
  return(
    
  <Stack direction="row" alignItems="center" p={1} 
    sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>

    <Box style={{ position: "sticky", flexDirection: 'row', display: 'flex',}}>
    <Button >
      <GiHamburgerMenu 
        style={{ color: 'red', marginTop: '5px', fontSize: '1.7rem' }}  
        onClick={() => handleClick(open)}        
      />        
    </Button> 
                  
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Stack style={{ position: "sticky", flexDirection: 'row'}}>
        <img src={youtube} alt="logo" height={35} />
        <span style={{ color: 'white', fontFamily: 'youtube sans', fontSize: '1.6rem'}}
          onClick={() => setDisplay => !setDisplay}>YouTube</span> 
      </Stack>    
      </Link>  
    </Box>  

    <SearchBar />
  </Stack>   
);
  }
export default Navbar;
