import classes from './ProfileInfo.module.css'
import baseImg from '../../../assets/image/download.png';


let ProfileInfo = (props) => {
    let el;

    el = props.userProfilePage.lookingForAJob ? props.userProfilePage.lookingForAJobDescription :
    "No description yet.";
    let contactsObj = props.userProfilePage.contacts;

    return (
        <div className = {classes.profileInfoWrapper}>
            <img 
                className = {classes.profilePhoto} 
                src={props.userProfilePage.photos.large ? props.userProfilePage.photos.large : baseImg} 
                alt=""
            />
            <div className={classes.userName}>
                {props.userProfilePage.fullName}
            </div>
            
            <div className={classes.description}>
                <div className={classes.descriptionText}>
                    {props.userProfilePage.aboutMe}
                </div>
                <h4>About Work</h4>
                <div className={classes.descriptionText}>
                    {el}
                </div>
            </div>

            <div className={classes.contactList}>
                {Object.keys(contactsObj).map( key => {
                    if(contactsObj[key] != null){
                        return <a 
                            href = {`https://${contactsObj[key]}`} 
                            className={classes.contact}
                            target="_blank"
                        > 
                        {key}
                        </a>
                    }
                } )}
            </div>

        </div>
    );
}


export default ProfileInfo;

