import React from 'react'
import {faCheck, faTimes, faInfoCircle, faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginModal = ({loginModal,setLoginModal}) => {
    if (!loginModal) return null
  return (
    <div className='signupmodal'>
    <section className='signup-form'>
    <button onClick={()=>setLoginModal(false)} className='cancelbtn'><FontAwesomeIcon icon={faXmark}/></button>
    <h1 className='title'>Log in</h1>
    <div className='formcontainer'>
    <form className='inputcontainer'>
      <label>
        <input></input>
      </label>
      </form>
      </div>
      </section>
      </div>
  )
}

export default LoginModal