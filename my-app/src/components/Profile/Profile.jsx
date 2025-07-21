import classes from './Profile.module.css';

import ProfileInfo from './ProfileData/ProfileInfo';
import UserPostsConteiner from './ProfileData/UserPostsConteiner';



let Profile = (props) => {
    return (
        <div>
            <ProfileInfo profilePage = {props.profilePage} /> 
            <UserPostsConteiner />
        </div>
        
    )
}


export default Profile;
