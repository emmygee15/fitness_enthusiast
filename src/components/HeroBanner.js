import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/homebanner.jpeg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Enthusiast</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Go Hard Or Go Home <br />
      
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px"><br></br>
        Welcome to our fitness enthusiast, your one-stop destination for all your fitness needs. Our mission is to provide you with the tools and resources necessary to achieve your fitness goals and live a healthy and active lifestyle.

        Our website offers a wide range of fitness content, including workout plans, nutrition advice, and wellness tips. Whether you are a beginner or an experienced fitness enthusiast, we have something for everyone.

        Our workout plans are designed by certified personal trainers and are tailored to meet your individual needs and fitness level. From strength training and cardio to yoga and Pilates, we offer a variety of workouts to help you achieve your fitness goals.

        Our nutrition advice is based on the latest scientific research and is designed to help you make healthy and sustainable choices. We offer recipes, meal plans, and tips for healthy eating that will help you fuel your body for optimal performance.

        We also offer wellness tips and advice on how to live a healthy and balanced lifestyle. From stress management to sleep hygiene, we provide practical tips and strategies to help you improve your overall well-being.

        So whether you want to lose weight, build muscle, or simply improve your health and fitness, we have the resources and expertise to help you achieve your goals. Join us today and start your journey to a healthier, happier you!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>


    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-image" />
  </Box>
);

export default HeroBanner;
