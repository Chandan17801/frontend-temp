import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineExclamationCircle } from "react-icons/ai"; // Import the desired icon

const Error = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-4 sm:p-8 bg-white rounded shadow-md max-w-md">
        <div className="mx-auto text-4xl text-red-600">
          <AiOutlineExclamationCircle />
        </div>
        <div>
          <h1 className="text-xl font-bold">404</h1>
        </div>
        <h2 className="text-2xl mt-2 sm:mt-4">We are sorry, Page not found</h2>
        <p className="mt-2">This Page is not available.</p>
        <div className="mt-6 flex justify-center">
          <a
            href="/"
            className="inline-block px-4 py-2 bg-blue-500 rounded-lg text-white font-bold flex items-center space-x-1 hover:bg-blue-600"
          >
            Redirect to Home page
            <span className="text-xl">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
