import UserPostsConteiner from "../Profile/ProfileData/UserPostsConteiner";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";




let MyProfile = (props) => {
    return(
        <div>
            <MyProfileInfo userProfilePage = {props.userProfilePage} /> 
            <UserPostsConteiner />
        </div>
    );
}






