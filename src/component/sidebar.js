import React, { Component } from 'react'
import Dashboard from './dashboard-24px.png'
import Operations from './operations.png'
import Tracking from './tracking.png'
import Reports from './reports.png'
import Configuratios from './configurations.png'

class sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sideBarBackground">
                    <div className="sidebarMenu">
                        <ul>
                            <li><h6><span><img src={Dashboard} alt="Dashboard"></img></span>
                                <span>Dashboard</span></h6>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <span><img src={Operations} alt="Operations"></img></span>
                                    <span>Operations </span>
                                    <span style={{ marginLeft: "20px" }}>
                                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </span>
                                    <div className="dropdown-content">
                                    <ul>
                                    <li>Operations1</li>
                                    <li>Operations2</li>
                                    <li>Operations3</li>
                                    <li>Operations4</li>
                                    <li>Operations5</li>
                                    </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span><img src={Tracking} alt="Tracking"></img></span>
                                <span>Tracking</span>
                            </li>
                            <li>
                                <span><img src={Reports} alt="Reports"></img></span>
                                <span>Reports</span>
                            </li>
                            <li>
                                <span><img src={Configuratios} alt="Configurations"></img></span>
                                <span>Configurations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default sidebar
