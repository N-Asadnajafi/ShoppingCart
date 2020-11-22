import React from "react";
import {ShowNumber} from "./number";
import {Btn} from "./button";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export class Counter extends React.Component {

    changeClass(){
        let classNameP;
        return (this.props.value === 0 ? classNameP = "badge m-2 badge-warning" : classNameP = "badge m-2 badge-primary")
    }

    render() {
        return (
            <div className="row">
                <div className="show-num-container">
                    <ShowNumber classNameP={this.changeClass()}>
                        {this.props.value === 0 ? 'Zero' : this.props.value}
                    </ShowNumber>
                </div>
                <div className="btns-container">
                    <Btn variantP={"secondary"}
                         onClick={this.props.onIncrement}
                         classNameP={"m-2"}><AddCircleIcon />
                    </Btn>
                    <Btn variantP={"info"}
                         disabled={this.props.value === 0}
                         onClick={this.props.onDecrement}
                         classNameP={"m-2"}><RemoveCircleIcon />
                    </Btn>
                    <Btn variantP={"danger"}
                         onClick={this.props.onDelete}
                         classNameP={"m-2"}><DeleteIcon />
                    </Btn>
                </div>
            </div>
        )
    }
}