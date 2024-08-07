// import React, { useState, useEffect } from 'react';
// import { FaUser, FaBars } from "react-icons/fa";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Avatar, Typography, Divider, Box, IconButton } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { 
//   Dashboard, 
//   Person, 
//   Business, 
//   PendingActions, 
//   Settings, 
//   Help, 
//   ExitToApp 
// } from '@mui/icons-material';
// import useAuth from '../../hooks/useAuth';
// import { useSelector } from 'react-redux';

// const drawerWidth = '15rem';

// const user = {
//   username: "username",
//   fullname: "שם מלא",
//   seminary: "שם בית ספר",
//   image: "https://via.placeholder.com/50", // Placeholder URL for image
// };

// const menuItems = [
//   {
//     title: "דפים",
//     list: [
//       { title: "ראשי", path: "/dash", icon: <Dashboard /> },
//       { title: "תלמידות", path: "users", icon: <Person /> },
//       { title: "בתי ספר", path: "companies", icon: <Business /> },
//       { title: "פעולות", path: "actions", icon: <PendingActions /> },
//     ],
//   },
//   {
//     title: "משתמש",
//     list: [
//       { title: "הגדרות", path: "settings", icon: <Settings /> },
//       { title: "לבחירת ביה''ס וכיתה", path: "help", icon: <Help /> },
//     ],
//   },
// ];

// const SiteBar = () => {
//   const { roles, company, fullname, image } = useAuth();
//   const [classTeacher, setClassTeacher] = useState("");
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const { chosenClass } = useSelector((state) => state.schoolAndClass);
  
//   useEffect(() => {
//     if (chosenClass) {
//       setClassTeacher(chosenClass);
//     }
//   }, [chosenClass]);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="right"
//       sx={{
//         width: isCollapsed ? '4rem' : drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: isCollapsed ? '4rem' : drawerWidth,
//           boxSizing: 'border-box',
//           backgroundColor: '#283593', // Indigo background color
//           color: '#ffffff', // White text color
//           direction: 'rtl',
//         },
//       }}
//     >
//       <Box sx={{ padding: '1rem', textAlign: 'center', position: 'relative' }}>
//         <IconButton onClick={toggleCollapse} sx={{ position: 'absolute', top: 0, right: 0 }}>
//           <FaBars style={{ color: '#ffffff' }} />
//         </IconButton>
//         {image ? (
//           <Avatar src={image} sx={{ width: '5rem', height: '5rem', margin: '2rem auto 1rem' }} />
//         ) : (
//           <FaUser style={{ fontSize: '40px', margin: '2rem auto 1rem' }} />
//         )}
//         {!isCollapsed && (
//           <>
//             <Typography variant="h6" component="div" sx={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>{fullname}</Typography>
//             <Typography variant="h6" component="div" sx={{ color: '#ffffff', fontSize: '1rem', fontWeight: 'bold' }}>{classTeacher}</Typography>
//             <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1rem' }}>{roles}</Typography>
//           </>
//         )}
//       </Box>
//       <Divider />
//       <List sx={{ paddingTop: '2rem' }}>
//         {menuItems.map((cat, index) => (
//           <div key={index}>
//             <ListItem>
//               {!isCollapsed && <ListItemText primary={cat.title} sx={{ color: '#ffffff', paddingRight: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }} />}
//             </ListItem>
//             {cat.list.map((item, subIndex) => (
//               <ListItem 
//                 button 
//                 component={NavLink} 
//                 to={item.path} 
//                 key={subIndex}
//                 exact 
//                 sx={{
//                   paddingRight: '1rem',
//                   marginBottom: '1rem',
//                   display: 'flex',
//                   justifyContent: isCollapsed ? 'center' : 'flex-start',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   '&:hover': {
//                     backgroundColor: '#5c6bc0', // Light blue background on hover
//                   },
//                   '&.active': {
//                     backgroundColor: '#1a237e', // Darker indigo background color for active link
//                     fontWeight: 'bold',
//                   },
//                 }}
//               >
//                 <ListItemIcon sx={{ color: '#ffffff', minWidth: 0 }}>{item.icon}</ListItemIcon>
//                 {!isCollapsed && <ListItemText primary={item.title} sx={{ color: '#ffffff', textAlign: 'right', fontSize: '1.25rem', fontWeight: 'bold' }} />}
//               </ListItem>
//             ))}
//           </div>
//         ))}
//       </List>
//       {!isCollapsed && (
//         <Button
//           variant="contained"
//           startIcon={<ExitToApp />}
//           sx={{ backgroundColor: '#ff7043', color: 'white', width: '80%', margin: 'auto', display: 'flex', marginTop: 'auto', marginBottom: '2rem', fontSize: '1rem' }}
//         >
//           יציאה
//         </Button>
//       )}
//     </Drawer>
//   );
// };

