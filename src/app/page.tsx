import { NavBar } from "./navbar";
import { Notification } from "./notificaiton";

export default function MainPage() {
    return (
        <div>
            <NavBar />
            <div className='relative px-6 pt-14 lg:px-8 mx-auto max-w-2xl py-32'>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="text-center scroll pt-52">
                    <Notification text="Anncouning the new line of Affordable PC's under $500" />
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to the Nimays Hardware Shoppe</h1>
                    <p className="text-xl pt-8">At Nimays Hardware Shoppe, we offer many PC Builds, and services to help create a healthier computing life</p>
                </div>
                <div className="text-center scroll pt-52">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl inline">PC Builds</h1>
                    <p className="text-xl pt-8">Our Pre-Puilt PCs provide great value, that have similar price to custom website</p>
                    <div className="mt-10">
                        <a
                            href="/pcbuilds"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold
                         text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-28"
                        >
                            Get started
                        </a>
                    </div>
                </div>

                <div className="text-center scroll pt-52">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl inline">Services</h1>
                    <p className="text-xl pt-8">Our Serivces help you keep your PC healthy, and free of Viruses</p>
                    <div className="mt-10">
                        <a
                            href="/services"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold
                         text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-28"
                        >
                            Get started
                        </a>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}