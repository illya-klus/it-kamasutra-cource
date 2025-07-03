import classes from './Chat.module.css';




const Messege = (props) => {
    return(<div className={classes.messege}>{props.text}</div>);
}


const Chat = (props) => {
    return(
        <div className={classes.chat}>
            <Messege text='Hi!' />
        </div>
    );
}


export default Chat;