// export default SiteBar;

// import React, { useState, useEffect } from 'react';
// import { FaUser, FaBars } from "react-icons/fa";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Box, IconButton } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { 
//   Dashboard, 
//   Person, 
//   Business, 
//   PendingActions, 
//   Settings, 
//   Help, 
//   ExitToApp 
// } from '@mui/icons-material';
// import useAuth from '../../hooks/useAuth';
// import { useSelector } from 'react-redux';

// const drawerWidth = '17rem';

// const user = {
//   username: "username",
//   fullname: "שם מלא",
//   seminary: "שם בית ספר",
//   image: "https://via.placeholder.com/50", // Placeholder URL for image
// };

// const menuItems = [
//   {
//     title: "דפים",
//     list: [
//       { title: "ראשי", path: "/dash", icon: <Dashboard /> },
//       { title: "תלמידות", path: "users", icon: <Person /> },
//       { title: "בתי ספר", path: "companies", icon: <Business /> },
//       { title: "פעולות", path: "actions", icon: <PendingActions /> },
//     ],
//   },
//   {
//     title: "משתמש",
//     list: [
//       { title: "הגדרות", path: "settings", icon: <Settings /> },
//       { title: "לבחירת ביה''ס וכיתה", path: "help", icon: <Help /> },
//     ],
//   },
// ];

// const SiteBar = () => {
//   const { roles, company, fullname, image } = useAuth();
//   const [classTeacher, setClassTeacher] = useState("");
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const { chosenClass } = useSelector((state) => state.schoolAndClass);
  
//   useEffect(() => {
//     if (chosenClass) {
//       setClassTeacher(chosenClass);
//     }
//   }, [chosenClass]);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="right"
//       sx={{
//         width: isCollapsed ? '4rem' : drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: isCollapsed ? '4rem' : drawerWidth,
//           boxSizing: 'border-box',
          
