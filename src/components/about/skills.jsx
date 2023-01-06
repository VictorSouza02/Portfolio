import 'tw-elements';

const Skills = () => {
    return (
        <>
            <h2 className="text-2xl font-black md:self-start">Skills</h2>

            <div className='flex flex-row justify-center flex-wrap gap-8 w-full'>
                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="HTML5" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.svg" alt="HTML 5 icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="CSS3" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.svg" alt="CSS 3 icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="JavaScript" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.svg" alt="JavaScript icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="React" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.svg" alt="React icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="Tailwind" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.svg" alt="Tailwind icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="Git" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/git-icon.svg" alt="Git icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="GitHub" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg" alt="GitHub icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="Figma" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/figma-icon.svg" alt="Figma icon" />

                <img className="w-12 md:w-20 aspect-square cursor-help" data-bs-toggle="tooltip" title="Postman" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.svg" alt="Postman icon" />
            </div>

        </>
    )
}

export default Skills;