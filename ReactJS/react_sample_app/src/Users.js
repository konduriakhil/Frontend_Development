const Users = () => {

    var names = ['AKhil', 'Sai', 'Varshath'];
    const users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032 },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001 },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 }
    ];
    return(
         <div>
            <h1>Functional Component Users List</h1>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => <tr key={index}>
                            <td >{index+1}</td>
                            <td >{item.firstname+' '+item.lastname}</td>
                            <td >{item.city}</td>
                            <td >{item.pincode}</td>
                        </tr>)
                    }
                </tbody>
            </table>
    </div>
    )
}
export default Users