import JobCategory from "./JobCategory";

const Home = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/1LtnLQd/redback-career.jpg')] bg-cover bg-center h-full w-full rounded mb-4">
                <div className="text-center inset-0 bg-black bg-opacity-60 bg-blend-multiply py-32 space-y-3">
                    <h3 className="text-white text-3xl font-bold">Explore Job Opportunities</h3>
                    <p className="text-white font-medium w-2/3 mx-auto">The world of job opportunities is vast and ever-evolving, and we are here to guide you through it. Our Explore Job Opportunities banner opens the door to a dynamic job marketplace, offering a multitude of roles that cater to your expertise!</p>
                </div>
            </div>
            <div>
                <JobCategory></JobCategory>
            </div>
        </div>
    );
};

export default Home;