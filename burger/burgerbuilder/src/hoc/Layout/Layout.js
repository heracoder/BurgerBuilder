import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component {
    
    state = {
        showSideDrawer : true
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer : false
        })
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !this.state.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                {/* <p className={classes.AppTitle}>My Burger Builder App</p> */}
                <div>ToolBar,SideBar,Backdrop</div>
                <main className={classes.Content}> 
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;