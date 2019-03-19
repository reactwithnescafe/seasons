import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'

class App extends React.Component {
    //constructor is particular to javascript and is called first when App is created.
/*     constructor(props) {
        super(props);
        //This is the only time we do direct assignment to this.state
        this.state = { lat: null, long: null, errorMessage: '' }
    } */

    state = {lat: null, long: null, errorMessage: '' }

    componentDidMount() {
        console.log('My component was rendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
            (position) =>  this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
                //We called setState to update
                // we never do direct assignment. Its only done while assignment
            //success callback
            (err) => this.setState({ errorMessage: err.message })
             //failure callback
        )
    }

    componentDidUpdate() {
        console.log('My coponent was just updated. It just rerendered.')
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat && !this.state.long) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat && this.state.long) {
            return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;

        }
        return <Spinner />;
    }

    //React says we have to define render
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);