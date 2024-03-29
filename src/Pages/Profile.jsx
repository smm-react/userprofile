/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () =>{
    const {user_id} = useParams();
    const [loader, setLoader] = useState(false);

    const [userData, setUserData] = useState([]);

    const getUserData = () =>{
        setLoader(true);
        fetch(`https://dummyjson.com/users/${user_id}`)
        .then(res => res.json())
        .then((data) => 
        {
            setUserData(data),
            setLoader(false);
        });
    } 

    useEffect(() =>{
        getUserData();
    },[])
    
    //console.log(userData);

    const {id, birthDate, firstName, gender, image, lastName, phone, university, username} = userData;

    return(
        (loader) ? (
            <>
            <span className="loading loading-infinity loading-lg"></span>
            </>
        ) : (
            <>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={image} alt={firstName}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{firstName} {lastName}({username})</h2>
                        <p>ID: {id}</p>
                        <p>DOB: {birthDate}</p>
                        <p>Gender: {gender}</p>
                        <p>Phone: {phone}</p>
                        <p>University: {university}</p>
                        {/* <p>{address.city}, {address.address}</p> */}
                    </div>
                </div>  
            </>
        )
        
    )
}

export default Profile;