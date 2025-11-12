import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    
    return(
        <nav className={style.nav}>
            <Link to={'/'} >
                <h3>Home</h3>
            </Link>
            <Link to={'/projects'} >
                <h3>Projects</h3>
            </Link>
            <Link to={'/blog'} >
                <h3>Blog</h3>
            </Link>
            <Link to={'/contact'} >
                <h3>Contact</h3>
            </Link>
        </nav>
    )
}