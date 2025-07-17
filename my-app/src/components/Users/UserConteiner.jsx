import {connect} from "react-redux";
import Users from "./Users_class";
import { setUsersCount, changeSelectedPage, setUsers, changeSelectedId, followAC, unfollowAC } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        selectedPage: state.usersPage.selectedPage,
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followAC(id)) ,
        unfollow: (id) => dispatch(unfollowAC(id)) ,
        selectUser: (id) => dispatch(changeSelectedId(id)),
        downloadUsers : (users) => dispatch(setUsers(users)),
        changeSelectedPage: (page) => dispatch(changeSelectedPage(page)),
        setUsersCount: (count) => dispatch(setUsersCount(count)),
    }
}


const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersConteiner;

