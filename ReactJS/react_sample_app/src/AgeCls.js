import { Component } from "react";

class AgeCls extends Component
{
    users = [
        { firstname: "Akhil", lastname: "Konduri", city: "Ongole", pincode: 500032, dob:"6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob:"6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob:"6-12-1948"},
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob:"6-2-1938"},
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 , dob:"6-2-1948"}
    ];
     calculateAge = (birthday) =>{
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }    

    calculatePercentage = (price, discount) =>{
        return price- price*discount/100;
    }

    render(){
        return <div>
            
            <h1>This is Class Component Age Calculation</h1>
            {
                this.users.map((item, index)=>{
                    return <h4 key={index}>This is Mr.{item.firstname} aged about {this.calculateAge(item.dob)} </h4>                    
                })
            }
            <h1>You have to pay {this.calculatePercentage(1329, 50)} Amount</h1>
        </div>
    }
}
export default AgeCls
