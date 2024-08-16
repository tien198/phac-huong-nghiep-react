import React from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// OOP classes
import { Program, LaborExportProgramsList } from '../models/LaborExprortProgram';


function ProgramsList({ ...props }) {
    const lxList = LaborExportProgramsList.convertToLaborExport(useLoaderData());
    const country = lxList.country;
    const laborExports = lxList.programs;

    return (
        <>
            <ImgCard imgUrl={lxList.imgBannerUrl} className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='flex flex-col gap-4'>
                <ul>
                    {laborExports.map(i =>
                        <Link to={`/co-hoi-viec-lam/${country}/${i.id}`} key={i.id} >
                            <li>{i.title}</li>
                        </Link>)}

                </ul>
            </HtmlContents>
        </>
    );
}

export default ProgramsList;