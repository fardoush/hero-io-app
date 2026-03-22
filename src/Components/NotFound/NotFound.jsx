import React from 'react';
import apperror from "../../assets/App-Error.png"
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="text-center  w-full">
        <div className="relative mb-8 flex justify-center">
          <img
            src={apperror}
            alt="404 Error"
            className="w-full max-w-[350px] md:max-w-[450px] animate-pulse"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
OPPS!! APP NOT FOUND </h1>
          <p className="text-gray-500 text-base md:text-lg">
            The App you are requesting is not found on our system.  please try another apps
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] border-none text-white px-10 py-3 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
    );
};

export default NotFound;