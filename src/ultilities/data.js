// Models
import { ProgramsList, ProgramContents } from '../models/Program';

// Data
import news from '../../data/news.json';
import newContents from '../../data/news.contents.json';

import imgBannerUrl from '../../data/imgBanner.json';


export function programsLoader({ params }) {
    console.log(params);

    const { kindOfProgram, country } = params
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    let type;
    if (kindOfProgram === 'co-hoi-viec-lam')
        type = 'labor-export'
    else if (kindOfProgram === 'tu-van-du-hoc')
        type = 'admission'
    else if (kindOfProgram === 'tintuc')
        type = 'news'
    // filter via country then convert to `LaborExportProgram`
    const programs = news.filter(i => i.country === params.country && i.type === type)
    const programsList = new ProgramsList(imgBanner.imgBannerUrl, programs)
    return programsList;
}

export function programDetailLoader({ params }) {
    console.log(params);

    const { id } = params
    const program = news.find(i => i.id === id)
    const { imgBannerUrl, htmlContents } = newContents.find(i => i.id === id)
    const contents = new ProgramContents(imgBannerUrl, program, htmlContents)
    return contents
}

export function newsListLoader() {
    return news
}