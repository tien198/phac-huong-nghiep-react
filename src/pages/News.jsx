import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import HtmlContents from '../components/HtmlContents'

// data
import { news } from '../ulti/convensions/urlList.json'


function News(props) {
    const newsItem = useLoaderData()
    return (
        <HtmlContents className='flex flex-col gap-4'>
            <ul>
                {newsItem.map(i =>
                    <li className='my-4 hover:text-blue-700' key={i.id}>
                        <Link to={`${news.url}/${i.id}`}  >
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
    const response = await fetch('/data/news.json')
    const data = await response.json()
    return data
}