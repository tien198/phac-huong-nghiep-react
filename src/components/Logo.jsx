import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ className, ...props }) {
    return (
        <Link to='/' className={`font-bold uppercase ${className}`}>
            <span className='text-3xl'>Phác</span>
            <div className='text-main text-xl'>hướng nghiệp</div>
        </Link>
    );
}

export default Logo;