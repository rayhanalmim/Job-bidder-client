import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const MyBids = () => {
    const { user, looding } = useContext(AuthContext);
    const [selectedSort, setSelectedSort] = useState('');
    const [myJobs, setMyJobs] = useState([]);

    const { isPending, isLoading, data, refetch } = useQuery({
        queryKey: ['Mybids'],
        queryFn: async () =>
            await axios.get(`http://localhost:3000/mybids?email=${user.email}`,{withCredentials: true})
                .then(data => {
                    setMyJobs(data.data);
                    return data.data;
                })
    })
    

    if (looding) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-md"></span></div>;
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
                if (res.data.modifiedCount > 0) {
                    toast.success('Complited', {
                        position: "top-left",
                        theme: "dark",
                    });
                    refetch()
                }
            })
    } 
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSort(selectedValue);
        console.log('Selected value:', selectedValue);

        axios.get(`http://localhost:3000/sortedmybids?email=${user.email}&sortby=${selectedValue}`,{withCredentials: true})
        .then(res =>{
            console.log(res.data);
            setMyJobs(res.data)
        })

      };
      console.log(myJobs)

    return (
        <div>
            <div className="flex justify-end pb-5">
                <div className="flex gap-3">
                    <div className="flex justify-center items-center">
                        <h3 className="font-bold text-lg">Sort By: </h3>
                    </div>
                    <select value={selectedSort} onChange={handleSortChange} name='sort' id="sort" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sort By" required>
                        <option value="accept">Approved jobs</option>
                        <option value="complited">Completed jobs</option>
                        <option value="reject">Rejected jobs</option>
                    </select>
                </div>
            </div>
            {
                myJobs.length ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                myJobs.map(job => <tr key={job._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                                            job.status === 'accept' && <button onClick={() => handleComplite(job._id)} className="btn btn-sm btn-neutral">complete</button>
                                        }
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div> : <div className="text-center">
                    <div className="flex justify-center">
                        <img className="w-2/5" src="https://i.ibb.co/p0zvNR2/Pngtree-not-found-5408094.png" alt="" />
                    </div>
                    <h3 className="text-2xl -mt-20 font-bold">No data avalable</h3>
                </div>
            }


            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyBids;