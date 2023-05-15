import aboutPhoto from '../../media/about-picture.jpg'

const AboutText = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold md:self-start">About</h1>

            <p className="text-xl">
                I'm Víctor, a web developer focused on the client side, in other words a
                <span className='text-3xl font-semibold text-[#bf9f4c]'> front end developer</span>.
            </p>

            <p className="text-xl">My life as a programmer started in 2019 when I heard about Python.
                Since then I have fallen more and more in love with this area. I've been doing projects to help with my study,
                some too ambitious,
                but I believe that the more difficult the greater the learning.
            </p>

            <div className='flex flex-row justify-between gap-8 flex-wrap w-full'>
                <img className="w-[40%] object-contain hidden md:block" src={aboutPhoto} alt="Víctor" />

                <div className='flex flex-col gap-8 md:w-[53%]'>
                    <p className="text-xl">when I started studying CSS I was completely fascinated, out of curiosity I
                        tried to do things I hadn't even learned yet, one of these examples was my clone of the
                        <span> <a target="_blank" rel="noreferrer" href="https://victorsouza02.github.io/Steam-Layout/" className='about-underline'>steam layout</a></span>
                        . This layout was made completely without using Display: flex or Grid, only with margins, paddings, what made it a non-responsive page.
                    </p>
                </div>

                <p className="text-xl">Can you find me on
                    <span> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victorsouza02" className='about-underline'>LinkedIn</a></span>
                    , or you can follow me on
                    <span> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/victorsouza.png/" className='about-underline'>
                        Instagram</a>
                    </span> where I share a little about my personal life. If you want to see my projects in more detail, follow me on
                    <span> <a target="_blank" rel="noreferrer" href="https://github.com/VictorSouza02" className='about-underline'>GitHub</a></span>!
                </p>
            </div>
        </>
    )
}

export default AboutText;