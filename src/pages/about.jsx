import AboutText from '../components/about/aboutText';
import aboutPhoto from '../media/about-picture.jpg'

const About = () => {
    return (
        <section>
            <h1 className="text-4xl font-black md:self-start">About</h1>

            <AboutText/>

            <h2 className="text-2xl font-black md:self-start">Work experience</h2>
        </section>
    )
}

export default About;