import React from 'react';

function HtmlContents({ className, children, ...props }) {
    return (
        <div className='mx-4' >
            <div className={`container mx-auto ${className}`} {...props}>
                {children}
            </div>
        </div >
    );
}

export default HtmlContents;