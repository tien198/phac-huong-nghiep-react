import React from 'react';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import ImgCard from '../components/ImgCard';
import { useLoaderData } from 'react-router-dom';

// data
// import studyAbroad from '../../data/studyAbroad.json';

function  StudyAbroad(props) {
    const studyAbroad = useLoaderData()
    return (
        <>
            {/* <ImgCard imgUrl='./imgs/index/slider.jpg' className='bg-top bg-no-repeat bg-cover w-full h-96' /> */}
            <div className='text-center mt-7'>
                <div id='xkld' className=' bg-gray-50 py-7 '>
                    <Heading>Các chương trình du học và học bổng hấp dẫn</Heading>
                    <Panel itemsList={studyAbroad} className=' ' />
                </div>
            </div>
        </>
    );
}

export default StudyAbroad;