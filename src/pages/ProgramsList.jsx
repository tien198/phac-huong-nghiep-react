import React from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// OOP classes
import { ProgramsList as ProgrList } from '../models/Program';


function ProgramsList({ kindOfProgram, ...props }) {
    const lxList = ProgrList.convertFromObj(useLoaderData());
    const country = lxList.country;
    const laborExports = lxList.programs;

    return (
        <>
            <ImgCard imgUrl={lxList.imgBannerUrl} className='bg-center bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='flex flex-col gap-4'>
                <ul>
                    {laborExports.map(i =>
                        <li className='my-4 hover:text-blue-700' key={i.id}>
                            <Link to={`/${kindOfProgram}/${country}/${i.id}`}  >
                                {i.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </HtmlContents>
        </>
    );
}

export default ProgramsList;