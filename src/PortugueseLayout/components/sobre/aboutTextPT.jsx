import { Link } from 'react-router-dom';
import aboutPhoto from '../../../media/about-picture.jpg'

const AboutTextPT = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold md:self-start">Sobre</h1>

            <p className="text-xl">
                Olá! Sou Víctor Souza, um <b className='text-[#bf9f4c]'>desenvolvedor front end</b>.
                Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e expandir meu conhecimento.
            </p>

            <p className="text-xl">
                Minha vida como programador começou em 2019 quando ouvi falar sobre Python.
                Desde então tenho me apaixonado cada vez mais por essa área. Tenho feito projetos para ajudar no meu
                estudo, alguns ambiciosos demais, mas acredito que quanto mais difícil maior o aprendizado.
            </p>

            <div className='flex flex-row justify-between gap-8 flex-wrap w-full'>
                <img className="w-[40%] object-contain hidden md:block" src={aboutPhoto} alt="Víctor" />

                <div className='flex flex-col gap-8 md:w-[53%]'>
                    <p className="text-xl">Quando comecei a estudar CSS fiquei completamente fascinado, por
                        curiosidade tentei fazer coisas que ainda nem havia aprendido, um desses exemplos foi meu clone do
                        <span> <a target="_blank" rel="noreferrer"
                            href="https://victorsouza02.github.io/Steam-Layout/"
                            className='about-underline'>Layout Steam
                        </a>
                        </span>
                        . Este layout foi feito totalmente sem usar Display: flex ou Grid, apenas com margins, paddings,
                        tornando o projeto nada responsivo.
                    </p>

                    <p className="text-xl">
                        Sou uma pessoa curiosa que gosta de enfrentar problemas técnicos e encontrar soluções inovadoras.
                        Eu tenho um olhar atento para detalhes, garantindo a qualidade do código e otimização de desempenho.
                        Além disso, estou sempre disposto a aprender com meus colegas e compartilhar meu
                        conhecimento com a comunidade de desenvolvedores.
                    </p>
                </div>

                <p className="text-xl">
                    Estou procurando oportunidades emocionantes e desafiadoras para aplicar
                    minhas habilidades e contribuir para projetos que tenham um impacto positivo.
                    Se você está procurando um desenvolvedor front-end dedicado,
                    motivado e apaixonado pelo que faz, eu estarei feliz em fazer parte de sua equipe!
                    Sinta-se à vontade para entrar em
                    <Link
                        to='/pt/contato'
                        className='ml-1 about-underline'
                    >
                        contato
                    </Link>
                </p>

                <p className="text-xl">
                    Você pode me encontar no
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

export default AboutTextPT;