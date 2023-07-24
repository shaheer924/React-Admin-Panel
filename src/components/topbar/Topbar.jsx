import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {IoMdNotificationsOutline} from  'react-icons/io'
import profileImg from './../../assets/ProfileImg.png'
import './Topbar.scss'
function Topbar() {
    return (
        <div className='top-line'>
            <div className='search'>
                <Form>
                    <Form.Control type="search" placeholder="Search" aria-label="Search" style={{border: "1px solid #ADA7A7"}} onChange={e => {
                        e.preventDefault();
                    }} />
                </Form>
            </div>
            <div className='user-info d-flex'>
                <Button variant='light'><IoMdNotificationsOutline /></Button>
                <div className='mx-3'>
                    <img src={profileImg} alt='' width="40px" height="40px" className='profile-img' />
                </div>
            </div>
        </div>
    )
}

export default Topbar
