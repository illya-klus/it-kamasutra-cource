import { connect } from 'react-redux';
import Dialogs from './Dialogs';

import {updateMessegeText, addNewMessegeActionCreator} from '../../redux/dialogs-reducer'


const mapStateToProps = (state) => {
    return {dialogsData : state.dialogsData};
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessegeText: (text) => dispatch(updateMessegeText(text)),
        addNewMessege: (text) => {
            dispatch(updateMessegeText(""));
            dispatch(addNewMessegeActionCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);