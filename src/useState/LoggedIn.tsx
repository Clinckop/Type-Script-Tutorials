import React, { useState } from "react";
let count = 0;
const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState<null | boolean>(null);

  console.log("Defauasdlt", isLoggedIn);

  const handleLogin = () => {
    count = count + 1;
    console.log(count);
    setisLoggedIn(true);
    console.log("Login", isLoggedIn);
  };
  const handleLogout = () => {
    count = count + 1;
    setisLoggedIn(false);
    console.log("Logout", isLoggedIn);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Lgout</button>
      {count === 0
        ? (console.log("inside one", count),
          (<p>{isLoggedIn ? "User login" : " "}</p>))
        : (console.log("inside one", count),
          (<p>{isLoggedIn ? "User login" : "User Logout "}</p>))}
    </div>
  );
};

export default LoggedIn;
