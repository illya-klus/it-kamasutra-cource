import { NavLink, BrowserRouter, Routes, Route} from 'react-router-dom';
import classes from './Dialogs.module.css';
import Chat from './ChatFolder/Chat';



const DialogItem = (props) => {
    return(
        <NavLink className={({ isActive }) => isActive ? classes.activeLink + " " + classes.item : classes.item} to={'/Dialogs/' + props.path} > {props.name} </NavLink>
    );

}



const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes["dialog-items"]}>
                {props.dialogsData.userFriends.map((e) => <DialogItem name={e.name} path={e.id} />)}
            </div>

            <div className={classes.Chat}>
              <Chat messeges = {props.dialogsData.dialogs.GrishaMessages} />
            </div>

            <form className={classes.chatForm} onSubmit={props.handleSend}>
                <input
                    type="text"
                    placeholder="Введіть повідомлення..."
                    className={classes.chatInput}
                />
                <button type="submit" className={classes.chatButton}>Надіслати</button>
            </form>
            
        </div>
    );
}


export default Dialogs;










