import {MessageCircleCode,Facebook,Instagram, Twitter, Youtube} from 'lucide-react'

export default function Footer(){
    return(
        <footer className="bg-gray-950 w-screen px-10 bottom-0 mt-7">
            <div className="main flex justify-between items-center text-white h-2/3 border-b-1 border-gray-600 pt-20 pb-30" >
                <div className="logo h-20">
                    <img src="logoWhite.svg" className='h-15' alt="" />
                </div> 
                <div className="links flex items-center justify-between gap-8 font-medium">
                    <div className="link">
                        Terms and condition
                    </div>
                    <div className="link">
                        Privacy policy
                    </div>
                    <div className="link">
                        Contact us
                    </div>
                    <div className="link">
                        List your event
                    </div>
                </div>
                <div className="scanner h-20 flex flex-col items-center gap-3">
                    <img src="scanner.svg" alt="" className='h-30 rounded-md' />
                    <p>Scan to download the app</p>
                </div>
            </div>  
            <div className="social h-1/3 flex justify-between py-10 ">
                <div className="statement text-sm text-gray-500 ">
                    <p>By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.</p>
                </div>
                <div className="media flex justify-between gap-2 font-light text-white">
                    <MessageCircleCode />
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>
            </div>
        </footer>
    )
}