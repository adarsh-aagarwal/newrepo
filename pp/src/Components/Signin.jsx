

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../Context/AuthContext';

// const SigninPage = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const images = [
//     'https://img.freepik.com/free-vector/letter-concept-illustration_114360-4092.jpg?semt=ais_hybrid&w=740',
//     'https://media.istockphoto.com/id/1298159225/vector/broadcasting-with-journalist-or-newscaster.jpg?s=612x612&w=0&k=20&c=RYq-yNo6t3K2p761AUOgrT284CUdIB7XKgn2ppL6608=',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     if (!email || !password) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/auth/sign_in', {
//         email,
//         password,
//       });

//       const token = response.data.token;
//       login(token);

//       const userResponse = await axios.get('http://localhost:8080/api/users/me', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Logged in user:", userResponse.data);
//       alert('Login successful!');
//       navigate('/');
//     } catch (error) {
//       console.error(error.response?.data || error.message);
//       alert('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="relative min-h-screen">
//       {/* Two-tone background */}
//       <div className="absolute top-0 left-0 w-full h-1/2 bg-[#4169f5] z-0" />
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#dbe8ff] z-0" />

//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
//         <div className="w-full max-w-4xl bg-white rounded-[2rem] flex flex-col md:flex-row overflow-hidden shadow-lg">
          
//           {/* Left Side - Login */}
//           <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-center mb-8">Sign In</h2>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-[#f2f2f2] rounded-md text-sm outline-none"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-[#f2f2f2] rounded-md text-sm outline-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#4169f5] text-white py-3 rounded-md text-sm font-semibold"
//               >
//                 Sign In
//               </button>
//             </form>

//             <p className="text-center text-sm mt-6">
//               Don't have an account?{' '}
//               <Link to="/Signup" className="text-[#4169f5] font-semibold">
//                 Sign up
//               </Link>
//             </p>
//           </div>

//           {/* Right Side - Image Slider */}
//           <div className="hidden md:flex w-1/2 bg-white p-10 flex-col justify-center items-center text-center transition-all duration-500">
//             <div className="w-full h-64 mb-8 flex items-center justify-center">
//               <img
//                 src={images[currentIndex]}
//                 alt={`Slide ${currentIndex + 1}`}
//                 className="max-h-full max-w-full object-contain rounded-xl"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Welcome Back</h3>
//             <p className="text-sm text-gray-500 mb-4">
//               Log in to Read, Write & Summarize with ease.
//             </p>

//             <div className="flex justify-center space-x-3 mt-2">
//               {images.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentIndex === index ? 'bg-[#4169f5]' : 'bg-gray-300'
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SigninPage;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

const SigninPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const images = [
    'https://img.freepik.com/free-vector/letter-concept-illustration_114360-4092.jpg?semt=ais_hybrid&w=740',
    'https://media.istockphoto.com/id/1298159225/vector/broadcasting-with-journalist-or-newscaster.jpg?s=612x612&w=0&k=20&c=RYq-yNo6t3K2p761AUOgrT284CUdIB7XKgn2ppL6608=',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/auth/sign_in', {
        email,
        password,
      });

      const token = response.data.token;
      login(token);

      const userResponse = await axios.get('http://localhost:8080/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Logged in user:", userResponse.data);
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#4169f5] to-[#dbe8ff] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-[2rem] flex flex-col md:flex-row overflow-hidden shadow-xl">

        {/* Left Side - Login */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#4169f5]">Sign In</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#f2f2f2] rounded-md text-sm outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#f2f2f2] rounded-md text-sm outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4169f5] text-white py-3 rounded-md text-sm font-semibold hover:bg-[#2f50c1] transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/Signup" className="text-[#4169f5] font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side - Image Slider */}
        <div className="hidden md:flex w-1/2 bg-white p-10 flex-col justify-center items-center text-center transition-all duration-500">
          <div className="w-full h-64 mb-8 flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#4169f5]">Welcome Back</h3>
          <p className="text-sm text-gray-500 mb-4">Log in to Read, Write & Summarize with ease.</p>

          <div className="flex justify-center space-x-3 mt-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#4169f5]' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
