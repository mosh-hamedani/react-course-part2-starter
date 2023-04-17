import { useState } from "react";

const LoginStatus = () => {
  const [user, setUser] = useState('');

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => setUser('')} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => setUser('mosh.hamedani')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
