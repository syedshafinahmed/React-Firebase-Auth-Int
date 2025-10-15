import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;