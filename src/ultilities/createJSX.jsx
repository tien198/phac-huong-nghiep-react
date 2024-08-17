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
    if (obj.component === 'ImgCard')
        elArr.push(createImgCard(obj))
}

function createImgCard(obj) {
    return <ImgCard className={obj.className} imgUrl={obj.imgUrl} key={obj.imgUrl} />
}