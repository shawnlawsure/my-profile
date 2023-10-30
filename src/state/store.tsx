'use client'

import { createContext, useState, ReactElement } from 'react'

export type Settings = {
    showMenu: boolean
}

export type SettingsContextType = {
    settings: Settings,
    setSettings: (settings: Settings) => void
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

interface StoreProps {
    children:ReactElement,
    settings:Settings
}

const StoreProvider = (props: StoreProps) => {
    const [settings, setSettings] = useState<Settings>(props.settings)

    return (
        <SettingsContext.Provider value={{settings, setSettings}}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default StoreProvider