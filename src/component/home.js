import React, { Component } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Table from './table'
import { Image } from 'react-bootstrap'
import Piechart from './piechart'
import Back from './back.png'
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from "react-router-dom";
class home extends Component {
    constructor(props) {
        super(props)
        debugger
            const token = localStorage.getItem("token")
            let redirect = true
            if(token ===null){
                redirect=false
            }
            localStorage.clear("token")
        this.state = {
            redirect,
            cardValues: [
                { image: require('./icon_booking.png'), Value: 121, Heading: "BOOKING", content: "No. of way bills" },
                { image: require('./icon_ofd.png'), Value: 55, Heading: "OFD", content: "Out of Delivery" },
                { image: require('./icon_booking.png'), Value: 430, Heading: "DEL", content: "Delivered" },
                { image: require('./icon_ofd.png'), Value: 23, Heading: "UNDEL", content: "Undelivered" },
            ],
            showSidebarStatus: <Sidebar />
        }
    }
    renderCardData() {
        return this.state.cardValues.map((cardValue) => {
            const { id, image, Value, Heading, content } = cardValue //destructuring
            return (
                <div className="mainPaper" key={id}>
                    <Image className="cardImg" src={image} />
                    <div className="cardDet cardNumber">
                        {Value}
                    </div>
                    <h5 className="cardHeading">{Heading}</h5>
                    <p className="cardContent">{content}</p>
                </div>
            )
        })
    }
    slideBarHide = () => {
        this.setState({ showSidebarStatus: "" })
    }
    slideBarShow = () => {
        this.setState({ showSidebarStatus: <Sidebar /> })
    }
    render() {
        if(this.state.redirect === false){
            return<Redirect to="/"/>
        }
        return (
            <div>
                
                <Navbar />
                <Typography className="hamburgerMenu">
                    <button onClick={this.slideBarShow} className="hamburgerButton"><MenuIcon /></button>
                </Typography>
                {this.state.showSidebarStatus}
                <div className="backArrow">
                    <button onClick={this.slideBarHide}><img src={Back} alt="back"></img></button>
                </div>
                <div className="mainBackground">
                    <div className="subBackground">
                        <div className="homeSubMenu">
                            <div className="menuHeader">
                                <h4>Dashboard</h4>
                            </div>
                            <div className="menusubHeader">
                                <i className="fa fa-search searchIcon" aria-hidden="true"></i>
                                <i className="fa fa-calendar calenderIcon" aria-hidden="true"></i>
                                <span style={{ marginRight: "20px" }}>12/12/2019 - 18-12-2019</span>
                            </div>
                        </div>
                        <div className="cardAndGraph">
                            <div className="cardFlex">
                                {this.renderCardData()}
                            </div>
                            <div><Piechart /></div>
                        </div>
                        <div className="homeSubMenu"><Table /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home
