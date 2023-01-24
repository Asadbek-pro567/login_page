import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Contact.scss'

function Contact() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formContact = (e)=>{
    let value = e.target.elements
    navigate('/login/password')
    e.preventDefault()
    dispatch({type:'CONTACT', payload:{
      tel: value.tel.value,
      mail: value.mail.value,
      manzil: value.manzil.value,
  }})
  }
  return (
    <div className='container'>
        <div className="signin">
            <div className="right">
              <h2>Login/Contact</h2>
              <h3 className='h__h3'>
                <b>1</b>
                <b>2</b>
                <b>3</b>
              </h3>
              <form action="#" onSubmit={formContact}>
                  <div className="inputBX">
                    <input type="text" name='tel'  required/>
                    <i>Telefon</i>
                  </div>
                  <div className="inputBX">
                    <input type="text" name='mail' required/>
                    <i>E-mail</i>
                  </div>
                  <div className="inputBX">
                    <input type="text" name='manzil' required/>
                    <i>Adress</i>
                  </div>
                  <div className='previous'>
                    <button onClick={()=>navigate('/login/name')}>Previous</button>
                    <button type='submit'>Next</button>
                  </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact