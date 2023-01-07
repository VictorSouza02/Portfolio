import 'tw-elements';

const Projetos = () => {

    return (
        <section>
            <div className='flex md:self-start items-center gap-2'>
                <h1 className="text-4xl font-black">Projetos</h1>

                <img className='hidden lg:block w-6 aspect-square cursor-help'
                    data-bs-toggle="tooltip" title="Passe o mouse sobre um projeto para ver a descrição"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/information-mark-circle-outline-icon.svg"
                    alt="Info tooltip" />
            </div>


            <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 lg:grid-cols-4 w-full">
                <a id='project-coming' className="bg-white project-card-container w-[100%] aspect-[1/1.3] shadow-lg 
                rounded-2xl flex flex-col justify-end overflow-hidden">
                    <div className="order-2 project-description w-full bg-[rgba(177,177,177,0.6)] p-2 flex-col items-center md:items-start">
                        <h3 className='text-base font-black'>Em breve</h3>
                        <span className='text-sm text-[#111827cc]'>xx/xx/xx</span>
                    </div>
                </a>
            </div>

            <span>
                <a target="_blank" rel="noreferrer" href="https://github.com/VictorSouza02?tab=repositories"
                    className="py-1 px-2 bg-[#111827] text-white button-transition hover:bg-inherit 
                    hover:text-[#111827] border hover:border-[#111827] rounded-2xl text-center">
                    Repositórios no GitHub
                </a>
            </span>
        </section>
    )
}

export default Projetos;