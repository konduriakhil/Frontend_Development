import UserDetails from "./UserDetails"


function ProfileCard()
{
    return(
        <React.Fragment style={{ border: '2px solid black', borderRadius: '10px', padding: '20px', width: '300px' }}>
            <h1>👤 User Profile</h1>
            <UserDetails />
        </React.Fragment>
    )
}
export default ProfileCard