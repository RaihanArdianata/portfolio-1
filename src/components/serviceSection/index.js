import React from 'react'
import layers from '../../assets/icon/layers.svg'
import phone from '../../assets/icon/hand-graving-smartphone.svg'
import script from '../../assets/icon/script.svg'
import Slider from "react-slick";

export default function Service() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        useCSS: true
      };
    return (
        <section className="xl:mx-80 lg:mx-50 sm:mx-20 pb-20">
            <div className="flex items-center">
                <div className="line" />
                <p className="px-2.5 md:text-1xl text-lg color-primary font-bold">
                MY SERVICE
                </p>
                <div className="line" />
            </div>
            <div className="hidden sm:inline-flex mt-14 justify-center items-center content-center flex-col md:flex-row flex-wrap space-y-5 md:space-x-10 md:space-y-0  ">
                <div className="flex flex-col w-1/2 md:w-3/12 p-1 md:p-2">
                    <img src={layers} className="sm:w-3/6 self-center animate-bounce" alt="layers"/>
                    <span className="md:text-1xl text-lg color-primary font-bold my-5">Design</span>
                    <p className="text-sm overflow-ellipsis">Handpicked design resources  and meticulous in every detail.<span class="text-4xl color-primary leading-3">.</span></p>
                </div>
                <div className="flex flex-col w-1/2 md:w-3/12 p-1 md:p-2">
                    <img src={phone} className="sm:w-3/6 self-center animate-bounce" alt="phone"/>
                    <span className="md:text-1xl text-lg color-primary font-bold my-5">Mobile Dev</span>
                    <p className="text-sm overflow-ellipsis">Developing mobile with emphasis on performance and user comfort<span class="text-4xl color-primary leading-3">.</span></p>
                </div>
                <div className="flex flex-col w-1/2 md:w-3/12 p-1 md:p-2">
                    <img src={script} className="sm:w-3/6 self-center animate-bounce" alt="script"/>
                    <span className="md:text-1xl text-lg color-primary font-bold my-5">WEB Dev</span>
                    <p className="text-sm overflow-ellipsis">Developing a website with emphasis on performance and user comfort<span class="text-4xl color-primary leading-3">.</span></p>
                </div>
            </div>
            <div className="sm:hidden  mt-14">
                <Slider {...settings}>
                    <div>
                        <div className="flex flex-col w-1/2 md:w-3/12 p-1 md:p-2 justify-center mx-20" style={{display: "flex !important"}}>
                            <img src={layers} className="sm:w-3/6 self-center" alt="layers"/>
                            <span className="md:text-1xl text-lg color-primary font-bold my-5">Design</span>
                            <p className="text-sm overflow-ellipsis">Handpicked design resources  and meticulous in every detail.<span class="text-4xl color-primary leading-3">.</span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-1/2 md:w-3/12 p-1 md:p-2 mx-20">
                            <img src={phone} className="sm:w-3/6 self-center" alt="phone"/>
                            <span className="md:text-1xl text-lg color-primary font-bold my-5">Mobile Dev</span>
                            <p className="text-sm overflow-ellipsis">Developing mobile with emphasis on performance and user comfort<span class="text-4xl color-primary leading-3">.</span></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-1/2 md:w-3/12 p-1 md:p-2 mx-20">
                            <img src={script} className="sm:w-3/6 self-center" alt="script"/>
                            <span className="md:text-1xl text-lg color-primary font-bold my-5">WEB Dev</span>
                            <p className="text-sm overflow-ellipsis">Developing a website with emphasis on performance and user comfort<span class="text-4xl color-primary leading-3">.</span></p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
