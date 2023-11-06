import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const MyBids = () => {
    const { user, looding } = useContext(AuthContext);

    const { isPending, isLoading, data, refetch } = useQuery({
        queryKey: ['Mybids'],
        queryFn: async () =>
            await fetch(`http://localhost:3000/mybids?email=${user.email}`)
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

    console.log(data);

    const handleComplite = (id) => {
        const data = { status: 'complited' };
        console.log(data);

        console.log(data)

        axios.put(`http://localhost:3000/complite/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount>0) {
                    toast.success('Complited', {
                        position: "top-left",
                        theme: "dark",
                    });
                    refetch()
                }
            })
    }

    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                            <th scope="col" className="px-6 py-3">
                                Jobs Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Owner Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dateline
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data.map(job => <tr key={job._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {job.jobTitle}
                                </th>
                                <td className="px-2 py-4">

                                {job.email}
                                </td>
                                <td className="px-5 py-4">

                                    {job.deadline}
                                </td>
                                <td className="pl-6 py-4">
                                <h3 className="font-medium text-blue-500">
                                    {
                                        job.status === 'pending' && <div>{job.status}</div>
                                    }
                                    {
                                        job.status === 'reject' && <div className="font-semibold text-red-600">Rejected</div>
                                    }
                                    {
                                        job.status === 'accept' && <div className="flex gap-2"><div className="font-semibold text-blue-500">In progress</div>
                                        </div>
                                    }
                                    {
                                        job.status === 'complited' && <div className="flex gap-2"><div className="font-semibold text-green-500">Completed</div>
                                        </div>
                                    }
                                    
                                </h3>
                                </td>
                                <td className="pl-6 py-4">
                                    {
                                        job.status === 'accept' && <button onClick={()=>handleComplite(job._id)} className="btn btn-sm btn-neutral">complete</button>
                                    }
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyBids;