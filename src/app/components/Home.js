import React from 'react';
import PropTypes from 'prop-types'


export class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            appName: this.props.initialAppName,
            initialHobbies: this.props.userData.hobbies
        }
        this.onAppNameChange = this.onAppNameChange.bind(this);
        this.removeHobby = this.removeHobby.bind(this);
    }

    removeHobby(index) {
        let newActivities = this.state.initialHobbies.slice();

        newActivities.splice(index, 1);

        this.setState({
            initialHobbies: newActivities
        })
    }

    onAppNameChange(event) {
        console.log(event.target.value);
        console.log(this.state);
        this.setState({
            appName: event.target.value
        });

        console.log(this.props.onChangeAppName);
        this.props.changeAppName(event.target.value);
    }

    render() {
        return (
            <div>
                <p>
                    Your name is {this.props.name}, and your age is {this.props.age}.
                    You reside in {this.props.userData.city}, {this.props.userData.state}
                </p>
                <h2>{this.state.initialHobbies.length} Hobbies </h2>
                <ul>
                    {this.state.initialHobbies.map((hobby, index) => {
                        return (
                            <div key={hobby.toString()}>

                                {hobby}
                                <br />
                                <button onClick={() => this.removeHobby(index)}>
                                    Remove hobby
                                </button>
                                <hr />
                            </div>
                        )
                    })}
                </ul>
                <hr />
                <h3>Change app name</h3>
                <input
                    type="text"
                    value={this.state.appName}
                    onChange={this.onAppNameChange}
                    name="appName" />
            </div>
        );
    }
}

Home.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    userData: PropTypes.object,
    initialAppName: PropTypes.string
}
