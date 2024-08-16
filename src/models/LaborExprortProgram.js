export class Program {
    constructor(id, title, country) {
        this.id = id
        this.title = title
        this.country = country
    }
    static convertFromObj(Obj) {
        return new Program(Obj.id, Obj.title, Obj.country)
    }
}

export class ImgBanner {
    constructor(jsonObj) {
        this.country = jsonObj.country
        this.imgBanprogramnerUrl = jsonObj.imgBannerUrl
    }
}

export class LaborExportProgramsList {
    constructor(imgBannerUrl, country, programsList) {
        this.imgBannerUrl = imgBannerUrl
        this.country = country
        this.programs = programsList
    }
    static convertToLaborExport(jsonObj) {
        return new LaborExportProgramsList(jsonObj.imgBannerUrl, jsonObj.country, jsonObj.programs)
    }
}

export class LaborExportProgram {
    constructor(imgBannerUrl, country, program, htmlContents) {
        this.imgBannerUrl = imgBannerUrl
        this.country = country
        this.program = program
        this.htmlContents = htmlContents
    }
    static convertFromObj(obj) {
        return new LaborExportProgram(obj.imgBannerUrl, obj.country, obj.program, obj.htmlContents)
    }
}

export class LaborExportHtmlContents {
    constructor(id, htmlContents) {
        this.id = id
        this.htmlContents = htmlContents
    }
}