import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} isLogin={isLogin} />
      ) : (
        <Signup setIsLogin={setIsLogin} isLogin={isLogin} />
      )}
    </>
  );
};

export default App;
