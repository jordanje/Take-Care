import { useEffect, useState } from "react"
import Theme from "./Theme"
import './ThemePage.css'

export default function ThemePage({themes, updateTheme}){

    return(
        <div className="theme-page">
            <h3>Choose a Theme</h3>
            {themes.map(theme => <Theme key={theme.id} theme={theme} chooseTheme={updateTheme}/>)}
        </div>
    )
}