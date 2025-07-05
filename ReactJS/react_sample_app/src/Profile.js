import { Component } from "react";

class Profile extends Component
{
    name = 'Konduri Akhil';
    age = 27;

    render()
    {
        let qualification = 'B-tech'
        return(
            <div>
                <h1>Profile</h1>
                <h2>Name: {this.name}</h2>
                <h2>Age: {this.age}</h2>
                <h2>qualification: {qualification}</h2>
                <h2>Date & Time: {new Date().toLocaleString()}</h2>
            </div>
        )
    }
}
export default Profile

