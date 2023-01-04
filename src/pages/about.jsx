import aboutPhoto from '../media/about-picture.jpg'

const About = () => {
    return (
        <section>
            <h1 className="text-4xl font-black md:self-start">About</h1>

            <p className="text-xl">I'm Víctor, a web developer focused on the client side, in other words a front end developer.</p>

            <p className="text-xl">My life as a programmer started in 2019 when I heard about Python. Since then I have fallen more and more in love with this area. I've been doing projects to help with my study, some too ambitious, but I believe that the more difficult the greater the learning.</p>

            <div className='flex gap-8 justify-between'>
                <img className='w-[200px] max-sm:hidden' src={aboutPhoto} alt="Víctor Photo" />

                <p className="text-xl">when I started studying CSS I was completely fascinated, out of curiosity I tried to do things I hadn't even learned yet, one of these examples was my clone of the steam layout. This layout was made completely without using Display: flex or Grid, only with margins, paddings.</p>
            </div>

            <h1 className="text-2xl font-black md:self-start">Work experience</h1>
        </section>
    )
}

export default About;