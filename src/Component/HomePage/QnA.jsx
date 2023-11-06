const QnA = () => {
    return (
        <div>
            <div className="">
                <h3 className="font-bold text-3xl py-3 text-center mb-3">Meet Our Team</h3>
                <div className="grid grid-cols-2 pt-4 md:grid-cols-4 bg-slate-50 p-5 gap-3 justify-center mx-auto rounded-md">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="text-center space-y-1">
                        <img className="mx-auto rounded-full object-cover h-32 w-32" src="https://i.ibb.co/mFPTSLv/woman-poses-front-her-office-happy-entrepreneur-ai-generated-47726-15663.jpg" alt="" />
                        <h2 className="text-xl font-semibold">Sarah Mitchell</h2>
                        <p className="font-medium">Chief Executive Officer (CEO)</p>
                    </div>
                    <div className="text-center space-y-1">
                        <img className="mx-auto rounded-full object-cover h-32 w-32" src="https://i.ibb.co/NSN8NnK/man-wearing-jacket-with-jeans.webp" alt="" />
                        <h2 className="text-xl font-semibold">John Anderson</h2>
                        <p className="font-medium">Chief Operating Officer (COO)</p>
                    </div>
                    <div className="text-center space-y-1">
                        <img className="mx-auto rounded-full object-cover h-32 w-32" src="https://i.ibb.co/60smcsq/happy-young-business-woman-posing-isolated-against-city-landscape-background-935410-658.jpg" alt="" />
                        <h2 className="text-xl font-semibold">Emily Parker</h2>
                        <p className="font-medium">Creative Director</p>
                    </div>
                    <div className="text-center space-y-1">
                        <img className="mx-auto rounded-full object-cover h-32 w-32" src="https://i.ibb.co/kSB5ZmV/62e40d31205f75001879f378.webp" alt="" />
                        <h2 className="text-xl font-semibold">David Johnson</h2>
                        <p className="font-medium">Lead Software Developer</p>
                    </div>

                </div>
                <div className="bg-slate-50 p-2">
                    <p className="text-center">Meet the brilliant minds behind the success of Job Masters Hub. Our team is composed of dedicated professionals who bring diverse skills and expertise to the table. From our visionary CEO, Sarah Mitchell, to our tech-savvy Lead Software Developer, David Johnson, our team works collaboratively to make your job search or recruitment experience seamless and efficient. With years of experience and a shared passion for connecting job seekers with their dream careers and assisting employers in finding top talent, our team is committed to making Job Masters Hub your preferred destination for all things related to employment.</p>
                </div>
            </div>
        </div>
    );
};

export default QnA;