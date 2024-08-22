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

export class ProgramsList {
    constructor(imgBannerUrl, country, programsList) {
        this.imgBannerUrl = imgBannerUrl
        this.country = country
        this.programs = programsList
    }
    static convertFromObj(jsonObj) {
        return new ProgramsList(jsonObj.imgBannerUrl, jsonObj.country, jsonObj.programs)
    }
}

export class ProgramContents {
    constructor(imgBannerUrl, country, program, htmlContents) {
        this.imgBannerUrl = imgBannerUrl
        this.country = country
        this.program = program
        this.htmlContents = htmlContents
    }
    static convertFromObj(obj) {
        return new ProgramContents(obj.imgBannerUrl, obj.country, obj.program, obj.htmlContents)
    }
}

export class HtmlContents {
    constructor(id, htmlContents) {
        this.id = id
        this.htmlContents = htmlContents
    }
}

export class NewContents {
    constructor(id, title, imgBannerUrl, htmlContents) {
        this.id = id
        this.title = title
        this.imgBannerUrl = imgBannerUrl
        this.htmlContents = htmlContents
    }
    static convertFromObj(obj) {
        return new NewContents(obj.id, obj.title, obj.imgBannerUrl, obj.htmlContents)
    }
}