//           backgroundColor: '#f3f3e9', // Light beige background color
//           color: '#9B153B', // Dark red text color
//           direction: 'rtl',
//         },
//       }}
//     >
//       <Box sx={{ padding: '1rem', textAlign: 'center', position: 'relative' }}>
//         <IconButton onClick={toggleCollapse} sx={{ position: 'absolute', top: 0, right: 0 }}>
//           <FaBars style={{ color: '#9B153B' }} />
//         </IconButton>
//         {image ? (
//           <Avatar src={image} sx={{ width: '5rem', height: '5rem', margin: '2rem auto 1rem' }} />
//         ) : (
//           <FaUser style={{ fontSize: '40px', margin: '2rem auto 1rem', color: '#9B153B' }} />
//         )}
//         {!isCollapsed && (
//           <>
//             <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>{fullname}</Typography>
//             <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1rem', fontWeight: 'bold' }}>{classTeacher}</Typography>
//             <Typography variant="body1" sx={{ color: '#9B153B', fontSize: '1rem' }}>{roles}</Typography>
//           </>
//         )}
//       </Box>
//       <Divider sx={{ borderColor: '#9B153B' }} /> {/* Burgundy line marking the end of the sidebar */}
//       <List sx={{ paddingTop: '1rem' }}>
//         {menuItems.map((cat, index) => (
//           <div key={index}>
//             <ListItem>
//               {!isCollapsed && <ListItemText primary={cat.title} sx={{ color: '#9B153B', paddingRight: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }} />}
//             </ListItem>
//             {cat.list.map((item, subIndex) => (
//               <ListItem 
//                 button 
//                 component={NavLink} 
//                 to={item.path} 
//                 key={subIndex}
//                 exact 
//                 sx={{
//                   paddingRight: '1rem',
//                   marginBottom: '0.5rem',
//                   display: 'flex',
//                   justifyContent: isCollapsed ? 'center' : 'flex-start',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   '&:hover': {
//                     backgroundColor:'#f8bbd0', // Light pink background on hover
//                   },
//                   '&.active': {
//                     backgroundColor: '#c2185b', // Dark pink background color for active link
//                     fontWeight: 'bold',
//                     color: '#ffffff', // White text color when active
//                   },
//                 }}
//               >
//                 <ListItemIcon sx={{ color: 'inherit', minWidth: 0 }}>{React.cloneElement(item.icon, { fontSize: 'large' })}</ListItemIcon>
//                 {!isCollapsed && <ListItemText primary={item.title} sx={{ color: 'inherit', textAlign: 'right', fontSize: '1.25rem', fontWeight: 'bold' }} />}
//               </ListItem>
//             ))}
//           </div>
//         ))}
//       </List>
//       {!isCollapsed && (
//         <IconButton
//           component={NavLink}
//           to="/logout"
//           sx={{ color: '#9B153B', width: '100%', textAlign: 'center', marginTop: 'auto', marginBottom: '2rem' }}
//         >
//           <ExitToApp fontSize="large" />
//         </IconButton>
//       )}
//     </Drawer>
//   );
// };

// export default SiteBar;



// import React, { useState, useEffect } from 'react';
// import { FaUser, FaBars } from "react-icons/fa";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Box, IconButton } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { 
//   Dashboard, 
//   Person, 
//   Business, 
//   PendingActions, 
//   Settings, 
//   Help, 
//   ExitToApp 
// } from '@mui/icons-material';
// import useAuth from '../../hooks/useAuth';
// import { useSelector } from 'react-redux';

// const drawerWidth = 260; // Width in pixels for desktop

// const user = {
//   username: "username",
//   fullname: "שם מלא",
//   seminary: "שם בית ספר",
//   image: "https://via.placeholder.com/50", // Placeholder URL for image
// };

// const menuItems = [
//   {
//     title: "דפים",
//     list: [
//       { title: "ראשי", path: "/dash", icon: <Dashboard /> },
//       { title: "תלמידות", path: "users", icon: <Person /> },
//       { title: "בתי ספר", path: "companies", icon: <Business /> },
//       { title: "פעולות", path: "actions", icon: <PendingActions /> },
//     ],
//   },
//   {
//     title: "משתמש",
//     list: [
//       { title: "הגדרות", path: "settings", icon: <Settings /> },
//       { title: "לבחירת ביה''ס וכיתה", path: "help", icon: <Help /> },
//     ],
//   },
// ];

// const SiteBar = () => {
//   const { roles, company, fullname, image } = useAuth();
//   const [classTeacher, setClassTeacher] = useState("");
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const { chosenClass } = useSelector((state) => state.schoolAndClass);
  
