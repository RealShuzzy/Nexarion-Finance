import React from 'react';
import { logout } from "../auth/logout";

const User: React.FC = () => {
  return <div id="budget" className="bg-background text-white w-full p-[10px]">
      <p>This is the User</p>
      <button
        onClick={logout}
        className="mt-auto bg-red-600 hover:bg-red-700 p-2 rounded-lg text-white"
        >
        Logout
      </button>
      
    </div>
};

export default User;