import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item} >
                <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to="/Posts">Posts</NavLink>
            </div>

            <div className={classes.item} >
                <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to="/Dialogs">Messenges</NavLink>
            </div>

            <div className={classes.item} >
                <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to="/News">News</NavLink>
            </div>

            <div className={classes.item} >
                <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to="/Music">Music</NavLink>
            </div>

            <div className={classes.item} >
                <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to="/Settings">Settings</NavLink>
            </div>

            <div className={classes.item} >
                <NavLink className={({ isActive }) => isActive ? classes.activeLink : ''} to="/AddPost">Add Post</NavLink>
            </div>
        </nav>
    );    
}

export default Nav;