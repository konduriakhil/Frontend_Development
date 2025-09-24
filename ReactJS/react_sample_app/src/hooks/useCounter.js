 const useCounter = (name, dob) => {
       return 'Hello '+ name + ', aged about '+ calculateAge(dob)
}

const calculateAge = (birthday) => {
      birthday = new Date(birthday);
      return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}
export default useCounter