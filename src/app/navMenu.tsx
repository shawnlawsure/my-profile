
'use client'

import { useContext } from 'react';

import { SettingsContext, SettingsContextType } from '../state/store'
import styles from './navMenu.module.css'

export default function NavMenu() {
        
    const state:SettingsContextType | null = useContext<SettingsContextType | null>(SettingsContext)

    function onMenuClick() {
        state?.setSettings({ ...state?.settings, showMenu: !state?.settings.showMenu })
    }

    return (
        <div className={styles.menu}>
            <button 
                className='h-full w-full bg-transparent flex items-center justify-center'
                onClick={onMenuClick}
            >
                <span className="material-icons">menu</span>
            </button>
        </div>
    )
}
