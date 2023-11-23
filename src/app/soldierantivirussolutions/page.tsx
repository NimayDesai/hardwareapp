import Image from 'next/image'
import { NavBar } from '../navbar'
import { Notification } from '../notificaiton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faDollarSign, faGear, faGlobe, faShield, faShieldHalved, faUser } from '@fortawesome/free-solid-svg-icons'

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]
export default function Home() {
    return (
        <div>
            <NavBar />

            <div className='relative px-6 pt-14 lg:px-8'>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >

                </div>
                <div className="mx-auto max-w-4xl">
                    <Notification text="Anncouning The Soilder Antivirus that helps protect your PC " />
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            An Antivirus that helps secure your PC, with mutliple plans for different people
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            The Sodlier Antivirus is a top rated antivirus solution with world-class protection
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-20">
                            Awards
                        </h1>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
                            AV-Test Approvedd AntiVirus
                        </h1>
                        <div className='align-center mr-auto ml-auto mt-10'>
                            <a href="/soldierantivirussolutions">
                                <Image src='/awards.png.png' alt="Antivirus logo" className='block ml-auto mr-auto w-1/2' width="320" height="320" />
                            </a>
                        </div>
                        <h1 className='text-6xl font-bold tracking-tight text-gray-900 mt-10'>Our Plans</h1>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Plans for all price points</h2>
                                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Soldier AntiVirus offers, anti-virus solutions for all price points, and delivers excellent value</p>
                                </div>
                                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                        <h3 className="mb-4 text-2xl font-semibold">Sodier Basic</h3>
                                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for people who only need basic protection</p>
                                        <div className="flex justify-center items-baseline my-8">
                                            <span className="mr-2 text-5xl font-extrabold">$50</span>
                                            <span className="text-gray-500 dark:text-gray-400">/first year</span>
                                        </div>
                                        <ul role="list" className="mb-8 space-y-4 text-left">
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Basic Anti-virus Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Mallicious Link Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Number of Scans Per year: <span className="font-semibold">200</span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Network Protection <span className="font-semibold"></span></span>
                                            </li>
                                        </ul>
                                        <div>
                                            <a href="#" className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">Buy now</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                        <h3 className="mb-4 text-2xl font-semibold">Sodier Pro</h3>
                                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for people need to protect them from advanced threats, and secure their online life</p>
                                        <div className="flex justify-center items-baseline my-8">
                                            <span className="mr-2 text-5xl font-extrabold">$100</span>
                                            <span className="text-gray-500 dark:text-gray-400">/first year</span>
                                        </div>
                                        <ul role="list" className="mb-8 space-y-4 text-left">
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Basic Anti-virus Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Advanced File Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Spam Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Account Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Mallicious Link Protection</span>
                                            </li>

                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Number of Scans Per year: <span className="font-semibold">Unlimited</span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Premium support: <span className="font-semibold">12 months</span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Network Protection <span className="font-semibold"></span></span>
                                            </li>
                                        </ul>
                                        <div>
                                            <a href="#" className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">Buy now</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                        <h3 className="mb-4 text-2xl font-semibold">Sodier Max</h3>
                                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for people who want advanced security, and privacy in their online life</p>
                                        <div className="flex justify-center items-baseline my-8">
                                            <span className="mr-2 text-5xl font-extrabold">$150</span>
                                            <span className="text-gray-500 dark:text-gray-400">/first year</span>
                                        </div>
                                        <ul role="list" className="mb-8 space-y-4 text-left">
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Basic Anti-virus Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Advanced File Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Spam Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Account Protection</span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Number of Scans Per year: <span className="font-semibold">Unlimited</span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Premium support: <span className="font-semibold">24 months</span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Network Protection <span className="font-semibold"></span></span>
                                            </li>
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                <span>Free VPN <span className="font-semibold"></span></span>
                                            </li>
                                        </ul>
                                        <div>
                                            <a href="#" className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div>
                            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-20'>
                                Why you should trust Soldier instead of other Antivirus Solutions
                            </h1>
                        </div>
                        <div className='mt-20'>
                            <div id="detailed-pricing" className="w-full overflow-x-auto mt-20">
                                <div className="overflow-hidden min-w-max">
                                    <div className="grid grid-cols-4 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                        <div className="flex items-center">Features</div>
                                        <div>Soldier Max Antivirus</div>
                                        <div>McAfee Total Protection 2023</div>
                                        <div>Norton 360 </div>
                                    </div>
                                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                        <div className="text-gray-500 dark:text-gray-400">Advanced Threat Protection(<a href="#" className="text-blue-600 hover:underline">view all</a>)</div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                        <div className="text-gray-500 dark:text-gray-400">Protection Against Mallicious links (<a href="#" className="text-blue-600 hover:underline">view demo</a>)</div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                        <div className="text-gray-500 dark:text-gray-400">Hacked Account Alerts</div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                        <div className="text-gray-500 dark:text-gray-400">Included VPN to surf the web anynomously</div>
                                        <div>
                                            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                        <div className="text-gray-500 dark:text-gray-400"></div>
                                        <div>
                                            <a href="#" className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">Buy now</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                                <div className="max-w-screen-md mb-8 lg:mb-16">
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Sodier Antivirus?</h2>
                                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Sodlier Antivirus offers many benefits that other companies may not offer</p>
                                </div>
                                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                                    <div>
                                        <div className="flex mr-auto ml-auto justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <FontAwesomeIcon icon={faBug} size="lg" className='ml-auto mr-auto' />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white">Remove Viruses with a click</h3>
                                        <p className="text-gray-500 dark:text-gray-400">With Sodlier Antivirus, you can instantly remove dangerous files with a click with our advanced Scanner</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 mr-auto ml-auto lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <FontAwesomeIcon icon={faShieldHalved} />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white">Protect your PC</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Experience security from people trying to steal your data, and money</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 mr-auto ml-auto lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 ml-auto mr-auto lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <FontAwesomeIcon icon={faDollarSign} />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 ml-auto mr-auto lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 mr-auto ml-auto rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <FontAwesomeIcon icon={faGear} />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white">Operations</h3>
                                        <p className="text-gray-500 dark:text-gray-400">Keep your companys lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                </div>
            </div>
        </div >
    )
}
