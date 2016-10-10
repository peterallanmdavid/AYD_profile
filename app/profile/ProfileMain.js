import React from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

const styles = {
    mainDiv:{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(255,255,255)',
        padding: '20px 0'
    }
}

class ProfileMain extends React.Component{
  render() {
    const profileData = this.props.profileData.toJS()
    return (
        <div style={styles.mainDiv}>
            AQUILINO Y DAVID Tutoring Services
        </div>
    )
  }
}

const dispatchSelector = createSelector(
  (dispatch) => dispatch,
  (dispatch) => ({
      getProfileData: () => alert('this is profileData'),
  })
)

export default connect(
  (state) => ({
      profileData: state.profile.get('profileData'),
  }),
  dispatchSelector)(ProfileMain)
