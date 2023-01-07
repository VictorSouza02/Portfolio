import PresentationPT from "../components/inicio/presentationPT";
import RecentProjectsPT from "../components/inicio/recentProjectsPT";
import SelectLanguagePT from "../components/inicio/selectLanguagePT";

const Inicio = () => {
    return (
        <>
            <SelectLanguagePT />

            <PresentationPT />

            <RecentProjectsPT />
        </>
    )
}

export default Inicio;