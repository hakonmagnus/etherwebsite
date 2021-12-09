import React from 'react';
import config from '../config/config';

export default function Hero() {
    return (
        <>
            <div className="jumbotron text-center">
                <img src={ config.base + "/cover.png" } alt="Ether Operating Systeem" />
                <h1>The optimized x86 assembly operating system</h1>
            </div>
        </>
    );
}