//   useEffect(() => {
//     if (chosenClass) {
//       setClassTeacher(chosenClass);
//     }
//   }, [chosenClass]);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="right"
//       sx={(theme) => ({
//         width: isCollapsed ? '4rem' : {
//           xs: '70vw', // Width for extra-small devices
//           sm: '40vw', // Width for small devices
//           md: '25vw', // Width for medium devices
//           lg: '17rem', // Width for large devices
//         },
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: isCollapsed ? '4rem' : {
//             xs: '70vw',
//             sm: '40vw',
//             md: '25vw',
//             lg: '17rem',
//           },
//           boxSizing: 'border-box',
//           backgroundColor: '#f3f3e9', // Light beige background color
//           color: '#9B153B', // Dark red text color
//           direction: 'rtl',
//         },
//       })}
//     >
//       <Box sx={{ padding: '1rem', textAlign: 'center', position: 'relative' }}>
//         <IconButton onClick={toggleCollapse} sx={{ position: 'absolute', top: 0, right: 0 }}>
//           <FaBars style={{ color: '#9B153B' }} />
//         </IconButton>
//         {image ? (
//           <Avatar 
//             src={image} 
//             sx={(theme) => ({ 
//               width: { xs: '5rem', md: '6rem', lg: '7rem' }, 
//               height: { xs: '5rem', md: '6rem', lg: '7rem' }, 
//               margin: '2rem auto 1rem' 
//             })} 
//           />
//         ) : (
//           <FaUser style={{ fontSize: '40px', margin: '2rem auto 1rem', color: '#9B153B' }} />
//         )}
//         {!isCollapsed && (
//           <>
//             <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>{fullname}</Typography>
//             <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1rem', fontWeight: 'bold' }}>{classTeacher}</Typography>
//             <Typography variant="body1" sx={{ color: '#9B153B', fontSize: '1rem' }}>{roles}</Typography>
//           </>
//         )}
//       </Box>
//       <Divider sx={{ borderColor: '#9B153B' }} /> {/* Burgundy line marking the end of the sidebar */}
//       <List sx={{ paddingTop: '1rem' }}>
//         {menuItems.map((cat, index) => (
//           <div key={index}>
//             <ListItem>
//               {!isCollapsed && <ListItemText primary={cat.title} sx={{ color: '#9B153B', paddingRight: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }} />}
//             </ListItem>
//             {cat.list.map((item, subIndex) => (
//               <ListItem 
//                 button 
//                 component={NavLink} 
//                 to={item.path} 
//                 key={subIndex}
//                 exact 
//                 sx={{
//                   paddingRight: '1rem',
//                   marginBottom: '0.5rem',
//                   display: 'flex',
//                   justifyContent: isCollapsed ? 'center' : 'flex-start',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   '&:hover': {
//                     backgroundColor:'#f8bbd0', // Light pink background on hover
//                   },
//                   '&.active': {
//                     backgroundColor: '#c2185b', // Dark pink background color for active link
//                     fontWeight: 'bold',
//                     color: '#ffffff', // White text color when active
//                   },
//                 }}
//               >
//                 <ListItemIcon sx={{ color: 'inherit', minWidth: 0 }}>{React.cloneElement(item.icon, { fontSize: 'large' })}</ListItemIcon>
//                 {!isCollapsed && <ListItemText primary={item.title} sx={{ color: 'inherit', textAlign: 'right', fontSize: '1.25rem', fontWeight: 'bold' }} />}
//               </ListItem>
//             ))}
//           </div>
//         ))}
//       </List>
//       {!isCollapsed && (
//         <IconButton
//           component={NavLink}
//           to="/logout"
//           sx={{ color: '#9B153B', width: '100%', textAlign: 'center', marginTop: 'auto', marginBottom: '2rem' }}
//         >
//           <ExitToApp fontSize="large" />
//         </IconButton>
//       )}
//     </Drawer>
//   );
// };

// export default SiteBar;



// import React, { useState, useEffect } from 'react';
// import { FaUser, FaBars } from "react-icons/fa";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Box, IconButton } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { 
//   Dashboard, 
//   Person, 
//   Business, 
//   PendingActions, 
//   Settings, 
//   Help, 
//   ExitToApp 
// } from '@mui/icons-material';
// import useAuth from '../../hooks/useAuth';
// import { useSelector } from 'react-redux';

// const user = {
//   username: "username",
//   fullname: "שם מלא",
//   seminary: "שם בית ספר",
//   image: "https://via.placeholder.com/50", // Placeholder URL for image
// };

// const menuItems = [
//   {
//     title: "דפים",
//     list: [
//       { title: "ראשי", path: "/dash", icon: <Dashboard /> },
//       { title: "תלמידות", path: "users", icon: <Person /> },
//       { title: "בתי ספר", path: "companies", icon: <Business /> },
//       { title: "פעולות", path: "actions", icon: <PendingActions /> },
//     ],
//   },
//   {
//     title: "משתמש",
//     list: [
//       { title: "הגדרות", path: "settings", icon: <Settings /> },
//       { title: "לבחירת ביה''ס וכיתה", path: "help", icon: <Help /> },
//     ],
//   },
// ];

// const SiteBar = () => {
//   const { roles, company, fullname, image } = useAuth();
//   const [classTeacher, setClassTeacher] = useState("");
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const { chosenClass } = useSelector((state) => state.schoolAndClass);
  
//   useEffect(() => {
//     if (chosenClass) {
//       setClassTeacher(chosenClass);
//     }
//   }, [chosenClass]);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="right"
//       sx={{
//         width: isCollapsed ? '4rem' : '14vw', // Adjusted width for collapsed and expanded states
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: isCollapsed ? '4rem' : '14vw', // Adjusted width for collapsed and expanded states
//           boxSizing: 'border-box',
//           backgroundColor: '#f3f3e9', // Light beige background color
//           color: '#9B153B', // Dark red text color
//           direction: 'rtl',
//         },
//       }}
//     >
//       <Box sx={{ padding: '1rem', textAlign: 'center', position: 'relative' }}>
//         <IconButton onClick={toggleCollapse} sx={{ position: 'absolute', top: 0, right: 0 }}>
//           <FaBars style={{ color: '#9B153B' }} />
//         </IconButton>
//         {image ? (
//           <Avatar 
//             src={image} 
//             sx={{ 
//               width: '10vw', // Width based on viewport width
//               height: '10vw', // Height based on viewport width
//               maxWidth: '7rem', // Max width to avoid being too large on large screens
//               maxHeight: '7rem', // Max height to avoid being too large on large screens
//               margin: '2rem auto 1rem' 
//             }} 
//           />
//         ) : (
//           <FaUser style={{ fontSize: '10vw', maxWidth: '40px', maxHeight: '40px', margin: '2rem auto 1rem', color: '#9B153B' }} />
//         )}
//         {!isCollapsed && (
//           <>
//             <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>{fullname}</Typography>
//             <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1.25rem', fontWeight: 'bold' }}>{classTeacher}</Typography>
//             <Typography variant="body1" sx={{ color: '#9B153B', fontSize: '1.1rem' }}>{roles}</Typography>
//           </>
//         )}
//       </Box>
//       <Divider sx={{ borderColor: '#9B153B' }} /> {/* Burgundy line marking the end of the sidebar */}
//       <List sx={{ paddingTop: '1rem' }}>
//         {menuItems.map((cat, index) => (
//           <div key={index}>
//             <ListItem>
//               {!isCollapsed && <ListItemText primary={cat.title} sx={{ color: '#9B153B', paddingRight: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }} />}
//             </ListItem>
//             {cat.list.map((item, subIndex) => (
//               <ListItem 
//                 button 
//                 component={NavLink} 
//                 to={item.path} 
//                 key={subIndex}
//                 exact 
//                 sx={{
//                   paddingRight: '1rem',
//                   marginBottom: '0.5rem',
//                   display: 'flex',
//                   justifyContent: isCollapsed ? 'center' : 'flex-start',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   '&:hover': {
//                     backgroundColor:'#f8bbd0', // Light pink background on hover
//                   },
//                   '&.active': {
//                     backgroundColor: '#c2185b', // Dark pink background color for active link
//                     fontWeight: 'bold',
//                     color: '#ffffff', // White text color when active
//                   },
//                 }}
//               >
//                 <ListItemIcon sx={{ color: 'inherit', minWidth: 0 }}>
//                   {React.cloneElement(item.icon, { fontSize: 'medium' })} {/* Adjust icon size */}
//                 </ListItemIcon>
//                 {!isCollapsed && <ListItemText primary={item.title} sx={{ color: 'inherit', textAlign: 'right', fontSize: '1.5rem', fontWeight: 'bold' }} />}
//               </ListItem>
//             ))}
//           </div>
//         ))}
//       </List>
//       {!isCollapsed && (
//         <IconButton
//           component={NavLink}
//           to="/logout"
//           sx={{ color: '#9B153B', width: '100%', textAlign: 'center', marginTop: 'auto', marginBottom: '2rem' }}
//         >
//           <ExitToApp fontSize="large" />
//         </IconButton>
//       )}
//     </Drawer>
//   );
// };

// export default SiteBar;



import React, { useState, useEffect } from 'react';
import { FaUser, FaBars } from "react-icons/fa";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Box, IconButton, Collapse } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { 
  Dashboard, 
  Person, 
  Business, 
  PendingActions, 
  Settings, 
  Help, 
  ExitToApp ,
   Quiz, Assignment, School, Info } 
