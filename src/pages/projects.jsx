import Header from "../components/header";

const Projects = () => {
    return (
        <div className="w-[70%] mx-auto">
            <Header />

            <main className="w-full flex flex-col items-center mb-8">
                <section className="w-full flex flex-col items-center gap-8 max-w-[900px]">
                    <h1 className="text-4xl md:self-start">Projects</h1>

                    <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 lg:grid-cols-4 w-full">
                        <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Projects;