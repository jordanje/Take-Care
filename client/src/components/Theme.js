import "./Theme.css"

export default function Theme({theme, chooseTheme}) {
    return (
        <div className="themes" onClick={() => chooseTheme(theme)} >
            <div className="theme-name">
                <h4>{theme.name}</h4>
            </div>
            <div className="theme-background" style={{ backgroundImage : `url(${theme.background})`, backgroundSize: '100%', backgroundPositionY: "55%"}}>
                <p></p>
            </div>
        </div>
    )
}