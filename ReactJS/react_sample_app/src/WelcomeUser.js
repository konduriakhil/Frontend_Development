
const WelcomeUser = (props) =>{

    console.log(props)
    return <div>
        <h1>Welcome  {props.username} and your pincode is {props.pincode} and your state is {props.state} and your country is {props.nation}</h1>
        <h1>Subjects:</h1>
        <ul>
            {
            props.subjects.map((item, index)=><li key={index}>
                {item}
            </li>)
            }
        </ul>
        <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>dob</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.userslist.map((item, index) => <tr key={index}>
                            <td >{index+1}</td>
                            <td >{item.firstname+' '+item.lastname}</td>
                            <td >{item.city}</td>
                            <td >{item.pincode}</td>
                            <td>{props.agecalculator(item.dob)} years old</td>
                        </tr>)
                    }
                </tbody>
            </table>
    </div>
}
export default WelcomeUser 