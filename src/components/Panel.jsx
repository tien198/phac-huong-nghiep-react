import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// data
import { admission, laborExport } from '../ulti/convensions/urlList.json'

function Panel({ itemsList, urlPre, className, ...props }) {
    const { kindOfProgram } = useParams()

    let url = urlPre || ''
    if (`/${kindOfProgram}` === laborExport.url)
        url = laborExport.url
    else if (`/${kindOfProgram}` === admission.url)
        url = admission.url

    return (
        <div className='mx-4'>
            <div className={`grid md:grid-cols-3 gap-16 container mx-auto ${className}`} {...props}>
                {itemsList.map(e => {
                    if (e.country === '') return
                    return <Link to={`${url}/${e.country}`} key={e.title}>
                        <ImgCard imgUrl={e.imgPosterUrl} className='bg-no-repeat bg-cover bg-center h-64 lg:h-96 rounded-md' />
                        <p className='my-3'>{e.title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Panel;