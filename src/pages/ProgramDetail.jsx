import React from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// Model
import { ProgramContents } from '../models/Program';

// Ultilities
import createJSX from '../ulti/createJSX';


function ProgramDetail(props) {
    const { htmlContents, imgBannerUrl, program } = useLoaderData();

    const contents = []
    // html-react-parser lead to key props error
    createJSX(htmlContents, contents)

    return (
        <>
            <ImgCard imgUrl={`../${imgBannerUrl}`} className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='my-12' >
                <h1 className='text-center font-semibold text-2xl uppercase mb-8'>{program.title}</h1>
                <article className='flex flex-col gap-7'>
                    <span className='text-red-900'></span>
                    {contents}
                </article>
            </HtmlContents>
        </>
    );
}

export default ProgramDetail;