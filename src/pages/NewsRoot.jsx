import React from 'react';
import ImgCard from '../components/ImgCard';
import { Outlet } from 'react-router-dom';


function NewsRoot(props) {
    return (
        <>
            {/* <ImgCard imgUrl='./imgs/index/slider.jpg' className='bg-center bg-no-repeat bg-cover w-full h-96' /> */}
            <Outlet />

        </>
    );
}

export default NewsRoot;