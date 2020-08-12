import React from 'react';
import {TestContext} from './Context/testContext';
import ChildComp4 from './ChildComp4';

const ChildComp3 = () => {
    return (
       <TestContext.Consumer>
           {
               value => {
                   return (
                       <>
                   <div> This is the consumer, receiving data: {value.students}</div>
                   <ChildComp4 />
                   </>
                   )
               }
           }
       </TestContext.Consumer>
    )
}
export default ChildComp3;