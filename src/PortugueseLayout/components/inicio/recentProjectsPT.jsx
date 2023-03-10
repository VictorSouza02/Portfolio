import { Link } from "react-router-dom";

const recentProjectsPT = () => {
    return (
        <section>
            <h2 className="text-3xl text-center sm:text-start md:self-start">Projetos Recentes</h2>

            <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 w-full">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://victorsouza02.github.io/Beated-Games/"
                    id='projectBeatedGames'
                    className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg 
                rounded-2xl flex flex-col justify-end overflow-hidden"
                >
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 
                    flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Beated Games</h3>
                        <span className='text-sm text-[#111827cc]'>08/01/23</span>
                    </div>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://victorsouza02.github.io/Pokedex-com-API/"
                    id='projectPokedex'
                    className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg 
                rounded-2xl flex flex-col justify-end overflow-hidden"
                >
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 
                    flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Pokedex</h3>
                        <span className='text-sm text-[#111827cc]'>20/01/23</span>
                    </div>
                </a>

                <a

                    id='project-coming'
                    className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl flex flex-col justify-end overflow-hidden">
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Em breve</h3>
                        <span className='text-sm text-[#111827cc]'>xx/xx/xx</span>
                    </div>
                </a>
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