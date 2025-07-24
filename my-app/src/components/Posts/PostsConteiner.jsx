import { connect } from 'react-redux';
import Posts from './Posts';

import { withAuthRedirect } from '../../Hoc/AuthRedirect';

const mapStateToProps = (state) => {
    return { posts: state.profilePage.mockPosts,};
}


const mapDispatchToProps = (dispatch) =>{
    return {dispatch};
}

let redirectComponent = withAuthRedirect(Posts);

export default connect(mapStateToProps, mapDispatchToProps)(redirectComponent);
