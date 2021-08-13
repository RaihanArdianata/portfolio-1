import React from "react";
import "../../App.css";
import email from "../../assets/icon/email.svg"

export default function Content() {
  return (
    <section className="xl:mx-80 lg:mx-50 sm:mx-20">
      <div className="flex items-center">
        <div className="line" />
        <p className="px-2.5 md:text-1xl text-lg color-primary font-bold">
          PORTFOLIO
        </p>
        <div className="line" />
      </div>
      <div className="flex flex-wrap -m-1 md:-m-2 mt-5 md:mt-10">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              crossOrigin="anonymous"
              decoding="auto"
              src="https://instagram.fcgk9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/234898234_2881274002135025_3922711549065410368_n.jpg?_nc_ht=instagram.fcgk9-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=gdfqGSnNyvgAX-4R4qC&edm=AP_V10EBAAAA&ccb=7-4&oh=9a13d1e1978288671c92133adba5321f&oe=611D89EE&_nc_sid=4f375e"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              crossOrigin="anonymous"
              decoding="auto"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://instagram.fcgk9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/234898234_2881274002135025_3922711549065410368_n.jpg?_nc_ht=instagram.fcgk9-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=gdfqGSnNyvgAX-4R4qC&edm=AP_V10EBAAAA&ccb=7-4&oh=9a13d1e1978288671c92133adba5321f&oe=611D89EE&_nc_sid=4f375e"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              crossOrigin="anonymous"
              decoding="auto"
              src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/229297156_214780430570658_9065173571874723514_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=j2npDCDLUeQAX_IMZjr&edm=AP_V10EBAAAA&ccb=7-4&oh=d4c288c9978ec3b357b8b63c1d002ef4&oe=611E529E&_nc_sid=4f375e"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://dummyimage.com/601x361/F3F4F7/8693ac"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://dummyimage.com/502x302/F3F4F7/8693ac"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full rounded-lg"
              src="https://dummyimage.com/503x303/F3F4F7/8693ac"
            />
          </div>
        </div>
      </div>
      <div className="h-20 w-12/12 bg-pink bg-gradient-pink mt-10 p-5 flex items-center justify-between">
        <p className="font-bold md:text-lg text-sm tracking-wide truncate pr-0">
          Interested working with me?
        </p>
        <div className="flex justify-between">
          <button className="inline-flex justify-between items-center border-color-white border-2 p-2 rounded-lg font-medium hover:text-gray-100 hover:border-gray-100">
            <span className="text-xs truncate font-semibold">See More Project</span>
          </button>
          <div className="mx-1"/>
          <button className="inline-flex justify-between border-white border-2 items-center text-pink-600 p-2 rounded-lg bg-white font-medium hover:bg-gray-100 ">
            <img src={email} className="mr-1" alt="email"/>
            <span className="text-xs truncate font-semibold">Email Me</span>
          </button>
        </div>
      </div>
    </section>
  );
}
