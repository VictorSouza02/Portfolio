const WorkExperience = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold md:self-start">Work experience</h2>

            <div className='flex flex-col gap-8 w-full'>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827ac] pb-8'>
                    <div className='flex flex-col gap-1 min-w-[300px] text-center lg:text-start'>
                        <h3 className='text-2xl font-semibold'>Front end developer &#40;Junior&#41;</h3>
                        <span className='text-lg font-semibold text-[#111827cc]'>NURV</span>
                        <span className='text-sm text-[#111827cc]'>12/22 - present</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className='text-xl'>Development and planning of platforms, meetings with clients and help in the creation of page design.</p>
                        <p className='text-xl'><span className="text-[#bf9f4c] text-3xl">•</span> Technologies used: React.js, CSS &#40;Tailwind&#41;
                            , JavaScript, Node.js, Figma, Postman, Git and GitHub.
                        </p>
                        <p className='text-xl'><span className="text-[#bf9f4c] text-3xl">•</span> Always focusing: Good relationship with my team
                            , clean and quality code, agile development.
                        </p>
                    </div>
                </div>


                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827ac] pb-8'>
                    <div className='flex flex-col gap-1 min-w-[300px] text-center lg:text-start'>
                        <h3 className='text-2xl font-semibold'>Front end developer &#40;Trainee&#41;</h3>
                        <span className='text-lg font-semibold text-[#111827cc]'>NURV</span>
                        <span className='text-sm text-[#111827cc]'>09/22 - 12/22</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className='text-xl'>Help my team to develop platforms creating simpler pages, creating components and applying figma designs</p>
                        <p className='text-xl'><span className="text-[#bf9f4c] text-3xl">•</span> Technologies used: React.js, CSS &#40;Tailwind&#41;
                            , JavaScript, Figma.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExperience;