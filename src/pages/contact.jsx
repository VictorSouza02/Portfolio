const Contact = () => {
    return (
        <section>
            <h1 className="text-4xl font-black md:self-start">Contact</h1>

            <h2 className="text-xl font-black md:self-start w-full">Let's work together?</h2>

            <div className='flex flex-col gap-8 w-full'>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827cc] pb-8'>
                    <div className='flex flex-row gap-1 min-w-[300px] justify-center lg:justify-start items-center w-full'>
                        <img className="w-12 md:w-12 aspect-square" src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-square-icon.svg" alt="Email icon" />

                        <h3 className='text-2xl font-black'>Email</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a className="text-xl text-center hover:decoration-solid hover:underline hover:decoration-1 hover:decoration-black" href="mailto:victorbatistasouza2002@gmail.com">victorbatistasouza2002<br className="contact-hr"/>@gmail.com</a>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827cc] pb-8'>
                    <div className='flex flex-row gap-1 min-w-[300px] justify-center lg:justify-start items-center w-full'>
                        <img className="w-12 md:w-12 aspect-square" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.svg" alt="LinkedIn icon" />

                        <h3 className='text-2xl font-black'>LinkedIn</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a className="text-xl text-center hover:decoration-solid hover:underline hover:decoration-1 hover:decoration-[#0a66c2]" href="https://www.linkedin.com/in/victorsouza02">Click here to go to my linkedIn</a>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827cc] pb-8'>
                    <div className='flex flex-row gap-1 min-w-[300px] justify-center lg:justify-start items-center w-full'>
                        <img className="w-12 md:w-12 aspect-square" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/wa-whatsapp-icon.svg" alt="Whatsapp icon" />

                        <h3 className='text-2xl font-black'>Whatsapp</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a className="text-xl text-center hover:decoration-solid hover:underline hover:decoration-1 hover:decoration-[#46dc52]" href="https://www.linkedin.com/in/victorsouza02">Click here to go to chat with me on whatsapp</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;