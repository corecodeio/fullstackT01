import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLogin, logOut, getLoginAsync } from './../store/authSlice';
const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: ''
  })
  const { login } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(getLoginAsync(dataLogin));
  }
  const handelChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value })
  }
  return (
    <div>
      {!login ? <form onSubmit={handelSubmit}>
        <input placeholder='email' name='email' onChange={handelChange} value={dataLogin.email} />
        <input placeholder='password' name='password' onChange={handelChange} value={dataLogin.password} />
        <button type='submit'>login</button>
      </form> :
        <button onClick={() => {
          dispatch(logOut())
        }}>LogOut</button>}
    </div>
  )
}

export default Login