import aboutPhoto from '../../../media/about-picture.jpg'

const AboutText = () => {
    return (
        <>
            <h1 className="text-4xl font-black md:self-start">Sobre</h1>

            <p className="text-xl">
                Eu sou Víctor, um desenvolvedor web focado no client side, em outras palavras um
                <span className='text-3xl font-black text-[#bf9f4c]'> desenvolvedor front end</span>.
            </p>

            <p className="text-xl">Minha vida como programador começou em 2019 quando ouvi falar sobre Python
                . Desde então tenho me apaixonado cada vez mais por essa área. Tenho feito projetos para ajudar no meu
                estudo, alguns ambiciosos demais, mas acredito que quanto mais difícil maior o aprendizado.
            </p>

            <div className='flex flex-row justify-between gap-8 flex-wrap w-full'>
                <img className="w-[40%] object-contain hidden md:block" src={aboutPhoto} alt="Víctor" />

                <div className='flex flex-col gap-8 md:w-[53%]'>
                    <p className="text-xl">quando comecei a estudar CSS fiquei completamente fascinado, por
                        curiosidade tentei fazer coisas que ainda nem havia aprendido, um desses exemplos foi meu clone do
                        <span> <a target="_blank" rel="noreferrer"
                            href="https://victorsouza02.github.io/Steam-Layout/"
                            className='about-underline'>Layout Steam
                        </a>
                        </span>
                        . Este layout foi feito totalmente sem usar Display: flex ou Grid, apenas com margins, paddings, 
                        tornando o projeto nada responsivo.
                    </p>
                </div>

                <p className="text-xl">Você pode me encontar no
                    <span> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victorsouza02" className='about-underline'>LinkedIn</a></span>
                    , ou pode me seguir no
                    <span> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/victorsouza.png/" className='about-underline'>
                        Instagram</a>
                    </span> onde eu publico sobre minha vida pessoal. Se você deseja ver meus projetos com mais detalhes, me siga no
                    <span> <a target="_blank" rel="noreferrer" href="https://github.com/VictorSouza02" className='about-underline'>GitHub</a></span>!
                </p>
            </div>
        </>
    )
}

export default AboutText;