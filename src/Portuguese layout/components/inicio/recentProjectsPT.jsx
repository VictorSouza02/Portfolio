import { Link } from "react-router-dom";

const recentProjectsPT = () => {
    return (
        <section>
            <h2 className="text-3xl text-center sm:text-start md:self-start">Projetos Recentes</h2>

            <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 w-full">
                <Link
                   to="/pt/"
                    id='project-coming'
                    className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl flex flex-col justify-end overflow-hidden">
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.6)] p-2 flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Em breve</h3>
                        <span className='text-sm text-[#111827cc]'>xx/xx/xx</span>
                    </div>
                </Link>

                <Link
                   to="/pt/"
                    id='project-coming'
                    className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl flex flex-col justify-end overflow-hidden">
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.6)] p-2 flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Em breve</h3>
                        <span className='text-sm text-[#111827cc]'>xx/xx/xx</span>
                    </div>
                </Link>

                <Link
                   to="/pt/"
                    id='project-coming'
                    className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl flex flex-col justify-end overflow-hidden">
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.6)] p-2 flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Em breve</h3>
                        <span className='text-sm text-[#111827cc]'>xx/xx/xx</span>
                    </div>
                </Link>
            </div>

            <Link
                className="md:self-start py-1 px-2 bg-[#5b7493] text-white button-transition hover:bg-inherit 
            hover:text-[#5b7493] border hover:border-[#5b7493] rounded-2xl text-center"
                to="/pt/projetos">
                Todos projetos
            </Link>
        </section>
    )
}

export default recentProjectsPT;