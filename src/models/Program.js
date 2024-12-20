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
    constructor(imgBannerUrl, programsList) {
        this.imgBannerUrl = imgBannerUrl
        this.programs = programsList
    }
    static convertFromObj(jsonObj) {
        return new ProgramsList(jsonObj.imgBannerUrl, jsonObj.programs)
    }
}

export class ProgramContents {
    constructor(imgBannerUrl, program, htmlContents) {
        this.imgBannerUrl = imgBannerUrl
        this.program = program
        this.htmlContents = htmlContents
    }
    static convertFromObj(obj) {
        return new ProgramContents(obj.imgBannerUrl, obj.program, obj.htmlContents)
    }
}

export class HtmlContents {
    constructor(id, htmlContents, imgBannerUrl) {
        this.id = id
        this.imgBannerUrl = imgBannerUrl
        this.htmlContents = htmlContents
    }
}

export class DivComponent {
    constructor(component, div, className) {
        this.component = component
        this.div = div
        this.className = className
    }
}

export class UlComponent {
    constructor(component, li, className) {
        this.component = component
        this.li = li
        this.className = className
    }
}

export class ImgCardComponent {
    constructor(imgUrl, className) {
        this.imgUrl = imgUrl
        this.className = className
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