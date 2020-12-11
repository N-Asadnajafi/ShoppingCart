import './App.css';
import React from "react";
import {Counter} from "./app/components/counter";
import {Btn} from "./app/components/button";
import {Header} from "./app/components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CachedIcon from '@material-ui/icons/Cached';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class App extends React.Component {

    constructor() {
        super();
        this.state = this.getInitState()
    }

    getInitState(){
        return {
            items: [
                {id: '1',value :0},
                {id: '2',value :0},
                {id: '3',value :0},
                {id: '4',value :0}
            ]
        }
    }

    handleDelete(id) {
        const items = this.state.items.filter(x => x.id !== id);
        this.setState({
            items
        })
    }

    handleChange = (id, val) =>{
        const newItemsArray = [...this.state.items];
        this.setState(prevState => {
            const index = prevState.items.findIndex(x => x.id === id);
            newItemsArray.splice(index,
                1,
                {
                    ...prevState.items[index],
                    value: prevState.items[index].value + val
                }
            );
            return{
                items: newItemsArray
            }
        })
    }

    handleReset = () => {
        this.setState(
            ({items}) => {
                return {
                    items: items.map(item => ({
                        ...item,
                        value: 0
                    }))
                }
            });
    }

    handleRefresh = () => {
        this.setState(this.getInitState());
    }

    render() {
        const itemsTotal = this.state.items.filter(x => x.value > 0).length;
        return (
            <div className="container">
                <div className="row m-2">
                    <ShoppingCartIcon /><Header totalItems = {itemsTotal}/>
                </div>
                <div>
                    <Btn classNameP={"m-2"}
                         disabled={this.state.items.length !== 0}
                         onClick={this.handleRefresh}
                         variantP={"success"}><RefreshIcon />
                    </Btn>
                    <Btn classNameP={"m-2"}
                         disabled={this.state.items.length === 0}
                         onClick={this.handleReset}><CachedIcon />
                    </Btn>
                </div>
                {this.state.items.map(item => {
                    return (
                        <Counter
                            key={item.id}
                            value={item.value}
                            onIncrement={() => this.handleChange(item.id, 1)}
                            onDecrement={() => this.handleChange(item.id, -1)}
                            onDelete={this.handleDelete.bind(this, item.id)}
                            // onDelete={() => this.handleDelete(item.id)} closure
                        />
                    )
                })}
            </div>
        );
    }
}

export default App;
