const Contact = () => {
    return (
        <section>
            <h1 className="text-4xl font-black md:self-start">Contact</h1>

            <h2 className="text-xl font-black md:self-start">Let's work together?</h2>

            <div className='flex flex-col gap-8 w-full'>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827cc] pb-8'>
                    <div className='flex flex-row gap-1 min-w-[300px] justify-center lg:justify-start items-center w-full'>
                        <div className="bg-red-500 p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                        </div>

                        <h3 className='text-2xl font-black'>Email</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a target="_blank" rel="noreferrer"
                            className="text-xl text-center hover:decoration-solid hover:underline hover:decoration-1 hover:decoration-red-500"
                            href="mailto:victorbatistasouza2002@gmail.com">
                            victorbatistasouza2002
                            <br className="contact-hr" />
                            @gmail.com
                        </a>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827cc] pb-8'>
                    <div className='flex flex-row gap-1 min-w-[300px] justify-center lg:justify-start items-center w-full'>
                        <div className="bg-blue-500 p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </div>

                        <h3 className='text-2xl font-black'>LinkedIn</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a target="_blank" rel="noreferrer"
                            className="text-xl text-center hover:decoration-solid hover:underline hover:decoration-1 hover:decoration-[#0a66c2]"
                            href="https://www.linkedin.com/in/victorsouza02">
                            Click here to go to my linkedIn
                        </a>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 items-center border border-x-0 border-t-0 border-[#111827cc] pb-8'>
                    <div className='flex flex-row gap-1 min-w-[300px] justify-center lg:justify-start items-center w-full'>
                        <div className="bg-green-500 p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                        </div>

                        <h3 className='text-2xl font-black'>Whatsapp</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a target="_blank" rel="noreferrer"
                            className="text-xl text-center hover:decoration-solid hover:underline hover:decoration-1 hover:decoration-[#46dc52]"
                            href="https://wa.me/5531992889875">
                            Click here to go to chat with me on whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;