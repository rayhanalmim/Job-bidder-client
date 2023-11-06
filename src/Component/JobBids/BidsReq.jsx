import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './bids.css';

const BidsReq = () => {
    const { user, looding } = useContext(AuthContext);

    const { isPending, isLoading, data, refetch } = useQuery({
        queryKey: ['BidsReq'],
        queryFn: async () =>
            await fetch(`http://localhost:3000/bidsreq?email=${user.email}`)
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

    const handleReject = (id) =>{
        const data = { status: 'reject' };
        console.log(data);

        console.log(data)

        axios.put(`http://localhost:3000/status/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount>0) {
                    toast.error('rejected', {
                        position: "top-left",
                        theme: "dark",
                    });
                    refetch()
                }
            })
    }
    const handleAccept = (id) =>{
        const data = { status: 'accept' };
        console.log(data);

        console.log(data)

        axios.put(`http://localhost:3000/approve/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount>0) {
                    toast.success('accepted', {
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
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
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

                                    {job.clintEmail}
                                </td>
                                <td className="px-5 py-4">

                                    {job.deadline}
                                </td>
                                <td className="pl-6 py-4">
                                    {job.OfferedPrice}
                                </td>
                                <td className="pl-6 py-4">
                                    {
                                        job.status === 'pending' && <div><button onClick={()=>handleAccept(job._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Accpt</button>
                                        <button onClick={()=>handleReject(job._id)} className="font-medium pl-4 text-blue-600 dark:text-blue-500 hover:underline">Reject</button></div>
                                    }
                                    {
                                        job.status === 'reject' && <div className="font-semibold text-red-600">Cancelled</div>
                                    }
                                    {
                                        job.status === 'accept' && <div className="pr-8"><ProgressBar percent={5}>
                                        <Step>
                                          {({ accomplished, index }) => (
                                            <div
                                              className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                            >
                                              {index + 1}
                                            </div>
                                          )}
                                        </Step>
                                        <Step>
                                          {({ accomplished, index }) => (
                                            <div
                                              className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                            >
                                              {index + 1}
                                            </div>
                                          )}
                                        </Step>
                                        <Step>
                                          {({ accomplished, index }) => (
                                            <div
                                              className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                            >
                                              {index + 1}
                                            </div>
                                          )}
                                        </Step>
                                      </ProgressBar></div>
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

export default BidsReq;