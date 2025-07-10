import { NavLink, BrowserRouter, Routes, Route} from 'react-router-dom';
import classes from './Dialogs.module.css';
import Chat from './ChatFolder/Chat';

import {updateMessegeText, addNewMessegeActionCreator} from '../../redux/dialogs-reducer'


const DialogItem = (props) => {
    return(
        <NavLink className={({ isActive }) => isActive ? classes.activeLink + " " + classes.item : classes.item} to={'/Dialogs/' + props.path} > {props.name} </NavLink>
    );

}


const Dialogs = (props) => {
    let changeMessege = (e) =>{
        let newText = e.target.value;
        props.dispatch(updateMessegeText(newText));
    }

    let sentMessege = () => {
        let text = props.dialogsData.messegeText;
        if(text === "") return;

        props.dispatch(updateMessegeText(""));
        props.dispatch(addNewMessegeActionCreator(text));
        
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes["dialog-items"]}>
                {props.dialogsData.userFriends.map((e) => <DialogItem name={e.name} path={e.id} />)}
            </div>

            <div className={classes.Chat}>
              <Chat messeges = {props.dialogsData.dialogs.GrishaMessages} />
            </div>

            <div className={classes.chatForm} >
                <textarea
                    onChange={changeMessege}
                    value={props.dialogsData.messegeText}
                    type="text"
                    placeholder="Введіть повідомлення..."
                    className={classes.chatInput}
                />
                <button
                    className={classes.chatButton}
                    onClick={sentMessege}
                >Надіслати</button>
            </div>
            
        </div>
    );
}


export default Dialogs;










