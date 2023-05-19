import { Link } from "react-router-dom";

const RecentProjects = () => {
    return (
        <section>
            <h2 className="text-3xl text-center sm:text-start md:self-start">Recent Projects</h2>

            <div className="flex flex-row-reverse justify-end gap-8 w-full">
                <a
                    rel="noreferrer"
                    href="/"
                    id='project-coming'
                    className="
                        bg-white project-card-container w-full max-w-[200px] aspect-[1/1.3] shadow-lg 
                        rounded-2xl flex flex-col justify-end overflow-hidden
                    "
                >
                    <div
                        className="
                            order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 
                            flex-col items-center 
                            md:items-start
                        "
                    >
                        <h3 className='text-base font-semibold'>Coming soon</h3>
                        <span className='text-sm text-[#111827cc]'>00/00/00</span>
                    </div>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://victorsouza02.github.io/Bhaskara-React/#/"
                    id='projectBhaskara'
                    aria-label="See project Calculator"
                    className="
                        bg-white project-card-container w-full max-w-[200px] aspect-[1/1.3] shadow-lg 
                        rounded-2xl flex flex-col justify-end overflow-hidden
                    "
                >
                    <div
                        className="
                        order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 
                        flex-col items-center 
                        md:items-start
                    "
                    >
                        <h3 className='text-base font-semibold capitalize'>Calculator²</h3>
                        <span className='text-sm text-[#111827cc]'>03/24/23</span>
                    </div>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://franca-vet-vercel.vercel.app/"
                    id='projectFrancaVet'
                    aria-label="See Project França Vet"
                    className="
                        bg-white project-card-container w-full max-w-[200px] aspect-[1/1.3] shadow-lg 
                        rounded-2xl flex flex-col justify-end overflow-hidden
                    "
                >
                    <div
                        className="
                            order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 
                            flex-col items-center 
                            md:items-start
                        "
                    >
                        <h3 className='text-base font-semibold'>França Vet</h3>
                        <span className='text-sm text-[#111827cc]'>05/19/23</span>
                    </div>
                </a>
            </div>

            <Link
                className="
                    py-1 px-2 bg-[#5b7493] text-white button-transition border rounded-2xl text-center
                    hover:text-[#5b7493] hover:border-[#5b7493] hover:bg-inherit 
                    md:self-start
                "
                to="/projects">
                See all projects
            </Link>
        </section>
    )
}

export default RecentProjects;