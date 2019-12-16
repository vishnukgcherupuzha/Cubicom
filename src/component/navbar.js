import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Avatar from '@material-ui/core/Avatar';
import Logo from './logo.png'
class navbar extends Component {
    render() {
        return (
            <div>
                <div className="root">
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography>
                                <IconButton edge="start" className="menuButton">
                                    <MenuIcon />
                                </IconButton>
                            </Typography>
                            <Typography variant="h6" className="title">
                                <Image className="dhashMEnu" src={Logo} />
                            </Typography>
                            <Typography className="menuButton">
                                <Form.Control as="select">
                                    <option>Location 1</option>
                                </Form.Control>
                            </Typography>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Toolbar>
                    </AppBar>
                </div>
            </div >
        )
    }
}

export default navbar
