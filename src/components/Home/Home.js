import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import "./Home.css";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h3>Home component</h3>
       <h2>{user ? user.displayName : "No body is here."}</h2> 
    </div>
  );
};

export default Home;
