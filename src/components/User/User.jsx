import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'

export default function User() {
 const { user, isLoading, error } = useSelector(state => state.user)
 console.log(user, isLoading, error)
 const { getUserById } = useActions()
//  https://65e2384ca8583365b318095f.mockapi.io/recipes
  return (
    <div>
      <button onClick={() => getUserById(1)} >Add user</button>
      {/* <h2>{user.name}</h2> */}
      {isLoading ? <div>...Loading</div> : error ? <div>Error: {error}</div> : user ? <div>User: {user.name}</div> : ''}
    </div>
  )
}
