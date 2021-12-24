import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "harit",
      email: "harit@gmail.com"
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Logged In User is {user?.name}</div>
      <div>Logged In User email is {user?.email}</div>
    </div>
  );
};
export default User;