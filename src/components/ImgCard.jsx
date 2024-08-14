import React from 'react';

function ImgCard({ imgUrl, width, height, repeat, bgSize, bgPosition, ...props }) {
    return (
        <div {...props} style={{
            backgroundImage: `url(${imgUrl})`,
        }} >
        </div>
    );
}

export default ImgCard;