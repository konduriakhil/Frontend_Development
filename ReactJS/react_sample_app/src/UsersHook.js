import { useState } from "react"

const UsersHook = () =>{

    const users =[
        {firstname:"Ram", lastname: "Babburi", city: "Ongole", pincode: 500032, dob:"07-25-1987"},
        {firstname:"Anand", lastname:"Pabbineedi", city:"Kakinada", pincode:533001, dob:"04-16-2008"},
        {firstname:"Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671, dob:"06-25-2002"},
        {firstname:"Lakshman", lastname:"D", city:"Kakinada", pincode: 533006, dob:"02-16-1998"},
        {firstname:"Sri Raj", lastname:"Kamisetti", city: "Amalapuram", pincode:500032, dob:"09-09-1987"}
        ]

    const[userslist, updateUsers ]=useState(users)

    const calculateAge = (birthday) => {
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);        
        }

    return (
        <div>
            {
                userslist.length >0 ? userslist.map((item, index) =>
                <div key={index}>
                    <p>Welcome to {item.firstname + ' '+ item.lastname} from {item.city} aged about {calculateAge(item.dob)} years</p>
                    </div>) : null
            }
        </div>
    )
}
export default UsersHook