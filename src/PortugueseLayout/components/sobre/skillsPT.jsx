import 'tw-elements';

const SkillsPT = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold md:self-start">Habilidades</h2>

            <div className='flex flex-row justify-center flex-wrap gap-8 w-full'>
                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="HTML5"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="HTML5 icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="CSS3"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="CSS3 icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="JavaScript"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="React"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="React icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="React"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="Next.Js icone" />

                <img className="w-20 md:w-32 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="Tailwind"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                    alt="Tailwind icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="Git"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                    alt="Git icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="GitHub"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="GitHub icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="Figma"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma icone" />

                <img className="w-12 md:w-20 aspect-square cursor-help"
                    data-bs-toggle="tooltip" title="Postman"
                    src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.svg"
                    alt="Postman icone" />
            </div>

        </>
    )
}

export default SkillsPT;