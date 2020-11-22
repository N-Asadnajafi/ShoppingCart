import React from "react";

export class ShowNumber extends React.Component{
    render() {
        const myStyle = {
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            fontWeight: "600"
        }
        return(
            <span className={this.props.classNameP} style={myStyle}>
                {this.props.children}
            </span>
        )
    }
}
