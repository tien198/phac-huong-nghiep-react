import React, { useEffect, useRef } from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';
import { LaborExportProgram } from '../models/LaborExprortProgram';

function ProgramDetail(props) {
    const laborExport = LaborExportProgram.convertFromObj(useLoaderData());
    const htmlContents = useRef();
    useEffect(() => {
        if (htmlContents.current.childElementCount == 0)
            laborExport.htmlContents.foreach(i => {
                htmlContents.current.insertAdjacentHTML('beforeend', laborExport.htmlContents);
            })
    }, [])

    return (
        <>
            <ImgCard imgUrl={laborExport.imgBannerUrl} className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='flex flex-col gap-4 my-12'>
                <h1 className='text-center font-semibold text-2xl uppercase'>{laborExport.program.title}</h1>
                <div ref={htmlContents}>
                </div>
            </HtmlContents>
        </>
    );
}

export default ProgramDetail;