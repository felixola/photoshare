import React from 'react';
import { Avatar, AvatarGroup, Box } from '@mui/material';
import image1 from '../../assets/images/vale-TN-3O_h1-W4-unsplash.jpg';
import image2 from '../../assets/images/anamnesis33-XzSmRQmelS0-unsplash.jpg';
import image3 from '../../assets/images/lance-reis-fuvhyHS0ySk-unsplash.jpg';
import { styled } from '@mui/material/styles';

const AvatarContainer = styled(Box)({
    display: 'flex',
    marginTop: '10px',
    marginBottom: '14px',
    width: '150px',
  });
    
const ImageGroup = () => {
    return (
        <>
        <AvatarContainer>
            <AvatarGroup total={4}>

                <Avatar alt='image1' src={image1}/>
                <Avatar alt='image2' src={image2}/>
                <Avatar alt='image3' src={image3}/>

            </AvatarGroup>

        </AvatarContainer>

        </>
    );
}

export default ImageGroup;