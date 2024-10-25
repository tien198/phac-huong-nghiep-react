// Models
import { ProgramsList, ProgramContents } from '../models/Program';

// Data
import {
    laborExport as laborExportURL,
    admission as admissionURL,
    news as newsURL
} from '../ulti/convensions/urlList.json'
import news from '../../data/news.json';
import newContents from '../../data/news.contents.json';

import imgBannerUrl from '../../data/UI.layout/imgBanner.json';


export function programsLoader({ params }) {

    const { kindOfProgram, country } = params
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    let type;
    if (`/${kindOfProgram}` === laborExportURL.url)
        type = 'labor-export'
    else if (`/${kindOfProgram}` === admissionURL.url)
        type = 'admission'
    else if (`/${kindOfProgram}` === newsURL.url)
        type = 'news'

    // filter via country then convert to `LaborExportProgram`
    const programs = news.filter(i => i.country === params.country && i.type === type)
    const programsList = new ProgramsList(imgBanner.imgBannerUrl, programs)
    return programsList;
}

export function programDetailLoader({ params }) {
    const { id } = params
    const program = news.find(i => i.id === id)
    const { imgBannerUrl, htmlContents } = newContents.find(i => i.id === id)
    const contents = new ProgramContents(imgBannerUrl, program, htmlContents)
    return contents
}
