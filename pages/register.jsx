import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    cPassword: '',
  });

  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (userInfo.password !== userInfo.cPassword) {
        toast.warning('Password do not match!');
        return;
      }

      await axios.post('/api/auth/signup', {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        username: userInfo.username,
        password: userInfo.password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email: userInfo.email,
        password: userInfo.password,
      });

      if (result.ok) {
        toast.success('your account has been created!');
        return;
      }

      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section>
      <Head>
        <title>Register - Diets App</title>
        <meta name="register" content="register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[89vh] w-full">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="h-full grid grid-cols-1 md:grid-cols-3 bg-gray-50 rounded-md pl-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex gap-2">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="px-2 py-1 border-none w-full rounded"
                  placeholder="First Name..."
                  value={userInfo.firstName}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, firstName: target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="px-2 py-1 border-none w-full rounded"
                  placeholder="Last Name..."
                  value={userInfo.lastName}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, lastName: target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="px-2 py-1 w-full border-none rounded"
                placeholder="Email..."
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="px-2 py-1 w-full border-none rounded"
                placeholder="username..."
                value={userInfo.username}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, username: target.value })
                }
              />
            </div>

            <div className="flex gap-2">
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="px-2 py-1 w-full border-none rounded"
                  placeholder="******"
                  value={userInfo.password}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  id="cpassword"
                  className="px-2 py-1 w-full border-none rounded"
                  placeholder="******"
                  value={userInfo.cPassword}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, cPassword: target.value })
                  }
                />
              </div>
            </div>

            <div>
              <button className="w-full px-5 py-1.5 border-none rounded-md bg-gradient-to-br from-blue-600 to-indigo-400 hover:bg-gradient-to-bl hover:from-indigo-400 hover:to-blue-600 duration-200 ease-out transition text-white">
                Register
              </button>
            </div>
          </form>

          <div className="col-span-2">img</div>
        </div>
      </div>
    </section>
  );
};

export default Register;
