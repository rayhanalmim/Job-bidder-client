import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MyJobs = () => {
    const { user, looding } = useContext(AuthContext);


    const { isPending, isLoading, data, refetch } = useQuery({
        queryKey: ['MyPostedJobs'],
        queryFn: async () =>
            await axios.get(`https://jobbidderhub-server.vercel.app/myjobs?email=${user.email}`,{withCredentials:true})
                .then(data => {
                    return data.data;
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

    const handleDelete = (id) =>{
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://jobbidderhub-server.vercel.app/delete/${id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount>0) {
                        Swal.fire(
                            'Congratulation!',
                            'job updated successfully!',
                            'success'
                        )
                    }
                    refetch();
                })
            }
          })

           
    }

    return (
        <div>
            {
                data.length == 0 ? <div className="text-center">
                <div className="flex justify-center">
                    <img className="w-2/5" src="https://i.ibb.co/z69HTyD/9170826.jpg" alt="" />
                </div>
                <h3 className="text-2xl -mt-8 font-bold">No post found</h3>
            </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center pt-3">
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
                                <div className="flex flex-col md:flex-row gap-0 md:gap-5">
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {job.category}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Deadline: {job.deadline}</p>
                                </div>
                                <div className="flex gap-7">
                                    <Link to={`/edit/${job._id}`} state={job.jobTitle} className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Edit
                                        <AiFillEdit className="ml-2"></AiFillEdit>
                                    </Link>
                                    <button onClick={()=>handleDelete(job._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Delete
                                        <MdDeleteForever className="ml-2 text-lg"></MdDeleteForever>
                                    </button>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyJobs;