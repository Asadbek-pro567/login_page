import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Name.scss'

function Name() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formHandler = (e)=>{
        e.preventDefault()
        navigate('/login/contact')
        let value = e.target.elements
        dispatch({type:'NAME', payload:{
            firstName: value.firstName.value,
            lastName: value.lastName.value
        }})
        console.log(e.target.elements.firstName.value);
        console.log(e.target.elements.lastName.value);
    }

  return (
  <div className='container'>
  <div className="signin">
      <div className="right">
        <h2>Login/Name</h2>
        <h3 className='el__h3'>
            <b>1</b>
            <b>2</b>
            <b>3</b>
        </h3>
        <form action="#" onSubmit={formHandler}>
            <div className="inputBX">
                <input type="text" name='firstName' required/>
                <i>Ism</i>
            </div>
            <div className="inputBX">
                <input type="text" name='lastName' required/>
                <i>Familiya</i>
            </div>
            <div className='previo'>
              <button disabled onClick={()=>navigate('/login/name')}>Previous</button>
              <button type='submit'>Next</button>
            </div>
        </form>
      </div>
  </div>
</div>
  )
}

export default Name