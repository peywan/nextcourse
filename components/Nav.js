import navStyles from '../styles/nav.module.css';
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <link href="/"/>
                    Home
                    <link/>
                </li>
                <li>
                    <link href="/about"/>
                    About
                    <link/>
                </li>
            </ul>
        </nav>
    )
}
export default Nav
