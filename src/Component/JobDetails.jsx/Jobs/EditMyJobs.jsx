import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditMyJobs = () => {
 const jobs = useLoaderData();
    const { email, _id, category, jobTitle, maxPrice, deadline, minPrice, description, shortDescription } = jobs;
    console.log(jobs);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const category = form.category.value;
        const jobTitle = form.title.value;
        const deadline = form.date.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const description = form.describtion.value;
        const shortDescription = form.shortDis.value;

        const data = { email, category, jobTitle, maxPrice, deadline, minPrice, description, shortDescription };

        console.log(data)

        axios.put(`http://localhost:3000/edit/${_id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount>0) {
                    Swal.fire(
                        'Congratulation!',
                        'job updated successfully!',
                        'success'
                    )
                    navigate('/myjobs');
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto pb-4">
            <h3 className=" text-center font-bold text-3xl">Update Jobs</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mt-4 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input defaultValue={email} name='email' type="text"  id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" disabled required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Categorys</label>
                        <select defaultValue={category} name='category' id="category" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="select a caregory" required>
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphics Design">Graphics Design</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Jobs Title</label>
                        <input defaultValue={jobTitle} type="text" name='title' id="title" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Deadline</label>
                        <input defaultValue={deadline} type="date" id="date" name='date' className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DATE" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Minimum Price</label>
                        <input defaultValue={maxPrice} type="number" id="price" name='maxPrice' className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$Price" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Maximum Price</label>
                        <input defaultValue={minPrice} type="number" id="price" name='minPrice' className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$Price" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                </div >
                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium">Job Short Describtion</label>
                    <input defaultValue={shortDescription} type="text" id="shortDis" name="shortDis" className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Describtion" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">Job Details Describtion</label>
                    
                    <textarea defaultValue={description} type="text" id="discribtion" name="describtion" rows="5" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" required></textarea>
                </div>
                <button type="submit" className="bg-gray-600 hover:bg-gray-900 border text-white text-lg font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com">Update Jobs</button>

            </form >
        </div >
    );
};

export default EditMyJobs;