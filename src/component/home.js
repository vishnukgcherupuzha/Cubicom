import React, { Component } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Table from './table'
import { Image } from 'react-bootstrap'
class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardValues: [
                { image: require('./icon_booking.png'), Value: 121, Heading: "BOOKING", content: "No. of way bills" },
                { image: require('./icon_ofd.png'), Value: 55, Heading: "OFD", content: "Out of Delivery" },
                { image: require('./icon_booking.png'), Value: 430, Heading: "DEL", content: "Delivered" },
                { image: require('./icon_ofd.png'), Value: 23, Heading: "UNDEL", content: "Undelivered" },
            ]
        }
    }
    renderCardData() {
        return this.state.cardValues.map((cardValue) => {
            const { image, Value, Heading, content } = cardValue //destructuring
            return (
                <div className="mainPaper">
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
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar />
                <div className="mainBackground">
                    <div className="subBackground">
                        <div className="homeSubMenu">
                            <div className="menuHeader">
                                <h4>Dashboard</h4>
                            </div>
                            <div className="menusubHeader">
                                <i className="fa fa-search searchIcon" aria-hidden="true"></i>
                                <i className="fa fa-calendar calenderIcon" aria-hidden="true"></i>
                                <span>12/12/2019 - 18-12-2019</span>
                            </div>
                        </div>
                        <div className="cardAndGraph">
                            <div className="cardFlex">
                                {this.renderCardData()}
                            </div>
                            <div className="Piechart"></div>
                        </div>
                        <div className="homeSubMenu"><Table /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home
