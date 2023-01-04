import aboutPhoto from '../../media/about-picture.jpg'

const AboutText = () => {
return (
        <>
            <p className="text-xl">I'm Víctor, a web developer focused on the client side, in other words a <span className='text-3xl font-black text-[#bf9f4c]'>front end developer</span>.</p>

            <p className="text-xl">My life as a programmer started in 2019 when I heard about Python. Since then I have fallen more and more in love with this area. I've been doing projects to help with my study, some too ambitious, but I believe that the more difficult the greater the learning.</p>

            <div className='flex gap-x-2 gap-y-8 justify-around items-center lg:justify-between w-full flex-wrap'>
                <img className='w-[250px] h-[333px] max-md:hidden' src={aboutPhoto} alt="Víctor Photo" />
                <p className="text-xl md:w-[270px] lg:w-[63%]">when I started studying CSS I was completely fascinated, out of curiosity I tried to do things I hadn't even learned yet, one of these examples was my clone of the <a target="_blank" href="https://victorsouza02.github.io/Steam-Layout/" className='about-underline'>steam layout</a>. This layout was made completely without using Display: flex or Grid, only with margins, paddings, what made it a non-responsive page.</p>
                <p className="text-xl">Can you find me on <a target="_blank" href="https://www.linkedin.com/in/victorsouza02" className='about-underline'>LinkedIn</a>, or you can follow me on <a target="_blank" href="https://www.instagram.com/victorsouza.png/" className='about-underline'>Instagram</a> where I share a little about my personal life. If you want to see my projects in more detail, follow me on <a target="_blank" href="https://github.com/VictorSouza02" className='about-underline'>GitHub</a>!</p>
            </div>
        </>
    )
}

export default AboutText;