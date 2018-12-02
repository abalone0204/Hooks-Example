import React from 'react';
import './App.css';
import Content from './components/Content/Content'
import FunctionComponent from './examples/FunctionComponent'
import ClassComponent from './examples/ClassComponent'
import FunctionComponentWithHook from './examples/FunctionComponentWithHook'


const App =  () =>  {
  return (
    <div className="App">
      <Content label="Function component">
        <FunctionComponent name="Hakata"></FunctionComponent>
      </Content>
      <Content label="Stateful class component">
        <ClassComponent></ClassComponent>
      </Content>
      <Content label="Stateful function component with Hook">
        <FunctionComponentWithHook></FunctionComponentWithHook>
      </Content>
    </div>
  );
}

export default App;
