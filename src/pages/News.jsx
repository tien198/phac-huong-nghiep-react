import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import HtmlContents from '../components/HtmlContents'
import ImgCard from '../components/ImgCard';


function News(props) {
    const news = useLoaderData()
    return (
        <>
            <ImgCard imgUrl='./imgs/index/slider.jpg' className='bg-center bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='flex flex-col gap-4'>
                <ul>
                    {news.map(i =>
                        <li className='my-4 hover:text-blue-700' key={i.id}>
                            <Link to={`/tin-tuc/${i.id}`}  >
                                {i.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </HtmlContents>
        </>
    );
}

export default News;
