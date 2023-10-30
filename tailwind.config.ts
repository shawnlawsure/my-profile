import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'inter-bold': ['Inter-Bold']
        },
        fontSize: {
            sm: ['12px', '18px'],
            base: ['14px', '20px'],
            lg: ['16px', '24px'],
            xl: ['20px', '28px'],
            xxl: ['24px', '32px']
        },    
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                '1': '0px 0px 14px 0px rgba(0, 0, 0, 0.14)',
                /*outline: 'rgb(244 243 246 / 20%) 0px 2px 2px 0px, rgb(0 0 0 / 10%) 0px 2px 2px 0px, rgb(97 39 158) 0px 0px 4px 3px inset',*/
                outline: 'rgb(244 243 246 / 20%) 0px 2px 2px 0px, rgb(0 0 0 / 10%) 0px 2px 2px 0px, rgb(103 122 184) 0px 0px 4px 3px inset',
                card: '0px 2px 10px 0px rgba(0, 0, 0, 0.09)',
                DEFAULT: '0px 2px 10px 0px rgba(0, 0, 0, 0.09)'
            },
            width: {
                px5: '5px',
            },
            minHeight: {
                menuLink: '4.5rem'
            },
            colors: {
                primary: '#677ab8',       //'#575195',
                gray: {
                    background: '#fafafa',
                    light: 'rgba(74, 74, 74, 0.04)',
                    DEFAULT: '#cccccc',
                    dark: '#666666',
                    link: 'rgb(107, 107, 107)',        
                    slate: '#818B8F',
                    border: 'rgb(233, 231, 236)',
                    navBorder: '#e5e5e5'
                },
                wm: {
                    light: 'rgb(238, 237, 244)'
                },
                error: 'darkred',
                border: 'rgb(46, 27, 70)'
            },
        },
    },
    plugins: [],
}

export default config
