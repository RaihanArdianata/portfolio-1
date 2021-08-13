import React from 'react';
import '../../App.css';
import download from "../../assets/icon/direct-download.svg"

export default function Hero() {

    return (
        <section className="xl:mx-80 lg:mx-50 sm:mx-20">
            <div className="">
                <p className="font-bold	md:text-4xl text-2xl tracking-widest">Hi, I’m Raihan Ardianata</p>
            </div>
            <div className="mt-10 md:mt-14 sm:mx-100">
                <p className="md:text-2xl text-lg">I'm from Indonesia, and I've been working as a <span className="color-primary">Software Enginer</span> for more than 2 years.</p>
            </div>
            <div className="mt-10 md:mt-14 sm:mx-100">
                <button className="inline-flex justify-between items-center text-white p-2.5 rounded-lg bg-pink-600 font-medium hover:bg-pink-700">
                    <img src={download} className="mr-1" alt="download"/>
                    <span>Download CV</span>
                </button>
            </div>
        </section>
    )
}
