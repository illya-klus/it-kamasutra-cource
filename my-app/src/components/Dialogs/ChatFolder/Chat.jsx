import classes from './Chat.module.css';




const Messege = (props) => {
    return(
    <div className={classes.Messege}>
        <div className="nickname">{props.nickname}</div>
        <div className="text">{props.text}</div>
    </div>
    
    );
}


const Chat = (props) => {
    return(
        <div className={classes.chat}>
            {props.messeges.map((e) => <Messege nickname={e.nickname} text={e.text}/>)}
        </div>
    );
}


export default Chat;
