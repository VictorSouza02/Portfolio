import { Link } from "react-router-dom";

const SelectLanguage = () => {
    return (
        <>
            <div className="flex gap-8">
                <Link to="/">
                    <img className="w-8 md:w-12 aspect-square"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.svg"
                        alt="United States icon"
                    />
                </Link>

                <Link to="/pt">
                    <img className="w-8 md:w-12 aspect-square"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/brazil-flag-icon.svg"
                        alt="Brazil icon"
                    />
                </Link>
            </div>
        </>
    )
}

export default SelectLanguage;