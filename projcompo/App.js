import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

// class AddNumber extends Component {
//   render(){
//     return(
//       <div>
//         <h1>Add Number</h1>
//         <input type="button" value="+"></input>
//         <input type="text" value="0"></input>
//       </div>
//     );
//   }
// }

// class AddNumberRoot extends Component {
//   render(){
//     return (
//       <div>
//         <h1>Add Number Root</h1>
//         <AddNumber>

//         </AddNumber>
//       </div>
//     );
//   }   
// }

// class DisplayNumber extends Component{
//   render(){
//     return(
//       <div>
//         <h1>Display Number</h1>
//         <input type="text" value="0" readOnly></input>
//       </div>
//     );
//   }
// }

// class DisplayNumberRoot extends Component{
//   render() {
//     return (
//       <div>
//         <h1>Display Number Root</h1>
//         <DisplayNumber>

//         </DisplayNumber>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className='App'>
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;