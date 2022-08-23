import React,{ Component } from "react";

class PersonCard extends Component{
 constructor(props){
    super(props);
    this.state={
        firstName:this.props.firstName,
        lastName:this.props.lastName,
        age:this.props.age,
        hairColor:this.props.hairColor
    }
}
incrementAge = () => {
    this.setState({age: this.state.age+1});
}
    render() {
        // const { firstName, lastName ,age,hairColor} = this.props;
        return (
            <div>
                <h1>{this.state.firstName} , { this.state.lastName }</h1>
                <p>age:{this.state.age}</p>
                <p>hairColor:{this.state.hairColor}</p>
                <button onClick={this.incrementAge}> BirthDay of { this.state.firstName} </button>
                
            </div>
        );
    }
}
export default PersonCard;