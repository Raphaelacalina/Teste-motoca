import style from './styles.module.css'

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <img src="home-icon.png" style={{
                    width: "33px",
                    height: "28px"
                }} /> </div>
            <div >
                <img src="avatar.png" style={{ borderRadius: "50%", }} />
            </div>
        </header>
    )
}