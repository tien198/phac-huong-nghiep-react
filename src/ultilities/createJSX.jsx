import HTMLReactParser from 'html-react-parser';

import ImgCard from '../components/ImgCard';

/**
 * @param {Array} elArr
 */
export default function createJSX(obj, elArr) {

    if (typeof obj === 'string') {
        // html-react-parser lead to key props error
        elArr.push(HTMLReactParser(obj))
        return true
    }
    else if (Array.isArray(obj)) {
        const el = []
        elArr.push(el)
        obj.forEach((e, i) => {
            return createJSX(e, el)
        })
    }
    else if (typeof obj === 'object') {
        addJSX(obj, elArr)
        return true
    }
}

function addJSX(obj, elArr) {
    if (obj.component === 'ul')
        elArr.push(createUl(obj))
    else if (obj.component === 'div')
        elArr.push(createDiv(obj))

    else if (obj.component === 'ImgCard')
        elArr.push(createImgCard(obj))
}

function createDiv(obj) {
    const divContents = []
    createJSX(obj.div, divContents)
    return <div className={obj.className}>
        {divContents}
    </div>
}

function createUl(obj) {
    const liContents = []
    createJSX(obj.li, liContents)
    return <ul className={obj.className}>
        {liContents}
    </ul>
}

function createImgCard(obj) {
    return <ImgCard className={obj.className} imgUrl={obj.imgUrl} key={obj.imgUrl} />
}

class BaseComponent {
    constructor(component, className) {
        this.component = component
        this.className = className
    }
}

class Ul extends BaseComponent {
    constructor(component, className, li) {
        super(component, className)
        this.li = li
    }
}

class ImgCardRender extends BaseComponent {
    constructor(component, className, imgUrl) {
        super(component, className)
        this.imgUrl = imgUrl
    }
}