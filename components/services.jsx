import { MdWeb } from "react-icons/md";
import { FaMobileAlt, FaBroom } from "react-icons/fa";

const Services = () => {
  return (
    <section className="max-w-container mr-auto ml-auto mt-10 grid grid-cols-3 gap-x-20 gap-y-10 text-white font-light">
      <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
        <span className="inline-flex items-center justify-center text-3xl w-12 h-12 rounded-full bg-white text-red-100"><MdWeb /></span> <p>Website Design</p>
      </div>
      <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
        <span className="inline-flex items-center justify-center text-3xl w-12 h-12 rounded-full bg-white text-red-100"><FaMobileAlt /></span> <p>Mobile App Development</p>
      </div>
      <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
        <span className="inline-flex items-center justify-center text-3xl w-12 h-12 rounded-full bg-white text-red-100"><FaBroom /></span> <p>Graphics Design</p>
      </div>
      <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
        <span className="inline-flex items-center justify-center text-3xl w-12 h-12 rounded-full bg-white text-red-100"><MdWeb /></span> <p>Website Design</p>
      </div>
      <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
        <span className="inline-flex items-center justify-center text-3xl w-12 h-12 rounded-full bg-white text-red-100"><FaMobileAlt /></span> <p>Mobile App Development</p>
      </div>
      <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
        <span className="inline-flex items-center justify-center text-3xl w-12 h-12 rounded-full bg-white text-red-100"><FaBroom /></span> <p>Graphics Design</p>
      </div>
    </section>
  );
}

export default Services;