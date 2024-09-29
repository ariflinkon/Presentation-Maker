import { useState } from 'react';

const NicknameInput = ({ setNickname, handleLogin }) => {
  const [nickname, setLocalNickname] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalNickname(value);
    setNickname(value);
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  <h1 className="text-2xl font-semibold text-gray-800 mb-4">Enter your nickname</h1>
  <input
    type="text"
    value={nickname}
    onChange={handleChange}
    placeholder="Nickname"
    className="w-full max-w-sm p-3 border border-gray-300 rounded-lg shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
  <button
    onClick={handleLogin}
    className="w-full max-w-sm p-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
  >
    Enter
  </button>
</div>

  );
};

export default NicknameInput;