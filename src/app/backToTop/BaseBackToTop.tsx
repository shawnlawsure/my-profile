'use client'

import { useState, KeyboardEvent } from 'react'

import styles from './BaseBackToTop.module.css'

function BaseBackToTop()
{
    const threshhold = 300;

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => {         
        setVisible(document.documentElement.scrollTop > threshhold)
    }
    
    const scrollToTop = () =>{ 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        })
    };
    
    function onKeyDown(ev:KeyboardEvent) {
        if (ev?.code === 'Enter') {
            scrollToTop()
        }
    }

	if (typeof window !== "undefined") {
		window.addEventListener('scroll', toggleVisible)
	}

	return (
        <a 
            id="backToTop"
            className={styles.parent}
            tabIndex={1}
            style={{display: visible ? 'flex' : 'none'}}
            onClick={scrollToTop}
            onKeyDown={onKeyDown}
        >
            Back To Top
        </a>
	)
}

export default BaseBackToTop