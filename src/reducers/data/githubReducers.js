import { handleActions } from 'redux-actions';
import { GithubState } from '../../constants/models';
const githubReducers = handleActions({
    GET_GITHUB_SUCCESS: (state,{ payload }) => {
    	console.log(state.merge({data:payload.data}).toJS())
    	return state.merge({data:payload.data})
    }
    ,
    CHANGE_USER_ID:(state,{payload})=>(
    	state.merge({userId:payload.userId})
    )
},GithubState)
export default githubReducers;
