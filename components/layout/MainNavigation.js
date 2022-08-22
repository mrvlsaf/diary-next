import classes from './MainNavigation.module.css'
import Link from 'next/link'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href='/'><div className={classes.logo}>Diary Next</div></Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Create Journal</Link>
                    </li>
                    <li>
                        <Link href='/journals'>All Journals</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;