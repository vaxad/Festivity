import { View, Text } from 'react-native'
import React from 'react'
import ProfilePeople from './ProfilePeople'

const ViewProfile = ({route}) => {
    const {user} = route.params;
  return (
    <ProfilePeople userShown={user}/>
  )
}

export default ViewProfile