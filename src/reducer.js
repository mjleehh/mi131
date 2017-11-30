import {handleActions} from 'redux-actions'

import {changeMsg} from './action'

export default handleActions(
    {
        [changeMsg]: (state, {payload}) => ({...state, msg: payload})
    },
    {msg: ''}
)
