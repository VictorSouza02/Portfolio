import AboutText from '../components/about/aboutText';
import WorkExperience from '../components/about/workExperience';
import Skills from '../components/about/skills';

const About = () => {
    return (
        <section>
            <AboutText />

            <Skills/>

            <WorkExperience/>
        </section>
    )
}

export default About;