from '@mui/icons-material';
import { PiListPlusLight } from 'react-icons/pi';
import { GoChecklist } from 'react-icons/go';
import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';

const user = {
  username: "username",
  fullname: "שם מלא",
  seminary: "שם בית ספר",
  image: "https://via.placeholder.com/50", // Placeholder URL for image
};

const menuItems = [
  {
    title: "דפים",
    list: [
      { title: "ראשי", path: "/dash", icon: <Dashboard /> },
      { title: "תלמידות", path: "users", icon: <Person /> },
      { title: "בתי ספר", path: "companies", icon: <Business /> },
      { title: "פעולות", path: "#", icon: <PendingActions />, isAction: true },
    ],
  },
  {
    title: "משתמש",
    list: [
      { title: "הגדרות", path: "settings", icon: <Settings /> },
      { title: "לבחירת ביה''ס וכיתה", path: "help", icon: <Help /> },
    ],
  },
];

const teacherMenuActions = [
  {
    title: "בחנים",
    list: [
      { title: "יצירת בוחן חדש", path: "actions/add", icon: <PiListPlusLight /> },
      { title: "בחנים", path: "actions/wordLsList", icon: <GoChecklist /> },
    ],
  },
];
const studentMenuActions = [
  {
    title: "בחנים",
    list: [
      { title: "ראשי", path: "/dash/actions", icon: <Quiz /> },
      { title: "בחנים", path: "actions/wordLsList", icon: <Assignment /> },
      { title: "רשימת משימות", path: "actions/wordLsList", icon: <Assignment /> },
      { title: "גיליון ציונים", path: "actions/marks", icon: <School /> },
    ],
  },
  {
    title: "אישי",
    list: [
      { title: "הפרטים שלי", icon: <Person /> },
    ],
  },
];




