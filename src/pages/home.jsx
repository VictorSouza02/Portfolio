import SelectLanguage from "../components/home/selectLanguage";
import Presentation from "../components/home/presentation";
import RecentProjects from "../components/home/recentProjects";

const Home = () => {
    return (
        <>
            <SelectLanguage/>

            <Presentation />

            <RecentProjects />
        </>
    )
}

export default Home;