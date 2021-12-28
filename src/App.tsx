import React from 'react';
import './App.css';
import ChildProp from './advanced-props/ChildProps';
import CompoAsChild from './advanced-props/CompoProps';
import OptionalProp from './advanced-props/OptionalProps';
import SimpleProps from './advanced-props/SimpleProps';
import Button from './event-props/Button';
import Input from './event-props/Input';
import Styles from './styles-props/Styles';
import Counter from './useReducer/Counter';
import LoggedIn from './useState/LoggedIn';
import User from './useState/User';
import Userc from './context/User';
import { UserContext, UserContextProvider } from './context/UserContext';
import { Info } from './useRef/simple-useRef';
import { InputEL } from './useRef/DomRef';
import { MutableRef } from './useRef/MutableRef';
import { CounterClass } from './class-component/Counter';
import Identity from './interface/Identity';
import Fetch from './fetch-from-api/FetchingData';

function App() {
  return (
    <div className="App">
      {/* <SimpleProps name="harry" isLoading={true} counts={3} />
      <UnionProps assistance="siri" /> */}
      {/* <ChildProp>I am child text.</ChildProp> */}
      {/* <CompoAsChild>
        <ChildProp>Hello it is child component.</ChildProp>
      </CompoAsChild> */}
      {/* <OptionalProp>
        <SimpleProps name="harry" counts={2}></SimpleProps>
      </OptionalProp> */}
      {/* <Button
        BtnText="Click me"
        handleClick={(event, id) =>
          console.log("hello this is button click.", event, id)
        }
      /> */}
      {/* <Input handleChange={() => console.log("Text Changed")} /> */}
      {/* <Styles
        styles={{ border: "1px solid red", backgroundColor: "rgba(0,0,0,0.4)" }}
      /> */}
      {/* <Counter/> */}
      {/* <LoggedIn/> */}
      {/* <User/> */}
      {/* <UserContextProvider>
        <Userc/>
      </UserContextProvider> */}
      {/* <Info/> */}
      {/* <InputEL/> */}
      {/* <MutableRef/> */}
      {/* <Identity/> */}
      {/* <CounterClass message ="Harry clicked button "/> */}
      <Fetch/>
    </div>
  );
}

export default App;
