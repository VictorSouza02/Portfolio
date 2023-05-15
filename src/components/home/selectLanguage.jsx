import { Link } from "react-router-dom";
import EuaFlag from "../../media/icons/united-states-flag-icon.svg"
import BrazilFlag from "../../media/icons/brazil-flag-icon.svg"

const SelectLanguage = () => {
    return (
        <>
            <div className="flex gap-8">
                <Link to="/">
                    <img className="w-8 md:w-12 aspect-square"
                        src={EuaFlag}
                        alt="United States Flag"
                    />
                </Link>

                <Link to="/pt">
                    <img className="w-8 md:w-12 aspect-square"
                        src={BrazilFlag}
                        alt="Brazil Flag"
                    />
                </Link>
            </div>
        </>
    )
}

export default SelectLanguage;