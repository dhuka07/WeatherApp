import React  from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
class App extends React.Component {
///////////////THIS IS DONE IN NORMAL WAY WE CAN DO SAME IN SINGLE LINE USING BABEL//
//    //constructor function
//    constructor(props) {
//       super(props);
//        //THis is the only time we do dorect assignmrnt
//        //to this.state object
//        this.state = { lat: null, errorMessage: '' };
 

//constructor function
    constructor(props) {
      super(props);
//        //THis is the only time we do dorect assignmrnt
//        //to this.state object
      this.state = { lat: null, errorMessage: '' };
        //state = { lat: null, errorMessage:''};   

//////////////////////////////////////THIS IS DONE USING NORMAL METHOD NOW WE WILL DO IT it DidMount LIfe Cycle Method////////////////////////////////////////////////////////
//        //We call get Current position and return position with call back
//        window.navigator.geolocation.getCurrentPosition(
//            position => {
//                //we called setState to update!!!!
//             this.setState({lat: position.coords.latitude});
//           
//                //we did not do direct 
//                //assignment Eg:-----> this.state.lat = position.coords.latitude    
//            },
//           err => {
//            this.setState({errorMessage: err.message});
//           }
//       );   
    }

    componentDidMount(){
        //We call get Current position and return position with call back
        window.navigator.geolocation.getCurrentPosition(
            position => 
                //we called setState to update!!!!
                this.setState({lat: position.coords.latitude}),
           
                //we did not do direct 
                //assignment Eg:-----> this.state.lat = position.coords.latitude    
            
            err => 
                this.setState({errorMessage: err.message})
            
        );   
    }
    componentDidUpdate(){
        console.log('component just updated------>It rerendered')
    }
    
    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return<div>Error:{this.state.errorMessage}</div>
        }

        if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        if (!this.state.lat && !this.state.errorMessage){
            return<Spinner message="Please Accept Location Request.. "></Spinner>
        }
     }
    

    //React says have to define render
    //renders again after setState is define
    render(){
   return <div className="border">{this.renderContent()} </div>;
   
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));