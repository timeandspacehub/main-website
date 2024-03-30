import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <footer>        
                <div className="text-center text-white" style={{ backgroundColor: '#000000', fontSize: 'smaller',
                 paddingBottom: '10px', position:'fixed', width: '100%',  bottom:'0'
                 }}>
                    @{new Date().getFullYear()} Copyright: timeandspacehub
                    <div>All Rights Reserved</div>
                </div>
            </footer>
        );
    }
    
}

export default FooterComponent;