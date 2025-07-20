import React, {useContext} from 'react'
import { useForm } from '../hooks/useForm'
import { UserContext } from '../context/UserContext'

export const Login = () => {

  const initialForm = {
    name: '',
    email: '',
    tech: '',
    role: ''
  }

  const {formState, name, email, tech, role, onInputChange} = useForm(initialForm)
  const {setUser} = useContext(UserContext)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted:', formState)
    setUser(formState)
  }

  return (
    <>
      <form className='container' onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" 
            value={name} onChange={onInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email"
            value={email} onChange={onInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tech" className="form-label">Tech</label>
          <input type="text" className="form-control" name="tech"
            value={tech} onChange={onInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input type="text" className="form-control" name="role"
            value={role} onChange={onInputChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
