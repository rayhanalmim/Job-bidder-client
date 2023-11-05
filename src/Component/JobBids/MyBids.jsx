import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";

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
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(job =>   <tr key={job._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="pl-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {job.jobTitle}
                            </th>
                            <td className="px-6 py-4">
                                {job.email}
                            </td>
                            <td className="px-6 py-4">
                                {job.deadline}
                            </td>
                            <td className="px-6 py-4">
                                <h3 className="font-medium text-blue-500">{job.stutas}</h3>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBids;