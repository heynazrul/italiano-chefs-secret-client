import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUser, isImage, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if (password && password.length < 6) {
      setError('Password should be minimum 6 character');
      return;
    }

    if (!isImage(photo)) {
      setError('Provide a valid photo URL ex: .jpg, .png, .svg');
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUser(name, photo);
        toast.success('Registration Successful!');
        navigate('/');
        console.log(createdUser);
      })
      .catch((error) => {
        let err = error.message.includes('email-already-in-use');
        if (err) {
          setError('Email already in use');
        }
        console.log(error);
      });
    console.log(name, photo, email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setError('');
        const loggedUser = result.user;
        toast.success('Login Successful!');
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
      });
    }
    setError('');
  }, [error]);

  return (
    <main className="py-20 flex w-full flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Create an account</h3>
          <p className="">
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="font-medium text-primary hover:text-rose-500">
              Log in
            </Link>
          </p>
        </div>

        <div className="bg-white p-4 py-6 shadow sm:rounded-lg sm:p-6">
          <form
            onSubmit={handleRegister}
            className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-rose-600"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-rose-600"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-rose-600"
              />
            </div>
            <div>
              <label className="font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-rose-600"
              />
            </div>
            {/* Error message section */}
            {/* <div className="bg-rose-400 px-4 py-2">{error && toast.error(error)}</div> */}
            <button className="mt-4 w-full rounded-lg bg-primary px-4 py-2 font-medium text-white duration-150 hover:bg-primary-light active:bg-rose-700">
              Create account
            </button>
          </form>
          <div className="mt-5">
            <button
              onClick={handleGoogleLogin}
              className="mt-5 flex w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 text-sm font-medium duration-150 hover:bg-gray-50 active:bg-gray-100">
              <svg
                className="h-5 w-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
