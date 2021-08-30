import React, { useContext, useState, createContext } from "react";

const AppContext = createContext(null);

const UsecontextHook = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      <Login />
      <User />
    </AppContext.Provider>
  );
};

const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
};

export default UsecontextHook;
