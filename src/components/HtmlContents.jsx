import React from 'react';
import styles from './HtmlContents.module.css'

function HtmlContents({ className, children, ...props }) {
    return (
        <div className='mx-4' >
            <div className={`container mx-auto ${className} ${styles.contents}`} {...props}>
                {children}
            </div>
        </div >
    );
}

export default HtmlContents;