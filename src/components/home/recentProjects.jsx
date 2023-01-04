import { Link } from "react-router-dom";

const RecentProjects = () => {
    return (
        <section>
            <h2 className="text-3xl text-center sm:text-start md:self-start">Recent Projects</h2>

            <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 w-full">
                <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                </div>

                <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                </div>

                <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                </div>
            </div>

            <Link className="md:self-start py-1 px-2 bg-[#5b7493] text-white button-transition hover:bg-inherit hover:text-[#5b7493] border hover:border-[#5b7493] rounded-2xl text-center" to="/projects">See all projects</Link>
        </section>
    )
}

export default RecentProjects;