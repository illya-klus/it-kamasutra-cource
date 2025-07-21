import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.mockPosts,
        
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
