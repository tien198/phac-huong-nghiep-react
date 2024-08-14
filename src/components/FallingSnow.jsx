import React from 'react';
import styles from './FallingSnow.module.scss';

function FallingSnow({ children, ...props }) {
    const snows = [];
    for (let i = 0; i < 100; i++) {
        snows.push(<div className={styles.snow} key={i}></div>)
    }
    return (
        <div className={`${styles['snow-effect']} `}>
            {snows}
            <div>
                {children}
            </div>
        </div>
    );
}

export default FallingSnow;