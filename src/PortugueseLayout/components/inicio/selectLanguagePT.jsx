import { Link } from "react-router-dom";
import EuaFlag from "../../../media/icons/united-states-flag-icon.svg"
import BrazilFlag from "../../../media/icons/brazil-flag-icon.svg"

const SelectLanguagePT = () => {
    return (
        <>
            <div className="flex gap-8">
                <Link to="/">
                    <img className="w-8 md:w-12 aspect-square"
                        src={EuaFlag}
                        alt="Bandeira Estados Unidos"
                    />
                </Link>

                <Link to="/pt">
                    <img className="w-8 md:w-12 aspect-square"
                        src={BrazilFlag}
                        alt="Bandeira Brasil"
                    />
                </Link>
            </div>
        </>
    )
}

export default SelectLanguagePT;