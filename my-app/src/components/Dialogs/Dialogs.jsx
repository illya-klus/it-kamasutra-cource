import { NavLink, BrowserRouter, Routes, Route} from 'react-router-dom';
import classes from './Dialogs.module.css';
import Chat from './ChatFolder/Chat';

const DialogItem = (props) => {
    return(
        <NavLink to={'/Dialogs/' + props.path} className={classes.item}> {props.name} </NavLink>
    );

}



const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes["dialog-items"]}>
                <DialogItem name='Illya' path='1' />
                <DialogItem name='Sasha' path='2' />
                <DialogItem name='Marinka' path='3' />
                <DialogItem name='Grisha' path='4' />
            </div>

            {/* <Chat/> */}

            
        </div>
    );
}


export default Dialogs;
