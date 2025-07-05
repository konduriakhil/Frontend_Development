import { Component } from "react";
 
class UserCls extends Component
{
    names = ['AKhil', 'Sai', 'Varshath'];
    users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032 },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001 },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 }
    ];
    render()
    {
        return (<div>
            <h1>Class Component Users Info</h1>
            <table border={1} cellPadding={10}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>city</th>
                    <th>piconde</th>
                </tr>
            </thead>
            <tbody>

                {
                    this.users.map((item, index)=><tr>
                        <td>{index+1}</td>
                        <td>{item.firstname+' '+item.lastname}</td>
                        <td>{item.city}</td>
                        <td>{item.pincode}</td>
                    </tr>)
                }
             </tbody>
             </table>
        </div>

        )
    }
}
export default UserCls