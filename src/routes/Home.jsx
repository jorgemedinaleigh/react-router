import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Home = () => {

  const {user} = useContext(UserContext)

  return (
    <>
      <table class="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Tech</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{user.name}</td>
            <td>{user.tech}</td>
            <td>{user.role}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
