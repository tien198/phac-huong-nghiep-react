import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import HtmlContents from '../components/HtmlContents'

// data
import news from '../../data/news.json'


function News(props) {
    const newsItem = useLoaderData()
    console.log(newsItem);

    return (
        <HtmlContents className='flex flex-col gap-4'>
            <ul>
                {newsItem.map(i =>
                    <li className='my-4 hover:text-blue-700' key={i.id}>
                        <Link to={`${i.id}`}  >
                            {i.title}
                        </Link>
                    </li>
                )}
            </ul>
        </HtmlContents>
    );
}

export default News;


export async function newsListLoader() {
    return news
}