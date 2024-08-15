import React from 'react';

function Heading({ children }) {
    return (
        <h2 className='font-semibold text-4xl text-main my-7'>{children}</h2>
    )
}

export default Heading;