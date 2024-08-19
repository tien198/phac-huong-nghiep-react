import React from 'react';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import ImgCard from '../components/ImgCard';
import { useLoaderData } from 'react-router-dom';

// data
// import careerOpportunities from '../../data/careerOpportunities.json';

function CareerOpportunities(props) {
const careerOpportunities = useLoaderData()
    return (
        <>
            {/* <ImgCard imgUrl='./imgs/index/slider.jpg' className='bg-top bg-no-repeat bg-cover w-full h-96' /> */}
            <div className='text-center mt-7'>
                <div id='xkld' className=' bg-gray-50 py-7 '>
                    <Heading>CƠ HỘI VIỆC LÀM</Heading>
                    <Panel itemsList={careerOpportunities} className=' ' />
                </div>
            </div>
        </>
    );
}

export default CareerOpportunities;
