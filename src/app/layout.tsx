
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'material-icons/iconfont/material-icons.css'
import Navigation from './navigation'
import NavMenu from './navMenu'
import StoreProvider from '../state/store'

import Image from 'next/image'

import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shawn Lawsure Professional Profile',
  description: 'My personal and professional profile.',
  colorScheme: 'only light'
}

export default function RootLayout({children}: {children: React.ReactNode}) 
{
    return (
        <StoreProvider settings={{showMenu: false}}>
            <html lang="en">
                <body className={inter.className}>
                    <header className={`flex gap-5 font-bold bg-white ${styles.header}`}>
                        <NavMenu />
                        <div className='w-full flex flex-col gap-3 items-center py-2 px-2'>
							<div className='flex flex-col items-center text-gray-600'>
								<a href='/' className={styles.name}>
									<h1 className='text-center'>Shawn Lawsure</h1>
								</a>
								<span className='italic text-base'>Software Developer</span>
							</div>
                            <div className='flex gap-x-6 gap-y-3 justify-center text-sm font-normal flex-wrap'>
                                <a
                                    href='http://www.linkedin.com/in/shawnlawsure'
                                    className={styles.link}
                                    target='_blank'
                                >
                                    <Image src='/images/linkedin.png' alt='LinkedIn Image' width='15' height='15' />
                                    in/shawnlawsure
                                </a>
                                <a
                                    href='mailto:slawsure@gmail.com'
                                    className={styles.link}
                                >
                                    <span className="material-icons md-18">email</span>
                                    slawsure@gmail.com
                                </a>
                                <a
                                    href='tel:2076326087'
                                    className={styles.link}
                                >
                                    <span className="material-icons md-18">smartphone</span>
                                    (207) 632-6087
                                </a>
                            </div>
                        </div>
                    </header>
                    <main className="flex min-h-screen">
                        <Navigation />
                        <article className='w-full'>
                            {children}
                        </article>
                    </main>
                </body>
            </html>
        </StoreProvider>
    )
}
