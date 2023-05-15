const WorkExperiencePT = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold md:self-start">Experiência</h2>

            <div className='flex flex-col gap-8 w-full'>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827ac] pb-8'>
                    <div className='flex flex-col gap-1 min-w-[300px] text-center lg:text-start'>
                        <h3 className='text-2xl font-semibold'>Desenvolvedor Front End &#40;Junior&#41;</h3>
                        <span className='text-lg font-semibold text-[#111827cc]'>NURV</span>
                        <span className='text-sm text-[#111827cc]'>12/22 - presente</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className='text-xl'>Planejamento e desenvolvimento de plataformas, reuniões com clientes e ajuda na criação do design das páginas.</p>
                        <p className='text-xl'><span className="text-[#bf9f4c] text-3xl">•</span> Tecnologias utilizadas: React.js, CSS &#40;Tailwind&#41;
                            , JavaScript, Node.js, Figma, Postman, Git and GitHub.
                        </p>
                        <p className='text-xl'><span className="text-[#bf9f4c] text-3xl">•</span> Sempre focando: Bom relacionamento com minha equipe
                            , código limpo e de qualidade, desenvolvimento ágil.
                        </p>
                    </div>
                </div>


                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827ac] pb-8'>
                    <div className='flex flex-col gap-1 min-w-[300px] text-center lg:text-start'>
                        <h3 className='text-2xl font-semibold'>Desenvolvedor Front End &#40;Estágio&#41;</h3>
                        <span className='text-lg font-semibold text-[#111827cc]'>NURV</span>
                        <span className='text-sm text-[#111827cc]'>09/22 - 12/22</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className='text-xl'>Ajuda ao time para desenvolver plataformas criando paginas simples, componentes e aplicando designs do figma</p>
                        <p className='text-xl'><span className="text-[#bf9f4c] text-3xl">•</span> Tecnologias utilizadas: React.js, CSS &#40;Tailwind&#41;
                            , JavaScript, Figma.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExperiencePT;