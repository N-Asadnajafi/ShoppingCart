import React from "react";
import Button from 'react-bootstrap/Button';

export class Btn extends React.Component{

    render() {
        return(
            <Button
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                variant={this.props.variantP}
                className={this.props.classNameP}>
                {this.props.children}
            </Button>
        )
    }
}
Btn.defaultProps = {
    onClick: () => undefined
}