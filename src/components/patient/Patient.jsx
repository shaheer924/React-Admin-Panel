import React from 'react'
import './Patient.scss'
import Form from 'react-bootstrap/Form';
import Topbar from '../topbar/Topbar';
import { Row, Col } from 'react-bootstrap';
import CustomTables from '../tables/CustomTables';

function Patient() {
    return (
        <div className='patient'>
            <Topbar />
            <div className='heading'>
                <h4>Patients</h4>
            </div>

            <div className='filter'>
                <Form>
                    <Row>
                        <Col>
                            <h6>Customer</h6>
                            <Form.Control className='input' type="search" placeholder="Enter Customer Name" aria-label="Search" onChange={e => {
                                e.preventDefault();
                            }} />
                        </Col>
                        <Col>
                            <h6>Invoice ID</h6>
                            <Form.Control className='input' type="search" placeholder="Enter Invoice ID" aria-label="Search" onChange={e => {
                                e.preventDefault();
                            }} />
                        </Col>
                        <Col>
                            <h6>Start Date</h6>
                            <Form.Control className='input' type="search" placeholder="Start Date" aria-label="Search" onChange={e => {
                                e.preventDefault();
                            }} />
                        </Col>
                        <Col>
                            <h6>End Date</h6>
                            <Form.Control className='input' type="search" placeholder="End Date" aria-label="Search" onChange={e => {
                                e.preventDefault();
                            }} />
                        </Col>
                    </Row>
                </Form>
            </div>

            <CustomTables />
        </div>

    )
}

export default Patient
