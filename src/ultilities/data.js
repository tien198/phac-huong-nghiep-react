// Models
import { ProgramsList, ProgramContents } from '../models/Program';

// Data
import lxPrograms from '../../data/laborExportPrograms.json';
import laborExportHtmlContents from '../../data/laborExportPrograms.htmlContents.json'

import admissions from '../../data/admissions.json'
import admissionHtmlContents from '../../data/admissions.htmlContents.json'

import news from '../../data/news.json';
import newContents from '../../data/news.contents.json';

import imgBannerUrl from '../../data/imgBanner.json';


export function laborExportProgramsLoader({ params }) {
    const country = params.country;
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    // filter via country then convert to `LaborExportProgram`
    const programs = lxPrograms.filter(i => i.country === params.country)

    const lxList = new ProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export function laborExportProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = lxPrograms.find(i => i.id === Number(id))
    const htmlContents = laborExportHtmlContents.find(i => i.id === Number(id)).htmlContents
    const lxp = new ProgramContents(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}


export function admissionsProgramsLoader({ params }) {
    const country = params.country;
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    // filter via country then convert to `Program`
    const programs = admissions.filter(i => i.country === params.country)

    const lxList = new ProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export function admissionnProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = admissions.find(i => i.id === Number(id))
    const htmlContents = admissionHtmlContents.find(i => i.id === Number(id)).htmlContents
    const lxp = new ProgramContents(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}

export function newsListLoader() {
    return news
}

export function newDetail({ params }) {
    const id = params.id
    return newContents.find(i => i.id === Number(id))
}