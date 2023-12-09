import { useEffect, useState } from "react";
import UpdateProfile from './UpdateProfile';
import { updateUser } from "../../services/UserService";
import { useDispatch } from "react-redux";
import { setUserState } from "../../redux/UserSlice";

const UserProfile = () => {

    const dispatch = useDispatch();

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('currentProfile')));
    const [isEditing, setIsEditing] = useState(false);

    const shouldEdit = () => {
        setIsEditing(!isEditing);
    };

    const updateProfile = (profileData) => {
        console.log(profileData);
        updateUser(profileData)
            .then((resp) => {
                console.log(resp.data);
                dispatch(setUserState(profileData));
                setProfile(profileData);
                shouldEdit();
            })
            .catch((err) => { console.log(err) });
    };

    return (
        <div>
            <p>Profile</p>
            <div>
                {
                    (!isEditing && profile) &&
                    <div>
                        <h1>User Profile</h1>
                        <img height={'200'} width={'200'} src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'} alt="Avatar" />
                        <p>Name: {profile.name}</p>
                        <p>Username: {profile.username}</p>
                        <p>Email: {profile.email}</p>
                        <p>Phone: {profile.phone}</p>
                        <p>Website: {profile.website}</p>
                        {/* <p>Password: {'\u2022'.repeat((profile.password).length)}</p> */}
                        <p>Password:</p>
                        <p></p>
                        <button onClick={shouldEdit} >Edit Profile</button>
                    </div>
                }
            </div>
            <div>
                {
                    isEditing &&
                    <div>
                        <UpdateProfile updatePro={updateProfile} ></UpdateProfile>
                        <p></p>
                        <button onClick={shouldEdit} >Cancel</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default UserProfile;

