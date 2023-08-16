import React from 'react'
import './Dashboard.scss'
import Topbar from '../topbar/Topbar';
import { Row, Col } from 'react-bootstrap';
import { GrDeliver, GrUserAdd } from 'react-icons/gr'
import { BsTags, BsBarChart } from 'react-icons/bs'

import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',

        },

    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Current',
            data: [4, 5, 3, 9, 1, 2, 7],
            backgroundColor: '#0094FE',
            borderRadius: 4,
        },
        {
            label: 'Previous',
            data: [4, 5, 3, 9, 0.6, 2, 7],
            backgroundColor: '#00E097',
            borderRadius: 4,
            borderWidth: 1
        },
    ],
};


function Dashboard() {
    return (
        <div className='dashboard'>
            <Topbar />
            <div className='heading'>
                <h4>Dashboard</h4>
            </div>

            <div className='dashboard-box'>
                <h3 style={{ color: "#524F86" }}>Today's Sales</h3>
                <h6 style={{ color: "#8D90A3" }}>Sales Summary</h6>

                <Row>
                    <Col>
                        <div className='data-box d-flex flex-column'>
                            <div style={{ backgroundColor: "#F9597D", width: '35px', height: '35px', borderRadius: '50px', textAlign: 'center', color: "white" }}>
                                <BsBarChart />
                            </div>
                            <span className='sales bold-value'>$ 1K</span>
                            <span className='sales'>Total Sales</span>
                            <span className='ratio'>+8% from yesterday</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='data-box d-flex flex-column' style={{ backgroundColor: "#FFF4DE" }}>
                            <div style={{ backgroundColor: "#FF947A", width: '35px', height: '35px', borderRadius: '50px', textAlign: 'center', color: "white" }}>
                                <GrDeliver style={{ color: "white" }} />

                            </div>
                            <span className='sales bold-value'>300</span>
                            <span className='sales'>Total Order</span>
                            <span className='ratio'>+5% from yesterday</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='data-box d-flex flex-column' style={{ backgroundColor: "#DCFCE7" }}>
                            <div style={{ backgroundColor: "#5FDE73", width: '35px', height: '35px', borderRadius: '50px', textAlign: 'center', color: "white" }}>
                                <BsTags />

                            </div>
                            <span className='sales bold-value'>5</span>
                            <span className='sales'>Medicine Sold</span>
                            <span className='ratio'>+1.2% from yesterday</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='data-box d-flex flex-column' style={{ backgroundColor: "#F4E8FF" }}>
                            <div style={{ backgroundColor: "#BE82FE", width: '35px', height: '35px', borderRadius: '50px', textAlign: 'center', color: "white" }}>
                                <GrUserAdd />
                            </div>
                            <span className='sales bold-value'>8</span>
                            <span className='sales'>New Patients</span>
                            <span className='ratio'>+0.5% from yesterday</span>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='dashboard-graph'>
                <Row>
                    <Col>
                        <div className='barchart'>
                            <h3 style={{ color: "#524F86" }}>Total Revenue</h3>
                            <Bar options={options} data={data} />
                        </div>
                    </Col>
                    <Col>
                        <div className='piechart'>
                            <Line options={options} data={data} />
                        </div>
                    </Col>
                    
                </Row>

            </div>
        </div>
    )
}

export default Dashboard
