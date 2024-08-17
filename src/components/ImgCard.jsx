import React from 'react';

function ImgCard({ imgUrl, width, height, repeat, bgSize, bgPosition, className, ...props }) {
    return (
        <div {...props}
            className={className}
            style={{
                backgroundImage: `url(${imgUrl})`,
            }} >
        </div>
    );
}

export default ImgCard;