import { useState } from 'react';
import Homepage from "../Home/Homepage";
import NicknameInput from "./NicknameInput";

const App = () => {
  const [nickname, setNickname] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (nickname.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <NicknameInput setNickname={setNickname} handleLogin={handleLogin} />
      ) : (
        <div className="w-full h-full">
          <Homepage nickname={nickname} />
        </div>
      )}
    </div>
  );
};

export default App;