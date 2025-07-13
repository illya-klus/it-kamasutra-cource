const U_ENTER_MESSEGE = "UPDATE-ENTER-MESSEGE";
const S_N_MESSEGE = "SENT-NEW-MESSEGE";


let baseState = {
      messegeText : '',
      userFriends : [
        {name: 'Illya', id:1},
        {name: 'Gosha', id:2},
        {name: 'Alex', id:3},
        {name: 'Timur', id:4},
      ],
      dialogs:{
        GrishaMessages : [
          {
            from: 'Grisha',
            text: 'Здарова, брат. Як там проєкт просувається?'
          },
          {
            from: 'me',
            text: 'Та вже норм, вчора заливав усе на GitHub.'
          },
          {
            from: 'Grisha',
            text: 'Круто, потім гляну. Може щось підкажу.'
          },
          {
            from: 'me',
            text: 'Окей, буду вдячний 🙏'
          },
          {
            from: 'Grisha',
            text: 'До речі, сьогодні ввечері залітаємо в доту?'
          },
          {
            from: 'me',
            text: '100%, після 20:00 вільний.'
          } 
        ],
      }
};


const dialogsReducer = (state = baseState, action) => {

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

    return {...state};
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
