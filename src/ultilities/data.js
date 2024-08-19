// Models
import { ProgramsList, ProgramContents } from '../models/Program';


export async function careerOpportunities(params) {
    return await ((await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/careerOpportunities.json')).json())
}
export async function studyAbroad(params) {
    return await ((await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/studyAbroad.json')).json())
}

export async function homeLoader(params) {
    return {
        careerOpportunities: await careerOpportunities(),
        studyAbroad: await studyAbroad()
    }
}

async function getImgBannerJson() {
    return await (await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/imgBanner.json')).json()
}


export async function laborExportProgramsLoader({ params }) {
    const country = params.country;

    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)
    const programs = (await ((await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/laborExportPrograms.json')).json())).filter(i => i.country === params.country)

    const lxList = new ProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export async function laborExportProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)

    // const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = (await (await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/laborExportPrograms.json')).json()).find(i => i.id === Number(id))
    const htmlContents = (await ((await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/laborExportPrograms.htmlContents.json'))).json()).find(i => i.id === Number(id)).htmlContents
    const lxp = new ProgramContents(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}


export async function admissionsProgramsLoader({ params }) {
    const country = params.country;
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)

    // const imgBanner = imgBannerUrl.find(i => i.country === country)
    // filter via country then convert to `Program`
    const programs = (await ((await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/admissions.json')).json())).filter(i => i.country === params.country)

    const lxList = new ProgramsList(imgBanner.imgBannerUrl, country, programs)

    return lxList;
}

export async function admissionnProgramDetailLoader({ params }) {
    const country = params.country
    const id = params.id
    const imgBanner = (await getImgBannerJson()).find(i => i.country === country)
    // const imgBanner = imgBannerUrl.find(i => i.country === country)
    const program = (await ((await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/admissions.json')).json())).find(i => i.id === Number(id))
    const htmlContents = (await (await fetch('https://phac-huong-nghiep-react-git-html-react-parser-tien998s-projects.vercel.app/data/admissions.htmlContents.json')).json()).find(i => i.id === Number(id)).htmlContents
    const lxp = new ProgramContents(imgBanner.imgBannerUrl, country, program, htmlContents)
    return lxp
}