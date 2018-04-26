import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { getGithub } from '../Actions/githubActions';
import { changeUserId } from '../constants/createActions'
export default connect(
	(state)=>({
		userId:state.getIn(['github','userId'])
    }),
    (dispatch) =>({
    	onChangeUserId:(event)=>(
    		dispatch(
    			changeUserId({userId:event.target.value})
    		)
    	),
    	onSubmitUserId:(userId)=>()=>(
    		 dispatch(getGithub(userId))
    	)
    }),
    (stateProps, dispatchProps, ownProps) => {
    const { userId } = stateProps;
    const { onSubmitUserId } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onSubmitUserId: onSubmitUserId(userId),
    });
  }

)(HomePage)