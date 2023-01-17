import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { BiStar } from 'react-icons/bi';
import { fetchData } from '../hooks/fetchData';
import { actionType, useStateValue } from '../context/Store';

const Hero = () => {
  const { data: session } = useSession();
  const [state, dispatch] = useStateValue();

  const generateMealPlan = async () => {
    // const response = await fetchData(
    //   `https://api.spoonacular.com/mealplanner/generate?apiKey=78f8ff209181490091bfe386fd7ecdcf&timeFrame=week&targetCalories=14000`
    // );
    // if (response) {
    //   localStorage.setItem('mealPlan', JSON.stringify(response));
    //   dispatch({ type: actionType.SET_MEAL_PLAN, mealPlan: response });
    // }
  };

  return (
    <div className="h-fit lg:h-[70vh] w-screen px-4 md:px-16 py-5">
      <motion.div
        initial={{ y: '100vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 h-full md:grid-cols-2 px-8 py-6 lg:py-0 rounded my-8 bg-orange-50"
      >
        {/* left */}
        <div className="flex flex-col justify-center gap-5 flex-1 lg:col-span-1">
          <h1 className="text-6xl font-poppins font-semibold align-middle leading-[4.5rem]">
            Keep your <br /> <span className="text-orange-500">body fit</span>{' '}
            and be <span className="text-orange-500">healty.</span>
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum
            dignissimos ipsa pariatur magnam molestiae ut esse, libero
            aspernatur quidem.
          </p>
          <div className="flex gap-5 mb-4">
            {session ? (
              <button
                onClick={generateMealPlan}
                className="bg-orange-400 text-white font-medium tracking-wide rounded hover:bg-orange-500 drop-shadow-md px-7 py-1.5"
              >
                Generate Meal Plan
              </button>
            ) : (
              <Link
                href={'/login'}
                className="bg-orange-400 text-white font-medium tracking-wide rounded hover:bg-orange-500 drop-shadow-md px-7 py-1.5"
              >
                Diets now
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="bg-orange-500 w-6 h-6 flex items-center justify-center rounded-md">
                <BiStar className="fill-white" />
              </div>
              <h2 className="font-medium">100k reviews</h2>
            </div>
            <p>More than 500k users taking services.</p>
          </div>
        </div>

        {/* right */}
        <div className="relative hidden lg:block">
          <Image
            src="/jogging.svg"
            alt="hero_banner"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
