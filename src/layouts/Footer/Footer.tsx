import React from 'react';
// import { ThemeProvider } from '@mui/material';
// import theme from '../Theme';
// import { Grid, Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography,} from '@mui/material';
// import facebook from '../../assets/images/facebook.png';
// import instagram from '../../assets/images/instagram.png';
// import twitter from '../../assets/images/twitter.png';
// import discord from '../../assets/images/discord.png';
// import './Footer.css';



// // const footer1 = ['Determine', 'Api', 'Navigate', 'Sponsor', 'Nuggets', 'Categories'];
// const footer2 = ['React', 'Material ui', 'Firebase', 'Redux'];
// // const footer3 = ['Sponsor', 'Nuggets', 'Categories'];
// const footer4 = ['Nuggets', 'Categories','Determine', 'Api', 'Navigate', ];

// const Footer : React.FC = () => {
//     return (
//         <ThemeProvider theme={theme}>

//         <Box sx={{ width: '100%', backgrounColor: '#A77979', display: 'flex', flexDirection: 'center', justifyContent: 'center', alignItems: 'center',}}>
      
//             <Grid container>

//                 <Grid item md={3} xs={12} sx={{ alignItems: 'center', justifyContent: 'center'}}>

//                     <Stack direction='row' spacing={2}>

//                         <Typography flexGrow='1'>Get Connected to us</Typography>
//                         <img src={facebook} alt='facebook' className='social_icon'/>
//                         <img src={instagram} alt='instagram' className='social_icon'/>
//                         <img src={twitter} alt='twitter' className='social_icon'/>
//                         <img src={discord} alt='discord' className='social_icon'/>

//                     </Stack>

//                 </Grid>

               
                
//                 <Grid item md={3} xs={12} sx={{display: 'flex',  justifyContent: 'center'}}>

//                     <List>

                       

//                             <ListItem disablePadding>

//                                 <ListItemButton>
  
//                                     <Stack direction='column' spacing={2}>
  
//                                         <ListItemText 
//                                             primaryTypographyProps={{
//                                                     color: '#000000',
//                                                     fontWeight: 'medium',
//                                                     variant: 'body2',}} 
//                                                     primary='Here you can use rows and columns 
//                                                     to organize your footer content. Lorem ipsum dolor 
//                                                     sit amet, consectetur adipisicing elit.'/>

                                                    
//                                     </Stack>

//                                 </ListItemButton>
                            
//                             </ListItem>

                    

//                     </List>
                    
//                 </Grid>

                

//                 {/* 2 */}
//                 <Grid item md={3} xs={6} sx={{display: 'flex',  justifyContent: 'center'}}>

//                     <List sx={{ maxWidth: 360, display: 'flex', flexDirection: 'column'}}>
//                     {footer2.map((notey, index) => (

//                         <ListItem disablePadding>

//                             <ListItemButton key={index}>

//                                 <Stack direction='column' spacing={2}>

//                                     <ListItemText 
//                                         primary={notey} 
//                                         primaryTypographyProps={{
//                                                 color: '#000000',
//                                                 fontWeight: 'medium',
//                                                 variant: 'body2',}}/>

//                                 </Stack>

//                             </ListItemButton>
                        
//                         </ListItem>

//                     ))}
                        
//                     </List>

//                 </Grid>

//                 {/* 3 */}
//                 {/* <Grid item md={3} xs={6} sx={{display: 'flex', flexDirection: 'center', alignItems: 'center', justifyContent: 'center'}}>

//                     <List sx={{ maxWidth: 360, display: 'flex', flexDirection: 'column'}}>

//                     {footer3.map((footer, index) => (

//                         <ListItem disablePadding>

//                             <ListItemButton key={index}>

//                                 <Stack direction='column' spacing={2}>

//                                     <ListItemText primaryTypographyProps={{
//                                                      color: '#000000',
//                                                      fontWeight: 'medium',
//                                                      variant: 'body2',}} 
//                                                      primary={footer}/>

//                                 </Stack>

//                             </ListItemButton>
                             
//                         </ListItem>

//                             ))}
                       
//                     </List>

//                 </Grid> */}


//                 {/* 4 */}
//                 <Grid item md={3} xs={6} sx={{display: 'flex', flexDirection: 'center', alignItems: 'center', justifyContent: 'center'}}>

//                     <List sx={{ maxWidth: 360, display: 'flex', flexDirection: 'column'}}>

//                         {footer4.map((notez, index) => (

//                         <ListItem disablePadding>

//                             <ListItemButton key={index}>

//                                 <Stack direction='column' spacing={2}>

//                                     <ListItemText 
//                                         primary={notez} 
//                                         primaryTypographyProps={{
//                                                 color: '#000000',
//                                                 fontWeight: 'medium',
//                                                 variant: 'body2',}}/>
                        
//                                 </Stack>

//                             </ListItemButton>
                        
//                         </ListItem>

//                         ))}
                        
//                     </List>

//                 </Grid>
                
//             </Grid>
           
//             </Box>

//         </ThemeProvider>
//     );
// }

// export default Footer;