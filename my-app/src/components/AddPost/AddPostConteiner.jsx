import AddPostMenu from "./AddPost";

import {postChangeActionCreator, imgChangeActionCreator, putPostActionCreator} from '../../redux/posts-reducer'
import { connect } from "react-redux";
import { withAuthRedirect } from "../../Hoc/AuthRedirect";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        user: state.user,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeImj : (imgSrc) => {
            dispatch(imgChangeActionCreator(imgSrc))
        },
        chandeText: (text) => {
            dispatch(postChangeActionCreator(text))
        },
        putNewPost: (name, profileImg, postPhoto, description) => {
            dispatch(putPostActionCreator(name, profileImg, postPhoto, description));
            dispatch(postChangeActionCreator(''));
        },
    };
};

let withAuth = withAuthRedirect(AddPostMenu);

const DialogsConteiner = connect(mapStateToProps,  mapDispatchToProps)(withAuth);

export default DialogsConteiner;