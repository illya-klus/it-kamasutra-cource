import { NavLink, BrowserRouter, Routes, Route} from 'react-router-dom';
import classes from './Dialogs.module.css';
import Chat from './ChatFolder/Chat';


const GrishaMessages = [
  {
    from: 'Grisha',
    text: 'Здарова, брат. Як там проєкт просувається?'
  },
  {
    from: 'me',
    text: 'Та вже норм, вчора заливав усе на GitHub.'
  },
  {
    from: 'Grisha',
    text: 'Круто, потім гляну. Може щось підкажу.'
  },
  {
    from: 'me',
    text: 'Окей, буду вдячний 🙏'
  },
  {
    from: 'Grisha',
    text: 'До речі, сьогодні ввечері залітаємо в доту?'
  },
  {
    from: 'me',
    text: '100%, після 20:00 вільний.'
  }
];




const DialogItem = (props) => {
    return(
        <NavLink className={({ isActive }) => isActive ? classes.activeLink + " " + classes.item : classes.item} to={'/Dialogs/' + props.path} > {props.name} </NavLink>
    );

}



const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes["dialog-items"]}>
                {props.friends.map((e) => <DialogItem name={e.name} path={e.id} />)}
            </div>
        
            <Chat messeges = {GrishaMessages} />
        </div>
    );
}


export default Dialogs;










