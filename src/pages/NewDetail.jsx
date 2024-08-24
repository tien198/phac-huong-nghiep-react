import React, { useEffect, useRef } from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// Model
import { NewContents } from '../models/Program';

// Ultilities
import createJSX from '../ultilities/createJSX';


function NewDetail(props) {
    const newDetail = NewContents.convertFromObj(useLoaderData());
    console.log(newDetail);


    const contents = []

    // html-react-parser lead to key props error
    createJSX(newDetail.htmlContents, contents)

    return (
        <>
            <ImgCard imgUrl={`../${newDetail.imgBannerUrl}`} className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='my-12' >
                <h1 className='text-center font-semibold text-2xl uppercase mb-8'>{newDetail.title}</h1>
                <article className='flex flex-col gap-4 ' >
                    {contents}
                </article>
            </HtmlContents>
        </>
    );
}

export default NewDetail;