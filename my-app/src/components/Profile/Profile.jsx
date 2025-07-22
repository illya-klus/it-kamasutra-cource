

import ProfileInfo from './ProfileData/ProfileInfo';
import UserPostsConteiner from './ProfileData/UserPostsConteiner';



let Profile = (props) => {
    return (
        <div>
            <ProfileInfo userProfilePage = {props.userProfilePage} /> 
            <UserPostsConteiner />
        </div>
        
    )
}


export default Profile;
