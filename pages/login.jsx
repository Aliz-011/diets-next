import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

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
      const result = await signIn('credentials', {
        redirect: false,
        email: userInfo.email,
        password: userInfo.password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <section>
      <div className="h-[89vh] w-full px-4 md:px-16">
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
          <div className="flex flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-8"
            >
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
                <button className="w-full px-5 py-1.5 border-none rounded-md bg-gradient-to-br from-blue-600 to-indigo-400 hover:bg-gradient-to-bl hover:from-indigo-400 hover:to-blue-600 duration-200 ease-out transition text-white">
                  Login
                </button>
              </div>

              <p>
                Do not have an account yet?{' '}
                <Link href={'/register'} className="text-blue-500">
                  Signup here.
                </Link>
              </p>
            </form>
          </div>

          <div className="col-span-2">img</div>
        </div>
      </div>
    </section>
  );
};

export default Login;
