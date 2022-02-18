import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SortIcon from '@mui/icons-material/Sort';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/zvs.png';
import basavanna_logo from '../assets/basavanna.png';
import { Avatar, Collapse, Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Class, DesktopMac, DesktopWindows, ExpandLess, ExpandMore, Home, Info, More, RemoveRedEye, School, Science, Subject } from '@mui/icons-material';
// import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   listItems: {
//     color:'darkgreen',
//     fontWeight: '500'
//   }
// }));

const textItemStyle = {
  color: 'darkgreen',
  fontWeight: '500'
};

function HideOnScroll(props) {
  const { children } = props;
  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      {children}
    </Slide>
  );
};

const sidebarItems = [
  {
    name: "Home",
    icon: <Home color='warning' />,
    route: "/"
  },
  {
    name: "About",
    icon: <Info color='warning' />,
    nestedItems: [
      {
        name: "Vision & Mission",
        icon: <RemoveRedEye color='warning' fontSize='small' />,
        route: "/vision-mission",
      },
      {
        name: "About ZVS",
        icon: <Info color='warning' fontSize='small' />,
        route: "/about-zvs",
      },
      {
        name: "Principal Desk",
        icon: <DesktopMac color='warning' fontSize='small' />,
        route: "/principal-desk",
      },
      {
        name: "Vice Principal",
        icon: <DesktopWindows color='warning' fontSize='small' />,
        route: "/vice-principal",
      },
    ]
  },
  {
    name: "Academic",
    icon: <School color='warning' />,
    nestedItems: [
      {
        name: "Courses",
        icon: <Subject color='warning' fontSize='small' />,
        route: "/courses",
      },
      {
        name: "Department",
        icon: <Class color='warning' fontSize='small' />,
        route: "/department",
      },
      {
        name: "Research",
        icon: <Science color='warning' fontSize='small' />,
        route: "/research",
      }
    ]
  },
  {
    name: "More",
    icon: <More color='warning' />,
    route: "/more"
  }
]

export default function Navbar(props) {
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  // const classes = useStyles()

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarItems.map((item, index) => (
          item.nestedItems ?
            <div key={index}>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} primaryTypographyProps={{ style: textItemStyle }} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.nestedItems.map((nitem, i) => (
                    <ListItem button key={i} component={Link} to={nitem.route} sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
                      <ListItemIcon>
                        {nitem.icon}
                      </ListItemIcon>
                      <ListItemText primary={nitem.name} primaryTypographyProps={{ style: { color: 'darkgreen' } }} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
            :
            <ListItem button key={index} component={Link} to={item.route} onClick={toggleDrawer(false)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} primaryTypographyProps={{ style: textItemStyle }} />
            </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar sx={{
          height: '20vh',
          borderRadius: '0px 0px 20px 20px',
          background: 'linear-gradient(90deg, rgb(253, 245, 207) 0%, rgb(250, 161, 102) 100%)'
        }}>
          <Toolbar sx={{
            height: '100%'
          }}>
            <Avatar
              sx={{ height: 70, width: 70, mr: 1 }}
              alt="SCSA"
              src={logo}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography varient="subtitle1" component="div" sx={{ flexGrow: 1, color: 'green' }}>
                ZILLA VEERASHAIVA SAMAJA
              </Typography>
              <Typography variant="h6" component="h6" sx={{ flexGrow: 1, color: 'darkgreen' }}>
                SIRWAR CHUKKI SUGUNAMMA AMARESHAPPA PU COLLEGE RAICHUR
              </Typography>
            </Box>
            <Avatar
              sx={{ height: 40, width: 30, mr: 1 }}
              alt="Basavanna"
              src={basavanna_logo}
            />
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <SortIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={state}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  background: 'linear-gradient(90deg, rgb(253, 245, 207) 0%, rgb(250, 161, 102) 100%)',
                  borderRadius: '20px',
                  overflowY: 'scroll'
                }
              }}
            >
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ height: '20vh' }} /> {/* https://mui.com/components/app-bar/#fixed-placement */}
    </Box>
  );
}
