import React from 'react';
import { 
    AppBar,
    Box,
    Toolbar,
    Container,
    Tabs,
    Tab,
    Stack,
    Button,
    Divider,
    IconButton,
    Typography,
    Alert,
    useMediaQuery,
    useTheme,
 } from '@mui/material';
 import Logo from '../../assets/svgs/Logo.svg';
 import FavoriteIcon from '@mui/icons-material/Favorite';
 import { ThemeProvider } from '@mui/material';
 import theme from '../../components/ui/Theme';
 import { styled } from '@mui/material/styles';
 import SearchBar from '../../components/ui/SearchBar';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import DrawerComp from '../../components/ui/DrawerComp';
 import { useState } from 'react';
 import './header.css';


 const MainTabs = styled(Tab)({
    borderBottom: 'none',
    textTransform: 'none',
    fontSize: '18px',
    fontWeight: 500,
    color: '#000000',
    '& .MuiTabs-indicator': {
      backgroundColor: '#1890ff',
    },
  });

  const CreateAccount = styled(Button)({
        border: '1px solid #D9D7F1',
        textAlign: 'center',
        color: '#FFFFFF',
        textTransform: 'none',
        backgroundColor: '#293462',
        fontWeight: 600,
        '& .MuiTabs-indicator': {
          backgroundColor: '#1890ff',
        },
      });

const Header : React.FC = () => {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (

        <ThemeProvider theme={theme}>

            <AppBar position='static' sx={{backgroundColor: '#FFFFFF', marginTop: '-0.5rem', width: '100%'}} elevation={0} className='appbar'>

                    <Toolbar>
                          
                            {/* Logo */}
                        <img src={Logo} alt='logo' className='logo'/>

                        { isMatch ? ( <DrawerComp />) :(
                            <>
                                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center',}}>

                                <Tabs value={value}
                                    onChange={(e, value) => setValue(value)}>

                                    <MainTabs label='Home'/>
                                    <MainTabs label='Explore'/>
                                    <MainTabs label='Latest News'/>
                                    <MainTabs label='Chats'/>
                                    <MainTabs icon={<FavoriteIcon className='favourite_icon'/>} iconPosition='end' label='Sponsor'/>

                                </Tabs>

                                </Box>

                        <Stack direction='row' spacing={2} sx={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                                            
                        <SearchBar/>

                        <Divider orientation='vertical' variant='middle' flexItem/>

                        <CreateAccount variant='outlined'>SignUp</CreateAccount>


                        </Stack>
                        </>
                           
                        )}

            </Toolbar>            

            </AppBar>
        
        </ThemeProvider>
    );
}
export default Header;