import { ToastContainer } from "react-toastify";
import JobCategory from "./JobCategory";
import Marquee from "react-fast-marquee";
import QnA from "./QnA";

const Home = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/1LtnLQd/redback-career.jpg')] bg-cover bg-center h-3/4 md:h-full w-full rounded mt-3 mb-4">
                <div className="text-center inset-0 bg-black bg-opacity-60 bg-blend-multiply py-32 space-y-3">
                    <h3 className="text-white text-3xl font-bold">Explore Job Opportunities</h3>
                    <p className="text-white font-medium w-full md:w-2/3 mx-auto">The world of job opportunities is vast and ever-evolving, and we are here to guide you through it. Our Explore Job Opportunities banner opens the door to a dynamic job marketplace, offering a multitude of roles that cater to your expertise!</p>
                </div>
            </div>
            <div className="pb-5">
                <Marquee>
                        <p className="text-lg font-semibold pr-3">Welcome to Job Masters Hub - Where Opportunities and Talents Unite! Explore a world of career possibilities, post your dream job, or discover your perfect match. Your journey to professional success begins here. Join us and let your career aspirations soar!</p>
                </Marquee>
            </div>
            <div>
                <JobCategory></JobCategory>
            </div>
            <div className="py-5">
                <QnA></QnA>
            </div>
            <div className="py-5 space-y-1">
                <h3 className="text-2xl font-medium">Get more updates...</h3>
                <p>Do you want to get notified when we added something new? Sign up for our newsletter and youll be among the first to find out about new services, updated and more.</p>
                <div className="flex gap-4 pt-1">
                    <div className="">
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email Address" required />
                    </div>
                    <button className="bg-blue-800 px-4 rounded-lg text-white">Subscribe</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;