const SiteBar = () => {
  const { roles, company, fullname, image } = useAuth();
  const [classTeacher, setClassTeacher] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { chosenClass } = useSelector((state) => state.schoolAndClass);

  useEffect(() => {
    if (chosenClass) {
      setClassTeacher(chosenClass);
    }
  }, [chosenClass]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: isCollapsed ? '4rem' : '14vw', // Adjusted width for collapsed and expanded states
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isCollapsed ? '4rem' : '14vw', // Adjusted width for collapsed and expanded states
          boxSizing: 'border-box',
          backgroundColor: '#f3f3e9', // Light beige background color
          color: '#9B153B', // Dark red text color
          direction: 'rtl',
        },
      }}
    >
      <Box sx={{ padding: '1rem', textAlign: 'center', position: 'relative' }}>
        <IconButton onClick={toggleCollapse} sx={{ position: 'absolute', top: 0, right: 0 }}>
          <FaBars style={{ color: '#9B153B' }} />
        </IconButton>
        {image ? (
          <Avatar 
            src={image} 
            sx={{ 
              width: '10vw', // Width based on viewport width
              height: '10vw', // Height based on viewport width
              maxWidth: '7rem', // Max width to avoid being too large on large screens
              maxHeight: '7rem', // Max height to avoid being too large on large screens
              margin: '2rem auto 1rem' 
            }} 
          />
        ) : (
          <FaUser style={{ fontSize: '10vw', maxWidth: '40px', maxHeight: '40px', margin: '2rem auto 1rem', color: '#9B153B' }} />
        )}
        {!isCollapsed && (
          <>
            <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>{fullname}</Typography>
            <Typography variant="h6" component="div" sx={{ color: '#9B153B', fontSize: '1.25rem', fontWeight: 'bold' }}>{classTeacher}</Typography>
            <Typography variant="body1" sx={{ color: '#9B153B', fontSize: '1.1rem' }}>{roles}</Typography>
          </>
        )}
      </Box>
      <Divider sx={{ borderColor: '#9B153B' }} /> {/* Burgundy line marking the end of the sidebar */}
      <List sx={{ paddingTop: '1rem' }}>
        {menuItems.map((cat, index) => (
          <div key={index}>
            <ListItem>
              {!isCollapsed && <ListItemText primary={cat.title} sx={{ color: '#9B153B', paddingRight: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }} />}
            </ListItem>
            {cat.list.map((item, subIndex) => (
              <div key={subIndex}>
                <ListItem 
                  button 
                  component={NavLink} 
                  to={item.path} 
                  exact 
                  sx={{
                    paddingRight: '1rem',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    alignItems: 'center',
                    gap: '0.5rem',
                    '&:hover': {
                      backgroundColor:'#f8bbd0', // Light pink background on hover
                    },
                    '&.active': {
                      backgroundColor: '#c2185b', // Dark pink background color for active link
                      fontWeight: 'bold',
                      color: '#ffffff', // White text color when active
                    },
                  }}
                  onClick={item.isAction ? toggleSubMenu : undefined}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 0 }}>
                    {React.cloneElement(item.icon, { fontSize: 'medium' })} {/* Adjust icon size */}
                  </ListItemIcon>
                  {!isCollapsed && <ListItemText primary={item.title} sx={{ color: 'inherit', textAlign: 'right', fontSize: '1.5rem', fontWeight: 'bold' }} />}
                </ListItem>
                {item.isAction && (
                  <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {teacherMenuActions.map((actionCat, actionIndex) => (
                        <div key={actionIndex}>
                          {actionCat.list.map((actionItem, actionIndex) => (
                            <ListItem button key={actionIndex} component={NavLink} to={actionItem.path} sx={{ color: '#9B153B', paddingLeft: 4 }}>
                              <ListItemIcon>{actionItem.icon}</ListItemIcon>
                              {!isCollapsed && <ListItemText primary={actionItem.title} />}
                            </ListItem>
                          ))}
                        </div>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        ))}
        {roles.includes("מורה") && (
          <>
            <Divider sx={{ borderColor: '#9B153B', marginTop: '1rem' }} />
            {teacherMenuActions.map((cat, index) => (
              <div key={index}>
                <ListItem>
                  {!isCollapsed && <ListItemText primary={cat.title} sx={{ color: '#9B153B', paddingRight: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }} />}
                </ListItem>
                {cat.list.map((item, subIndex) => (
                  <ListItem button key={subIndex} component={NavLink} to={item.path} sx={{ color: '#9B153B' }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {!isCollapsed && <ListItemText primary={item.title} />}
                  </ListItem>
                ))}
              </div>
            ))}
          </>
        )}
      </List>
      {!isCollapsed && (
        <IconButton
          component={NavLink}
          to="/logout"
          sx={{ color: '#9B153B', width: '100%', textAlign: 'center', marginTop: 'auto', marginBottom: '2rem' }}
        >
          <ExitToApp fontSize="large" />
        </IconButton>
      )}
    </Drawer>
  );
};

export default SiteBar;
