import React from 'react' ;

import Auxx from '../../hoc/Auxx' ;
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer' ;

import '../Layout/Layout.css'

const Layout = (props) => {
    return(
        <Auxx>
            <Toolbar />
            {/* <SideDrawer /> */}
            <main> {props.children} </main>
        </Auxx>
    )
} ;

export default Layout ;