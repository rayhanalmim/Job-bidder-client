import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { ImBlocked } from 'react-icons/im';
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const JobDetails = () => {
    const {user, looding} = useContext(AuthContext);
    const job = useLoaderData();
    const { jobTitle, deadline, description, maxPrice, minPrice} = job;

    if (looding) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-md"></span></div>;
    }

    const handleBidsSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const clintEmail = form.clintEmail.value;
        const OfferedPrice = form.price.value;
        const clintDateline = form.date.value;
        
        const clintData = {...job, clintEmail, OfferedPrice, clintDateline}
        console.log(clintData)

        axios.post('http://localhost:3000/bids', clintData)
        .then(res =>{
            console.log(res.data);
            if (res.data.acknowledged) {
                Swal.fire(
                    'Congratulation!',
                    'job bit successfully!',
                    'success'
                )
                form.reset();
            }
        })
        .catch(() =>{
            toast.error('already bited on this job', {
                position: "top-left",
                theme: "dark",
            });
        })
    }

    return (


        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobTitle}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <p><span className='font-semibold'>Price range:</span> ${minPrice} to ${maxPrice}</p>
            <p className='mb-3'><span className='font-semibold'>Deadline:</span> {deadline}</p>

            <div className="pb-4">
                <h3 className="font-bold text-2xl">Place your bid</h3>
                <form onSubmit={handleBidsSubmit}>
                    <div className="grid gap-6 mt-4 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium">Your Email</label>
                            <input name='clintEmail' type="email" id="email" defaultValue={user.email} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" disabled required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Buyer Email</label>
                            <input type="email" name='buyerEmail' id="buyerEmail" defaultValue={job.email} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" disabled required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Deadline</label>
                            <input type="date" name='clintDate' id="date" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Offer A Price</label>
                            <input type="number" id="price" name='price' className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$Price" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                      
                        
                    </div>
                   
                    {
                        user.email === job.email ? <button disabled type="submit" className="bg-gray-600 border text-white text-lg font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com">Bit on the project<ImBlocked className="inline-block ml-3"></ImBlocked></button> 
                        : <button type="submit" className="bg-gray-600 hover:bg-gray-900 border text-white text-lg font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com">Bit on the project</button>
                    }

                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>


    );
};

export default JobDetails;