import logo from './logo.svg';
import './App.css';
import WelcomeUser from './WelcomeUser';
import WelcomeCls from './WelcomeCls';

var name = 'Akhil Konduri';
var city = 'Hyderabad';
var nationality = 'Indian'
const subjects = ['HTML', 'CSS', 'JS', 'React']
const users = [
  {firstname:"Ram", lastname: "Babburi", city: "Ongole", pincode:500032, dob: "07-25-1987"},
  {firstname:"Anand", lastname:"Pabbineedi", city: "Kakinada", pincode:533001, dob:"04-16-2000"},
  {firstname:"Vinod", lastname: "Katte", city: "Anantapur", pincode:515671, dob:"06-25-2002"},
  {firstname:"Lakshman", lastname:"D", city:"Kakinada", pincode:533006, dob:"02-16-1998"},
  {firstname:"Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode:533249, dob:"09-09-1998"}
];

const calculateAge = (birthday) =>{
  birthday = new Date(birthday);
  return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}


function App() {
  return (
    <div className="App" >
      <h1>App Heading</h1>
      <WelcomeUser agecalculator={calculateAge} userslist={users} username='Akhil' pincode='523301' state='AP' nation={nationality} subjects={subjects} />
      <hr></hr>
      <WelcomeCls agecalculator={calculateAge} userslist={users} username='Akhil' pincode='523301' state='AP' nation={nationality} subjects={subjects} /> 
    </div>
  );
}

export default App;
