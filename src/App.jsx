import { useState } from "react";
import LoginForm from "./component/login";
import SignUp from "./component/signup";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function toggleForm() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
      {isLoggedIn ? (
        <SignUp toggleForm={toggleForm} />
      ) : (
        <LoginForm toggleForm={toggleForm} />
      )}
    </div>
  );
}
