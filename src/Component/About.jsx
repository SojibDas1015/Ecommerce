import React from 'react'
import { useLoaderData } from 'react-router'
import AboutCard from './AboutCard'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function About() {
    const about = useLoaderData()
    return (
        <div className='w-10/12 mx-auto max-w-[1100px] py-8'>
            <div className='block lg:flex gap-8 items-center'>
                <div className='w-full lg:w-[50%]'>
                    <img className='w-full' src="/images/about_left.png" alt="" />
                </div>
                <div className='w-full lg:w-[50%]'>
                    <h2 className='text-4xl font-bold mb-8'>Welcome to Nest</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>
                    <p className='mt-8 text-sm'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                        interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                        orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>
                    <div className='flex mt-8 gap-5'>
                        <div>
                            <img className='w-full' src="/images/about-1.png" alt="" />
                        </div>
                        <div>
                            <img className='w-full' src="/images/about-2.png" alt="" />
                        </div>
                        <div>
                            <img className='w-full' src="/images/about-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-3xl font-bold py-13'>What We Provide?</h2>
            {/* provide card start */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    about.map(data =>
                        <AboutCard key={data.id} data={data}></AboutCard>
                    )
                }
            </div>
            {/* provide card end */}


            {/* solution start */}
            <div className='block lg:flex gap-6 items-center py-15'>
                <div className='w-full lg:w-[50%]'>
                    <img className='w-full' src="/images/about-5.png" alt="" />
                </div>
                <div className='w-full lg:w-[50%] py-8'>
                    <p className='text-xl font-bold text-[#B6B6B6]'>Our performance</p>
                    <h2 className='text-4xl font-bold mt-3 mb-8'>Your Partner for e-
                        commerce grocery
                        solution</h2>
                    <p className='text-sm mb-7'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto</p>
                    <p className='text-sm'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div>
                    <h4 className='text-3xl font-bold'>Who we are</h4>
                    <p className='text-sm font-normal'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.</p>
                </div>
                <div>
                    <h4 className='text-3xl font-bold'>Our history</h4>
                    <p className='text-sm font-normal'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.</p>
                </div>
                <div>
                    <h4 className='text-3xl font-bold'>Our mission</h4>
                    <p className='text-sm font-normal'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                        mattis enim ut tellus eros donec ac odio orci ultrices in.
                        ellus eros donec ac odio orci ultrices in.</p>
                </div>
            </div>
            {/* solution end */}
            <h2 className='text-center text-3xl font-bold py-13'>Our Team</h2>

            {/* team start */}
            <div className='block lg:flex gap-5 mb-50'>
                <div className='w-full lg:w-1/3'>
                    <p className='text-sm font-bold text-[#3BB77E]'>Our Team</p>
                    <h1 className='text-4xl font-bold mt-3 mb-8'>Meet Our Expert
                        Team</h1>
                    <p className='text-sm'>Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.</p>
                    <p className='text-sm my-6'>Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.</p>
                    <button className='px-6 py-3 bg-[#3BB77E] text-white rounded-sm text-sm font-bold'>View All Members</button>
                </div>
                <div className='relative mt-8 mb-30 lg:m-0'>
                    <img className='w-full' src="/images/Main.png" alt="" />
                    <div className='text-center w-[287px] px-20 py-6 shadow-xl rounded-md absolute left-1/2 -bottom-15 -translate-x-1/2 bg-white'>
                        <h5 className='text-md font-bold'>H. Merinda</h5>
                        <p className='text-sm text-[#7E7E7E]'>CEO & Co-Founder</p>
                        <div className='flex justify-center gap-2 mt-2 text-[#3BB77E]'>
                            <FaFacebookF />
                            <FaTwitter />
                            <AiFillInstagram />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-full ' src="/images/Main-1.png" alt="" />
                    <div className='text-center w-[287px] px-20 py-6 shadow-xl rounded-md absolute left-1/2 -bottom-15 -translate-x-1/2 bg-white'>
                        <h5 className='text-md font-bold'>Dilan Specter</h5>
                        <p className='text-sm text-[#7E7E7E]'>Head Engineer</p>
                        <div className='flex justify-center gap-2 mt-2 text-[#3BB77E]'>
                            <FaFacebookF />
                            <FaTwitter />
                            <AiFillInstagram />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
            {/* team end */}
            
            {/* banner start */}
            <div className='mb-30'>
                <img src="/images/about_bottom.png" alt="" />
            </div>
            {/* banner end */}
        </div>
    )
}
