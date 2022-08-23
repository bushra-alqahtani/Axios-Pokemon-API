import React, {useReducer} from 'react'


//=========1=========== 
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
    
};

//=======3=================
function reduser(state,action){
    return state;
}


//=====2====================
const UseReduser = () => {
   const [formState,dispatch]=useReducer(reduser,initialState);
  return (
    <div className="App">
    <h1 className="title">Sign Up</h1>
    <form>
    <div className="input_wrapper">
        <label htmlFor="firstName">FName:</label>
        <input type="text" name="firstName" id="name"  value={formState.firstName.value} />
      </div>
      <div className="input_wrapper">
        <label htmlFor="lastName">FName:</label>
        <input type="text" name="lastName" id="name"  value={formState.lastName.value} />
      </div>
      <div className="input_wrapper">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={formState.email.value} />
      </div>
      <input type="submit"/>
    </form>
  </div>
  )
}

export default UseReduser