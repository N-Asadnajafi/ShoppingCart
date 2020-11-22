import React from 'react';

export class Header extends React.Component{
    render(){
        return(
            <div>
                <span className="badge">{this.props.totalItems}</span>
                <span>Items</span>
            </div>
        )
    }
}