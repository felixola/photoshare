import React from 'react';
import { ThemeProvider } from '@mui/material';
import { 
  Typography, 
  Box, 
  Button, 
  Stack, 
  Grid, 
  Card,
  CardMedia,
  Avatar,
  CardContent,
  Chip,
  CardHeader,
  Divider,
 } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../components/ui/Theme';
import ImageGroup from '../../components/ui/Avatar';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cardImage1 from '../../assets/images/behnam-mohsenzadeh-4_rROcKQGdc-unsplash.jpg';
import cardImage2 from '../../assets/images/2011_homefront_game-1920x1200.jpg'
import cardImage3 from '../../assets/images/mariia-shalabaieva-rnlK-afxshk-unsplash.jpg'
import AvatarImage1 from '../../assets/images/anamnesis33-lNIDMnYTB5E-unsplash.jpg';
import AvatarImage2 from '../../assets/images/denis-tuksar-3D7GXXLydp8-unsplash.jpg';
import AvatarImage3 from '../../assets/images/marc-pell-ZdjyIQIkmmg-unsplash.jpg';
import './main.css';
import Mockup from '../../assets/images/smartmockups_l77y8wku.jpg';
import Netflix from '../../assets/svgs/Netflix.svg';
import Shopify from '../../assets/svgs/Shopify.svg';
import Spotify from '../../assets/svgs/Spotify.svg';
import Walmart from '../../assets/svgs/Walmart.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ViewMore = styled(Button)({
        border: '1px solid #D9D7F1',
        textAlign: 'center',
        color: '#FFFFFF',
        width: '150px',
        textTransform: 'none',
        backgroundColor: '#003865',
        boxShadow: 'none',
        fontWeight: 500,
        '& .MuiTabs-indicator': {
          backgroundColor: '#1890ff',
        },
      });

      const Connect = styled(Button)({
        textTransform: 'none',
        color: '#2C3639',
        fontSize: '18px',
        '& .MuiTabs-indicator': {
          backgroundColor: '#1890ff', 
        },
      }) as typeof Button;

      
    

const Main : React.FC = () => {

    return (

        <ThemeProvider theme={theme}>


            {/* First Content */}
            <Box container className='header_box'>

              <Grid container>

                <Grid item md={6} xs={12}>

                  <Stack direction='column' spacing={2} sx={{display: 'flex', alignItems: 'left'}}>

                      {/* Main Heading */}
                    <Typography sx={{color: '#000000', fontSize: {xs: '35px', md: '40px'}, fontWeight: 700, marginTop: {xs: '30px', md: '90px'}}} align='left'>

                    <span style={{color: '#EF5B0C'}}>EXPLORE,</span> DOWNLOAD, VIEW< br/> AND SHARE HD PHOTOS

                    </Typography>

                      {/* Sub Heading */}
                    <Typography align='left' variant='subtitle1'>Lorem ipsum dolor sit amet, consectetur </Typography>
                    

                          {/* ViewMore and Connect Button */}
                    <Stack direction='row' spacing={2}>

                        {/* View More Button */}
                        <ViewMore>View More</ViewMore>

                        {/* Connect Button */}
                        <Connect> Connect </Connect>
       
                    </Stack>
      
                      <ImageGroup/>

                    </Stack>

                </Grid>

                  {/* mockup */}
                <Grid item md={6} xs={0}>

                  <Box sx={{width: '250px', height: '400px', display: {xs: 'none', md: 'block'}}}>

                    <img src={Mockup} alt='mockup' className='mockup'/>

                  </Box>
                  
                </Grid>

              </Grid>

            </Box>

            
          
                   {/* Sponsors */}
            <Box container sx={{border: 'none',
                                width: '100%',
                                height: '50px',
                                marginTop: '0px',
                                justifyContent: 'center',
                                left: '20.5%',
                                display: 'flex',}}>

             <Stack spacing={2} direction='row'>

               <img src={Netflix} alt='netflix' className='sponsor' /> 
               <img src={Walmart} alt='walmart'  className='sponsor' />
               <img src={Shopify} alt='spotify'  className='sponsor' />
               <img src={Spotify} alt='spotify'  className='sponsor' />
              
             </Stack>
             

            </Box>
          

          {/* Box 3 */}
          
            <Box container sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: {xs: '40px', md: '50px'}, alignItems: 'center'}}>

            <Stack spacing={2} direction='column' >

            <Typography variant='h5' sx={{fontSize: '30px', fontWeight: 800, color: '#E38B29'}} align='center'>TOP CONTRIBUTIONS</Typography>

            <Typography variant='subtitle1' align='center' sx={{fontSize: '20px', color: '#483838', fontWeight: 500}}>Finding the best and recent most used wallpaper for your device</Typography>

            <Grid container>

                      {/* Card 1 */}
                    <Grid item md={4} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
      
                    <Card sx={{ maxWidth: 345, marginTop: '10px', borderRadius: '10px', border:'1px solid #F1F1F1',}} elevation={0}>

                        <CardMedia
                          component="img"
                          height="250"
                          src={cardImage1}
                          alt="green iguana"
                          />

                        <CardContent>
                          <CardHeader
                          avatar={<Avatar alt='image' src={AvatarImage1} />}
                          title="Shrimp and Chorizo Paella"
                          subheader="September 14, 2016"
                          />
                          
                          <Chip label='Nature' variant='outlined' style={{marginLeft:'16px'}}/>
                          <Chip label='Beauty' variant='outlined' style={{marginLeft:'16px'}}/>
                          
                          
                        </CardContent>

                        </Card>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item md={4} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card sx={{ maxWidth: 345, marginTop: '20px', borderRadius: '10px', border:'1px solid #F1F1F1', marginLeft: {md: '50px'}}} elevation={0}>

                          <CardMedia
                            component="img"
                            height="250"
                            src={cardImage2}
                            alt="green iguana"
                            />

                          <CardContent>
                            <CardHeader 
                            avatar={<Avatar alt='image' src={AvatarImage2} />}
                            title='Grey Steve'
                            subheader='December 14, 2020'
                            />

                          <Chip label='Nature' variant='outlined' style={{marginLeft:'16px'}}/>
                          <Chip label='Beauty' variant='outlined' style={{marginLeft:'16px'}}/>
                          <Chip label='Movie' variant='outlined' style={{marginLeft:'16px'}}/>
                          
                          </CardContent>

                          </Card>
                    </Grid>

                        {/* Card 3 */}
                    <Grid item md={4} xs={12} sx={{display: 'flex', justifyContent: 'center', }}>
                    <Card sx={{ maxWidth: 345, marginTop: '20px', borderRadius: '10px', border:'1px solid #F1F1F1', marginLeft: {md: '80px'}}} elevation={0}>

                          <CardMedia
                            component="img"
                            height="250"
                            src={cardImage3}
                            alt="green iguana"
                            />

                          <CardContent>

                            <CardHeader
                            avatar ={<Avatar alt='image' src={AvatarImage3} />}
                            title='Holand John'
                            subheader='January 30, 2022'
                             />

                          <Chip label='Transactions' variant='outlined' style={{marginLeft:'16px'}}/>
                          <Chip label='3d illustration' variant='outlined' style={{marginLeft:'16px'}}/>
                     
                          </CardContent>

                          </Card>

                    </Grid>
                    
                  </Grid>

                  <ViewMore className='viewmore2' endIcon={<ArrowForwardIosIcon />}>View More</ViewMore>
                  
            </Stack>
             
            
            </Box>

            <Divider style={{marginTop: '30px', marginBottom: '20px'}}/>

        </ThemeProvider>
    );
}
export default Main;