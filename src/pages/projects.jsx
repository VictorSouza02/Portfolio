import 'tw-elements';

const Projects = () => {

    return (
        <section>
            <div className='flex md:self-start items-center gap-2'>
                <h1 className="text-4xl font-semibold">Projects</h1>

                <div
                    className='hidden lg:block aspect-square cursor-help mt-2'
                    data-bs-toggle="tooltip"
                    title="Mouse over a project to see the description"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                </div>
            </div>


            <div className="flex flex-row-reverse items-center justify-center flex-wrap-reverse gap-8 md:gap-6 w-full">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://victorsouza02.github.io/Bhaskara-React/#/"
                    id='projectBhaskara'
                    aria-label="See Project Calculator"
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
                        <h3 className='text-base font-semibold'>Calculator²</h3>
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

            <span>
                <a target="_blank" rel="noreferrer" href="https://github.com/VictorSouza02?tab=repositories"
                    className="py-1 px-2 bg-[#111827] text-white button-transition hover:bg-inherit 
                    hover:text-[#111827] border hover:border-[#111827] rounded-2xl text-center">
                    GitHub Repositories
                </a>
            </span>
        </section>
    )
}

export default Projects;