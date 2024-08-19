// Models
import { ProgramsList, ProgramContents } from '../models/Program';


export async function careerOpportunities(params) {
    return await ((await fetch('/data/careerOpportunities.json')).json())
}
export async function studyAbroad(params) {
  return await ((await fetch('/data/studyAbroad.json')).json())
}

export async function homeLoader(params) {
    return {
        careerOpportunities: await careerOpportunities(),
        studyAbroad: await studyAbroad()
    }
}

async function getImgBannerJson(){
    return await (await fetch('/data/imgBanner.json')).json()
}


export async function laborExportProgramsLoader({ params }) {
    const country = params.country;
    
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)
    const programs = (await ((await fetch('/data/laborExportPrograms.json')).json())).filter(i => i.country === params.country)

    const lxList = new ProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export async function laborExportProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)

    // const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = (await (await fetch('/data/laborExportPrograms.json')).json()).find(i => i.id === Number(id))
    const htmlContents =  (await ((await fetch('/data/laborExportPrograms.htmlContents.json'))).json()).find(i => i.id === Number(id)).htmlContents
    const lxp = new ProgramContents(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}


export async function admissionsProgramsLoader({ params }) {
    const country = params.country;
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)
    
    // const imgBanner = imgBannerUrl.find(i => i.country === country)
    // filter via country then convert to `Program`
    const programs = (await ((await fetch('/data/admissions.json')).json())).filter(i => i.country === params.country)

    const lxList = new ProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export async function admissionnProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)
    // const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = (await ((await fetch('/data/admissions.json')).json())).find(i => i.id === Number(id))
    const htmlContents = (await (await fetch('/data/admissions.htmlContents.json')).json()).find(i => i.id === Number(id)).htmlContents
    const lxp = new ProgramContents(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}