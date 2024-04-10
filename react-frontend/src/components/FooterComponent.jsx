import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <footer>        
                <div className="text-center" style={{ fontSize: 'smaller',
                 paddingBottom: '10px', position:'fixed', width: '100%',  bottom:'0'
                 }}>
                    Copyright ©  @{new Date().getFullYear()} Time and Space Hub LLC. All rights reserved.
                </div>
            </footer>
        );
    }
    
}

export default FooterComponent;