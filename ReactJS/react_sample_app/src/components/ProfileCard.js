import UserDetails from "./UserDetails"


function ProfileCard()
{
    return(
        <div style={{ border: '2px solid black', borderRadius: '10px', padding: '20px', width: '300px' }}>
            <h1>👤 User Profile</h1>
            <UserDetails />
        </div>
    )
}
export default ProfileCard