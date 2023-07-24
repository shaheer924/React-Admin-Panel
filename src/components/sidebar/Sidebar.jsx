import React from 'react'
import './Sidebar.scss'
import {  BiHelpCircle, BiLogOutCircle } from 'react-icons/bi'
import { GiMedicines } from 'react-icons/gi'
import { MdOutlinePayments, MdOutlineMeetingRoom } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { LuLayoutDashboard } from 'react-icons/lu'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
import {RiSecurePaymentLine} from 'react-icons/ri'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='upper-dashboard'>
                <div className='logo'>Medical Records.</div>
                <div className='dashboard-list'>
                    <ul className='list'>
                        <li className='list-item active' onClick={() => { console.log("Clicked") }}>
                            <LuLayoutDashboard /> <span>Dashboard</span>
                        </li>

                        <li className='list-item'>
                            <AiOutlineUserAdd /> <span>Patients</span>
                        </li>

                        <li className='list-item'>
                            <MdOutlineMeetingRoom /> <span>Appointments</span>
                        </li>

                        <li className='list-item'>
                            <GiMedicines /> <span>Medicines</span>
                        </li>

                        <li className='list-item'>
                            <MdOutlinePayments /> <span>Payments</span>
                        </li >

                        <li className='list-item'>
                            <HiOutlineUserGroup /> <span>Employees</span>
                        </li>

                        <li className='list-item'>
                            <RiSecurePaymentLine /> <span>Salaries</span>
                        </li>

                        <li className='list-item'>
                            <FiSettings /> <span>Settings</span>
                        </li>

                        <li className='list-item'>
                            <BiLogOutCircle /> <span>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='help'>
                <BiHelpCircle /> <span>Help</span>

            </div>
        </div>
    )
}

export default Sidebar
