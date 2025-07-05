import classes from './Chat.module.css';




const Messege = (props) => {
    return(
    <div className={props.className}>
        <div className={classes.nickname}>{props.nickname}</div>
        <div className={classes.textMessege}>{props.text}</div>
    </div>
    
    );
}


const Chat = (props) => {
    return(
        <div className={classes.chat}>
            {props.messeges.map((e) => <Messege className={(e.from == "me") ? classes.MyMessege : classes.OtherMessege} nickname={e.from} text={e.text}/>)}
        </div>
    );
}


export default Chat;
