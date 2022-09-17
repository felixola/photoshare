import React from 'react';
import { ThemeProvider } from '@mui/material';
import { TextField, IconButton, InputAdornment, Alert } from '@mui/material';
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import theme from '../../components/ui/Theme';


const SearchTag = styled(TextField) ({
    fieldset: {
        borderRadius: '20px'
    }
})

const SearchBar : React.FC = () => {

    return (

        <ThemeProvider theme={theme}>


            <SearchTag

                className='textfield'

                variant='outlined' 

                size='small'

                placeholder='search...'
            

                InputProps={{

                    endAdornment: 

                        <InputAdornment position="end">

                            <IconButton type="submit" aria-label="search">

                                <SearchIcon style={{ fill: '#000000',}}/>

                            </IconButton>

                        </InputAdornment>}}/>

        </ThemeProvider>

    );
}

export default SearchBar;