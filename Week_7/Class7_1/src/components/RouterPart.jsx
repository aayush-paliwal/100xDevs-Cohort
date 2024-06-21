import React from 'react';
import { useNavigate } from 'react-router-dom';

const RouterPart = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div>
          <button onClick={() => navigate("/")}>Landing Page</button>
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
    </div>
  )
}

export default RouterPart
