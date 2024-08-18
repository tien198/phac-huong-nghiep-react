import React from 'react';
import { Link } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

function Panel({ itemsList, className, ...props }) {
    return (
        <div className='mx-4'>
            <div className={`grid md:grid-cols-3 gap-16 container mx-auto ${className}`} {...props}>
                {itemsList.map(e => {
                    return <Link to={e.url} key={e.title}>
                        <ImgCard imgUrl={e.imgUrl} className='bg-no-repeat bg-cover bg-center h-64 lg:h-96 rounded-md' />
                        <p className='my-3'>{e.title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Panel;