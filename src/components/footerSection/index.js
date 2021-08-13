import React from 'react'
import '../../App.css'
import whatsapp from '../../assets/icon/whatsapp.svg'
import telegram from '../../assets/icon/telegram.svg'
import linkedin from '../../assets/icon/linkedin.svg'

export default function Footer() {
    return (
        <section className="bg-gray-900 h-auto px-5 py-5 md:px-96 md:py-10">
            <div className="flex flex-col sm:items-baseline items-center ">
                <h1 className="text-white text-lg font-bold">Get in touch</h1>
                <span className="text-sm text-white">For business inquiry please send email to <span className="color-primary cursor-pointer">raihan.ardianata@gmail.com</span></span>
                <div className="flex space-x-5 pt-5">
                    <img src={whatsapp} alt="whatsapp" className="w-5 cursor-pointer"/>
                    <img src={telegram} alt="telegram" className="w-5 cursor-pointer"/>
                    <img src={linkedin} alt="linkedin" className="w-5 cursor-pointer"/>
                </div>
            </div>
        </section>
    )
}
