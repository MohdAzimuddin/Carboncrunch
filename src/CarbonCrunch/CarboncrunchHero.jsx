import { CarboncrunchNav } from "./CarboncrunchNav";
import { motion } from "framer-motion";

export const CarbonCrunch = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: invisible and slightly shifted down
    visible: { opacity: 1, y: 0 },
  };

  // Wrapper component for applying motion animations
  const ElemetAnimation = ({ children }) => {
    return (
      <motion.div
        variants={variants}
        initial="hidden" // Setting initial state
        whileInView="visible" // Trigger visible state when in view
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };
  //
  return (
    <div className="w-full h-screen  bg-gradient-to-b from-green-50 to-green-200">
      {/* Added Navnbar */}
      <CarboncrunchNav />
      {/* Hero Section */}
      <ElemetAnimation>
        <div className="min-h-[70vh] flex flex-col align-center justify-center gap-3 text-center ">
          <div className="text-white bg-black px-4 py-2 rounded-full text-sm shadow-lg mx-auto">
            <span> &#128075;</span> Let’s Save our Environment
          </div>
          <h1 className="text-xl md:text-3xl xl:text-5xl font-bold mt-6 text-center mx-6">
            Streamline Your Sustainability
          </h1>
          <h1 className="text-xl md:text-3xl xl:text-5xl font-bold text-center mx-6 ">
            Reporting With
            <span className="text-green-500"> CARBON CRUNCH</span>
          </h1>
          <p className="text-sm md:text-md text-zinc-900 font-semibold mt-3">
            {" "}
            <span className="text-md text-green-700 font-semibold">
              95%
            </span>{" "}
            Accurate Carbon Calculations Trusted by Industry Leaders
          </p>
          {/* Button */}
          <div className="mt-6 flex space-x-4 flex-wrap justify-center">
            <button className="bg-white border-2 border-red-200 font-bold text-green-600 px-6 py-3 hover:bg-green-500 hover:text-white  active:bg-green-100  transition">
              Free Calculator
            </button>
            <button className="bg-green-500 font-semibold rounded-md px-6 py-3 hover:bg-green-700 active:bg-green-100 transition">
              Book Demo
            </button>
          </div>
        </div>
      </ElemetAnimation>
    </div>
  );
};
