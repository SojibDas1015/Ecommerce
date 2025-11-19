import { useLoaderData } from 'react-router'
import ContactCard from './ContactCard'

export default function Contact() {
    const contact = useLoaderData()
    return (
        <div className='w-10/12 mx-auto max-w-[1100px] py-8'>
            <div className='block lg:flex gap-6'>
                <div className='max-w-91'>
                    <h5 className='text-xl font-bold text-[#3BB77E]'>How can help you ?</h5>
                    <h1 className='text-4xl font-bold my-5'>Let us know how
                        we can help you</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                    <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                </div>
                <div className='grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 items-end mt-5 lg:m-0'>
                    <div>
                        <h5 className='text-xl font-bold'>01. Visit Feedback</h5>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div>
                        <h5 className='text-xl font-bold'>01. Visit Feedback</h5>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div>
                        <h5 className='text-xl font-bold'>01. Visit Feedback</h5>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                    <div>
                        <h5 className='text-xl font-bold'>01. Visit Feedback</h5>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                            leo.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 py-13'>
                {
                    contact.map((data) =>
                        <ContactCard key={data.id} data={data}></ContactCard>
                    )
                }
            </div>
            <div className='block lg:flex justify-between'>
                <div className='w-full lg:w-[60%]'>
                    <h5 className='text-xl font-bold text-[#3BB77E]'>Contact form</h5>
                    <h1 className='text-4xl font-bold my-4'>Drop Us a Line</h1>
                    <p className='text-sm'>Your email address will not be published. Required fields are marked *</p>
                    <form action="" className='grid grid-cols-2 gap-4 py-6'>
                        <input type="text" name="" id="" placeholder='First Name' className='border border-1 rounded-sm p-4.5' />
                        <input type="email" name="" id="" placeholder='Your Email' className='border border-1 rounded-sm p-4.5' />
                        <input type="number" name="" id="" placeholder='Your Phone' className='border border-1 rounded-sm p-4.5' />
                        <input type="text" name="" id="" placeholder='Subject' className='border border-1 rounded-sm p-4.5' />
                        <textarea className='border border-1 rounded-sm p-4.5 col-span-2' name="" id="" cols="30" rows="10"></textarea>
                    </form>
                    <input type="submit" value="Send message" className='border border-1 rounded-sm p-4.5 block bg-[#253D4E] text-white' />
                </div>
                <div className='mt-5 lg:m-0'>
                    <img src="/images/460.png" alt="" />
                </div>
            </div>
            <div className='py-20'> 
                <img src="/public/images/469.png" alt="" />
            </div>
        </div>
    )
}
