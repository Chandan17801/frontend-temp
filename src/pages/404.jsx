import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png";

const Error = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10); // Reduced the time for demonstration

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [seconds, router]);

  return (
    <div className="flex items-center  min-h-screen bg-yellow">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-8  text-center flex sm:flex-row flex-col items-center">
        <div className="sm:w-1/2 sm:pr-4 ">
          <h2 className="text-3xl font-bold text-yellow-600 sm:text-2xl mt-2 sm:mt-4">
            Apologize,
          </h2>
          <p className="text-yellow-600 font-bold text-2xl mt-2">
            We have a problem.
          </p>
          <div className="text-opacity-80  text-gray-700">
            <h1 className="text-xl font-bold text-9xl">404</h1>
          </div>

          <div className="mt-4 flex justify-center ">
            <a
              href="/"
              className="shadow-md inline-block px-4 py-2 bg-yellow-500 rounded-lg text-white font-bold flex items-center space-x-1 hover:bg-white-600"
            >
              Redirect to Home page
              <span className="text-xl">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center mt-4 sm:mt-0">
          <Image src={logo} alt="Logo" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Error;
