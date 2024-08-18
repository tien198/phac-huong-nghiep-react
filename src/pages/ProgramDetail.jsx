import React, { useEffect, useRef } from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// Model
import { ProgramContents } from '../models/Program';

// Ultilities
import createJSX from '../ultilities/createJSX';


function ProgramDetail(props) {
    const laborExport = ProgramContents.convertFromObj(useLoaderData());

    const contents = []

    // html-react-parser lead to key props error
    createJSX(laborExport.htmlContents, contents)

    return (
        <>
            <ImgCard imgUrl={laborExport.imgBannerUrl} className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='my-12' >
                <h1 className='text-center font-semibold text-2xl uppercase mb-8'>{laborExport.program.title}</h1>
                <article className='flex flex-col gap-4 ' >
                    {contents}
                </article>
            </HtmlContents>
        </>
    );
}

export default ProgramDetail;