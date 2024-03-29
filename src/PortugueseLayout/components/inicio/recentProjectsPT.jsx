import { Link } from "react-router-dom";

const recentProjectsPT = () => {
    return (
        <section>
            <h2 className="text-3xl text-center sm:text-start md:self-start">Projetos Recentes</h2>

            <div className="flex flex-row-reverse justify-end gap-8 w-full">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://victorsouza02.github.io/Bhaskara-React/#/"
                    id='projectBhaskara'
                    aria-label="Ver projeto Calculadora"
                    className="
                        bg-white project-card-container w-full max-w-[200px] aspect-[1/1.3] shadow-lg 
                        rounded-2xl flex flex-col justify-end overflow-hidden
                    "
                >
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.8)] p-2 
                    flex-col items-center md:items-start">
                        <h3 className='text-base font-semibold'>Calculatora²</h3>
                        <span className='text-sm text-[#111827cc]'>24/03/23</span>
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
                        <span className='text-sm text-[#111827cc]'>19/05/23</span>
                    </div>
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maquinas-bh.vercel.app/"
                    id='projectMaquinasBh'
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
                        <h3 className='text-base font-semibold'>Máquinas BH</h3>
                        <span className='text-sm text-[#111827cc]'>12/06/23</span>
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