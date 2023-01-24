import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Password.scss'

function Password() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formPass = (e)=>{
        e.preventDefault()
        let value = e.target.elements
        if(value.password1.value == value.password2.value){
          navigate('/login/info')

          dispatch({type: 'PASSWORD',payload:{
            userName: value.userName.value,
            password1: value.password1.value,
            password2: value.password2.value,
          }})
        }else{
          document.querySelector(".pass2").style.background = "red";
          document.querySelector(".pass1").style.background = "red";
          document.querySelector(".iii").textContent = 'Пароли не совпадают'
        }
    }
  return (
    <div className='container'>
        <div className="signin">
            <div className="right">
              <h2>Login/PAssword</h2>
              <h3 className='n__h3'>
                <b>1</b>
                <b>2</b>
                <b>3</b>
              </h3>
              <form action="#" onSubmit={formPass}>
                  <div className="inputBX">
                    <input type="text" name='userName' required/>
                    <i>UserName</i>
                  </div>
                  <div className="inputBX">
                    <input type="password" name='password1' required className='pass1'/>
                    <i>Password</i>
                  </div>
                  <div className="inputBX">
                    <input type="password" name='password2' className='pass2' required/>
                    <i className='iii'>Confirm Password</i>
                  </div>
                  <div>
                    <button onClick={()=>navigate('/login/contact')}>Previous</button>
                    <button type='submit'>Next</button>
                  </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Password