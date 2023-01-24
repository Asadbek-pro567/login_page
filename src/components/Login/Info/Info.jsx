import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './Info.scss'

function Info() {
    const navigate = useNavigate()
    const dis = useSelector((state)=> {return state})
    const objInfo = dis.Shop
    console.log(dis.Shop);
  return (
    
        <div className='container'>
        <div className="signin">
            <div className="right">
              <h2>Login/info</h2>
              <h3 className='h3'>
                <b>1</b>
                <b>2</b>
                <b>3</b>
              </h3>
              <form action="#">
                  <ul>
                    {
                        objInfo.map((e,i)=>(
                            <li>
                                <h4>Name: {e.firstName}</h4>
                                <h4>Last Name: {e.lastName}</h4>
                                <h4>Telefon: {e.tel}</h4>
                                <h4>E-mail: {e.mail}</h4>
                                <h4>Adress: {e.manzil}</h4>
                                <h4>User: {e.userName}</h4>
                                <h4>Password: {e.password1}</h4>
                            </li>
                        ))
                    }
                  </ul>
                  <div>
                    <button onClick={()=>navigate('/login/password')}>Previous</button>
                  </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Info