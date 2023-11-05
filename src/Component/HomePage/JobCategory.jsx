import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobsCard from "../SharedComponent/JobsCard";

const JobCategory = () => {
    const [web, setWeb] = useState([]);
    const [marketing, setMarketing] = useState([]);
    const [graphics, setGraphics] = useState([]);

    const { isPending, error, data } = useQuery({
        queryKey: ['jobsData'],
        queryFn: () =>
            axios.get('http://localhost:3000/jobs')
                .then((res) => {
                    return res.data;
                })
    })

    useEffect(() => {
        const webData = data.filter(jobs => jobs.category === 'Web Development');
        const marketingData = data.filter(jobs => jobs.category === 'Digital Marketing');
        const graphicsData = data.filter(jobs => jobs.category === 'Graphics Design');
        setWeb(webData);
        setMarketing(marketingData);
        setGraphics(graphicsData);
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

            <TabPanel classNameName='pt-4'>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
                    {
                        web.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <p>
                    <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                    is a character in Nintendos Mario franchise. Originally created by Shigeru Miyamoto,
                    Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                    attack by Bowser. She often plays the damsel in distress role within the series and
                    is the lead female. She is often portrayed as Marios love interest and has appeared
                    in Super Princess Peach, where she is the main playable character.
                </p>
                <p>
                    Source:{' '}
                </p>
            </TabPanel>
            <TabPanel>
                <p>
                    <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
                    appears in Nintendos Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
                    he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peachs most loyal
                    attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
                    who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
                    takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Warios Woods,
                    Super Mario 3D World, and Captain Toad: Treasure Tracker.
                </p>
                <p>
                    Source:{' '}
                </p>
            </TabPanel>
        </Tabs>
    );
};

export default JobCategory;