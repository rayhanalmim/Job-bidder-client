import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobsCard from "../SharedComponent/JobsCard";

const JobCategory = () => {
    const [web, setWeb] = useState([]);
    const [marketing, setMarketing] = useState([]);
    const [graphics, setGraphics] = useState([]);

    const { isPending, isLoading, data } = useQuery({
        queryKey: ['jobsData'],
        queryFn: async () =>
            await fetch('http://localhost:3000/jobs')
                .then(res => res.json())
                .then(data => {
                    return data;
                })
    })

    useEffect(() => {
        if (data) {
            const webData = data.filter(jobs => jobs.category === 'Web Development');
            const marketingData = data.filter(jobs => jobs.category === 'Digital Marketing');
            const graphicsData = data.filter(jobs => jobs.category === 'Graphics Design');
            setWeb(webData);
            setMarketing(marketingData);
            setGraphics(graphicsData);
        }
    }, [data])

    if (isPending) {
        return <div><h3>pending</h3></div>
    }

    console.log(web, marketing, graphics);

    return (
        <Tabs>
            <TabList className='flex justify-center'>
                <Tab>
                    <div className="py-3 cursor-pointer">
                        <h3 className="text-center text-2xl !font-bold">Web development</h3>
                    </div>
                </Tab>
                <Tab>
                    <div className="py-3 cursor-pointer">
                        <h3 className="text-center text-2xl !font-bold">Digital marketing</h3>
                    </div>
                </Tab>
                <Tab>
                    <div className="py-3 cursor-pointer">
                        <h3 className="text-center text-2xl !font-bold">Graphics design</h3>
                    </div>
                </Tab>
            </TabList>
            <hr />
            <TabPanel className='pt-4'>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
                    {
                        web.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
                    {
                        marketing.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
                    {
                        graphics.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default JobCategory;