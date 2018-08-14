import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import { Home } from './Home';

class App extends Component {
    constructor(){
        super();
        
    }

    changeUserName(newName){
        console.log(newName);
    }
    render() {
        const user = {
            city: "Richmond",
            state: "VA",
            hobbies: [
                'development',
                'baking',
                'backpacking'
            ]
        }
        console.log(this.props, 'is the props created from provider');
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header appName={this.props.user.name}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={this.props.user.name} 
                            age={36} 
                            userData={user} 
                            appAlert={this.appAlert}
                            initialAppName={this.props.user.name}
                            changeAppName={()=>this.props.setName('anna')} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {    
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);