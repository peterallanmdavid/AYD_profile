/* @flow */
import immutable from 'immutable'
import {createAction, handleActions} from 'redux-actions'

const SET_PROFILE_DATA = 'peterallanmdavid/profile/SET_PROFILE_DATA'

export const setProfileData = createAction(SET_PROFILE_DATA)

const initialState = immutable.fromJS({
    profileData: {
      name: 'Aquilino David Jr.',
  },
})

export default handleActions({
    [SET_PROFILE_DATA]: (state, {payload}) => state.set('profileData', payload),
}, initialState)
