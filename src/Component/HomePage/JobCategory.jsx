import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {
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
                <p>
                    <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
                        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
                    game franchise, owned by Nintendo and created by Japanese video game designer
                    Shigeru Miyamoto. Serving as the companys mascot and the eponymous protagonist
                    of the series, Mario has appeared in over 200 video games since his creation.
                    Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
                    Kingdom, his adventures generally center upon rescuing Princess Peach from the
                    Koopa villain Bowser. His younger brother and sidekick is Luigi.
                </p>
                <p>
                    Source:{' '}
                </p>
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