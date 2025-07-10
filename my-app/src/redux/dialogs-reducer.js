const U_ENTER_MESSEGE = "UPDATE-ENTER-MESSEGE";
const S_N_MESSEGE = "SENT-NEW-MESSEGE";


const dialogsReducer = (state, action) => {

    if(action.type == U_ENTER_MESSEGE){
      state.messegeText = action.newMessegeText;
    } else if(action.type == S_N_MESSEGE){
      let messege = action.text;
      state.dialogs.GrishaMessages.push(
        {
          from: 'me',
          text: messege,
        }
      );
    }

    return state;
}


export const addNewMessegeActionCreator = (text) => {
  return {
    type: S_N_MESSEGE,
    text,
  }
}
export const updateMessegeText = (newText) => {
  return {
    type: U_ENTER_MESSEGE,
    newMessegeText : newText,
  }
}

export default dialogsReducer;
