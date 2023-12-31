import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
    const { jobTitle, deadline, shortDescription, maxPrice, minPrice, _id} = job;

    return (
        <div className="max-w-sm p-6 w-[25rem] md:w-auto lg:w-auto xl:w-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className=''>
                <div className=''>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobTitle}</h5>
                    </a>
                    <p className=" font-normal text-gray-700 dark:text-gray-400">{shortDescription}</p>
                    <p><span className='font-semibold'>Price range:</span> ${minPrice} to ${maxPrice}</p>
                    <p className='mb-3'><span className='font-semibold'>Deadline:</span> {deadline}</p>
                </div>
                <div className=''>
                    <Link to={`/jobs/${_id}`} state={jobTitle} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Bid Now
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>


        </div>
    );
};
JobsCard.propTypes = {
    job: PropTypes.object,
};
export default JobsCard;