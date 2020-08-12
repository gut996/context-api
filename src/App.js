import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestContext } from './Context/testContext';
import ChildComp1 from './ChildComp1';

function App() {
  return (
   <TestContext.Provider value ={{
students : ["JC", "Fernando", "Zack"],
onSubmit: data => console.log("Function is executerd! ", data)
   }}>
     <div className="App">
   <ChildComp1 />
     </div>
     </TestContext.Provider>
  );
}

export default App;
