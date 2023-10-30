
'use client'

import { useContext, Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SettingsContext, SettingsContextType } from '../state/store'
import BaseBackToTop from './backToTop/BaseBackToTop'
import styles from './navigation.module.css'

export default function Navigation() {

    const pathname = usePathname()
    const state:SettingsContextType | null = useContext<SettingsContextType | null>(SettingsContext)
                
    type NavLinkProps = {
        url: string,
        title: string,
        iconName: string
    }
    function NavLink({url, title, iconName}:NavLinkProps) {
        return (
            <li>
                <Link href={url} className={`${styles.link} ${pathname === url ? styles.active : ''}`} onClick={closeMenu}>
                    <span className="material-icons">{iconName}</span>
                    <span className='text-center font-semibold text-base'>{title}</span>
                </Link>
            </li>
        )
    }

    function closeMenu() {
        state?.setSettings({ ...state.settings, showMenu: false })
    }

    return (
        <Fragment>
            <BaseBackToTop />
            <nav className={styles.nav + ` ${state?.settings.showMenu ? styles.show : styles.hide}`}>            
                <div className={styles.close}>
                    <button
                        className='w-full h-full'
                        onClick={closeMenu}
                    >
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <ul className=''>
                    <NavLink url='/me' title='About Me' iconName='mood' />
                    <NavLink url='/skills' title='Skills' iconName='directions_run' />
                    <NavLink url='/work-history' title='Work History' iconName='work_history' />
                    <NavLink url='/portfolio' title='Portfolio' iconName='folder_special' />
                    <NavLink url='/interests' title='Interests' iconName='interests' />					
                </ul>
            </nav>
        </Fragment>
    )
}
