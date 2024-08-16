// Models
import { LaborExportProgramsList, LaborExportProgram } from '../models/LaborExprortProgram';

// Data
import lxPrograms from '../../data/laborExportPrograms.json';
import lxProgramsHtmlContents from '../../data/laborExportPrograms.htmlContents.json'
import imgBannerUrl from '../../data/imgBanner.json';

export function lxProgramsLoader({ params }) {
    const country = params.country;
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    // filter via country then convert to `LaborExportProgram`
    const programs = lxPrograms.filter(i => i.country === params.country)

    const lxList = new LaborExportProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export function lxProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = lxPrograms.find(i => i.id === Number(id))
    const htmlContents = lxProgramsHtmlContents.find(i => i.id === Number(id)).htmlContents
    const lxp = new LaborExportProgram(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}
