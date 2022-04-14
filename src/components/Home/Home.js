import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
// import useFirebase from "../../Hooks/useFirebase";
import "./Home.css";

const auth = getAuth(app)

const Home = () => {
//   const { user } = useFirebase();

const [user] = useAuthState(auth)
  return (
    <div>
      <h3>Home component</h3>
       <h2>{user ? user.displayName : "No body is here."}</h2> 
    </div>
  );
};

export default Home;
