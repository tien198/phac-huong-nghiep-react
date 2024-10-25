import React from 'react';
import { useParams } from 'react-router-dom';

import Heading from '../components/Heading';
import Panel from '../components/Panel';

// data
import programsCategory from '../../data/programsCategory.json';
import { admission, laborExport } from '../ulti/convensions/urlList.json'
import programType from '../ulti/convensions/programType.json';

export default function ProgramCategory(props) {
    const { kindOfProgram } = useParams()

    let heading = '', itemsList;
    if (`/${kindOfProgram}` === laborExport.url) {
        heading = 'CƠ HỘI VIỆC LÀM'
        itemsList = programsCategory.filter(i => i.type === programType.laborExport)
    }
    else if (`/${kindOfProgram}` === admission.url) {
        heading = 'Các chương trình du học và học bổng hấp dẫn'
        itemsList = programsCategory.filter(i => i.type === programType.admission)
    }
    return (
        <>
            {/* <ImgCard imgUrl='./imgs/index/slider.jpg' className='bg-top bg-no-repeat bg-cover w-full h-96' /> */}
            <div className='text-center mt-7'>
                <div id='xkld' className=' bg-gray-50 py-7 '>
                    <Heading>{heading}</Heading>
                    <Panel itemsList={itemsList} className=' ' />
                </div>
            </div>
        </>
    );
}

