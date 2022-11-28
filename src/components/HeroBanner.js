import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'},
    ml: {sm:'50px'}}} position = "relative" p="20px" >
        <Typography colour="#FF2625"
        fontWeight= "600" fontSize= "26px" >
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx= {{fontSize: {lg: '44px', xs: '40px'}}}>
            Lift, Sweat and Repeat!
        </Typography>
        <Typography fontSize="22px" LineHieght = "35px" mb={2} href= "#exercises">
            Check out the most effective exercises
        </Typography>
        <Button variant= "outlined">
            Explore Exercises
        </Button>
        <img src={HeroBannerImage} alt = "banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner