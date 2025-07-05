const Age = () =>{

    const calculateAge = (birthday) =>{
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }

    const users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032, dob:"6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob:"6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob:"6-12-1948"},
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob:"6-2-1938"},
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 , dob:"6-2-1948"}
    ];


    return <div>
        <h1>Functional Component</h1>
        {
            users.map((item, index) => <h4 key={index}>
                This is Mr.{item.firstname + " "+ item.lastname} aged about {calculateAge(item.dob)} years ago
            </h4>)
    }
    </div>

}
export default Age
