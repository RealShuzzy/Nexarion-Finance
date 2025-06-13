import React from 'react';
import { logout } from "../auth/logout";

const User: React.FC = () => {
  return <div id="budget" className="bg-background p-[10px] w-full text-white">
      <p>This is the User</p>
      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 mt-auto p-2 rounded-lg text-white"
        >
        Logout
      </button>
      
    </div>
};

export default User;