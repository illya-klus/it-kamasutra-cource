import {connect} from "react-redux";
import Users from "./Users";
import { setUsers, changeSelectedId, followAC, unfollowAC } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followAC(id)) ,
        unfollow: (id) => dispatch(unfollowAC(id)) ,
        selectUser: (id) => dispatch(changeSelectedId(id)),
        downloadUsers : (users) => dispatch(setUsers(users)),
    }
}


const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersConteiner;

