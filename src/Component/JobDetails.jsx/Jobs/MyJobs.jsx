import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from "react-router-dom";

const MyJobs = () => {
    const { user, looding } = useContext(AuthContext);


    const { isPending, isLoading, data, refetch } = useQuery({
        queryKey: ['MyPostedJobs'],
        queryFn: async () =>
            await fetch(`http://localhost:3000/myjobs?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    return data;
                })
    })

    if (looding) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-md"></span></div>;
    }


    if (user.email) {
        refetch();
    }

    if (isPending) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-md"></span></div>;
    }
    console.log(data)

    return (
        <div>
            {
                data.length == 0 ? <div>No jobs found</div> :
                    <div className="grid grid-cols-2 gap-3 justify-items-center">
                        {
                            data.map(job => <div key={job._id} className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.jobTitle}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.shortDescription}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {job.email}</p>
                                <div className="flex gap-5">
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Minimum Price: {job.minPrice}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Maximum Price: {job.maxPrice}</p>
                                </div>
                                <div className="flex gap-5">
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {job.category}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Deadline: {job.deadline}</p>
                                </div>
                                <div className="flex gap-7">
                                    <Link to={`/edit/${job._id}`} className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Edit
                                        <AiFillEdit className="ml-2"></AiFillEdit>
                                    </Link>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Delete
                                        <MdDeleteForever className="ml-2 text-lg"></MdDeleteForever>
                                    </a>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyJobs;