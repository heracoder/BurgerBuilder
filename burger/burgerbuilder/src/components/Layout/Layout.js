import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';



const layout = ( props ) => (
    <Aux>
        <p className={classes.AppTitle}>My Burger Builder App</p>
        {/* <div>ToolBar,SideBar,Backdrop</div> */}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;