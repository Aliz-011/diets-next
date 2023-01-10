import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div>
      login
      <Link href={'/register'}>register</Link>
    </div>
  );
};

export default Login;
