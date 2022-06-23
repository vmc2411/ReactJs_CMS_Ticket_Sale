import React from 'react'
import { FiMail } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import imguser from '../../images/imguser.png'

const topbar = () => {
    return (
        <div className='acc-notice-mail'>
            <label ><FiMail /></label>
            <label ><BiBell /></label>
            <img src={imguser} />
        </div>
    )
}

export default topbar