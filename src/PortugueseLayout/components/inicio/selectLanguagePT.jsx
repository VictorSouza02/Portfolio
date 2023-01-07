import { Link } from "react-router-dom";

const SelectLanguagePT = () => {
    return (
        <>
            <div className="flex gap-8">
                <Link to="/">
                    <img className="w-8 md:w-12 aspect-square"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.svg"
                        alt="Estados Unidos icone"
                    />
                </Link>

                <Link to="/pt">
                    <img className="w-8 md:w-12 aspect-square"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/brazil-flag-icon.svg"
                        alt="Brasil icone"
                    />
                </Link>
            </div>
        </>
    )
}

export default SelectLanguagePT;