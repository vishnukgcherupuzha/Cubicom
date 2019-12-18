import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image'
import Avatar from '@material-ui/core/Avatar';
import Logo from './logo.png'
class navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            slideBarShow:''
        }
    }
    render() {
        return (
            <div>
                <div className="navBar">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            <Image  src={Logo} />
                        </Typography>
                        <Typography>
                        <select className="menuButton">
                        <option value="volvo">Location1</option>
                        <option value="saab">Location1</option>
                        <option value="opel">Location1</option>
                        <option value="audi">Location1</option>
                      </select>
                        </Typography>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Toolbar>
                </div>
            </div>
        )
    }
}

export default navbar
