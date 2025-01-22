import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import { Link , useLocation } from 'react-router-dom';

export default function Option() {

    const path = useLocation().pathname;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='md:hidden'>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        
        
      >
        <MenuItem onClick={handleClose} >
        <Link to="/" as={"div"}>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} > <Link to="/about" as={"div"}>About</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to="/projects" as={"div"}>Projects</Link></MenuItem>
      </Menu>
    </div>
  );
}
