import React from 'react';
import './Footer.scss';

export default function Footer() {
    const link = (
        <a href='https://github.com/NotKijana' target='_blank' rel="noreferrer" >
            Not Kijana
        </a>
    )
    return (
        <div className='Footer'>
            <footer className='Footer_text'>Developed by&nbsp;{link}
            </footer>
        </div>
    )
}
