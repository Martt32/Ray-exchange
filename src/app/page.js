'use client'
import Image from "next/image";
import Link from "next/link";
import cash from './Assets/cash.png'
import crypto from './Assets/crypto.png'
import dust from './Assets/dust.png'
import msg from './Assets/msg.png'
import Lottie from 'lottie-react'
import Phonimation from './Assets/animation_lneivl8l.json'
import Phonima from './Assets/animation_lneiwsk8.json'
import Bitshare from './Components/bitshare'

export default function Home() {
  return (
    <div className="">
        <div className="hero flex flex-col md:flex-row justify-between items-center p-4">
          <div className="md:w-1/2 p-4 space-y-4">

            <h1 className="font-bold text-4xl text-green-500">Secure Crypto Exchange Services</h1>
            <p className="font-bold text-sm text-gray-100 md:w-1/2">Are you ready to dive into the world of cryptocurrency with confidence? Whether you're new to digital assets or an experienced trader, I offer a secure and efficient service for buying and selling Bitcoin, USDT, and other major cryptocurrencies. Let’s make trading crypto as smooth and secure as possible!</p>
            <a className="p-4" href='https://wa.me/+234818806604' target="_blank">
              <p className="hover:bg-white hover:text-green-600 bg-green-600 shadow-md p-3 rounded-lg font-bold text-white cursor-pointer md:w-1/3">Contact On Whatsapp</p>
            </a>
          </div>
          <div className='flex justify-center items-center md:w-1/3'>
            <Lottie animationData={Phonimation}/>
          </div>
        </div>
          <div className="flex flex-col jusity-center  items-center ">
            <p className="font-bold text-2xl p-6">Our Services</p>
            <div className="grid grid-cols-2 gap-10 p-10">
            <div className="flex flex-col justify-center p-2 items-center shadow-md">
              <p className="font-bold text-gray-500 p-2">
                Buying Crypto
              </p>
              <p className="font-bold text-sm text-green-500">We buy Crypto currencies from you at good rates, ranging from big crypto currencies,stable coins and altcoins. we even purchase memecoins from you as well </p>
            </div>
            <div className="flex flex-col justify-center p-2 items-center shadow-md">
              <p className="font-bold text-gray-500 p-2">
                Selling Crypto
              </p>
              <p className="font-bold text-sm text-green-500">We sell Crypto currencies to you at good rates, which ever digital assets you wish to purchase we've got your back, write us a message on whatsapp</p>
            </div>

            </div>
          </div>

          <div className="flex bg-green-900 p-10 flex-col justify-center items-center space-y-4">
            <p className="font-bold text-2xl text-green-200">
              Turn your digital assets into Real cash
            </p>
            <Image src={cash} alt='Cash' width={600} height={600}/>
            <p className="font-bold text-sm md:w-1/2 text-green-200">
            Through a seamless process, I ensure that every transaction is secure, reliable, and fast. Trust and transparency are our priorities, Join countless others who trust my expertise in navigating the ever-evolving crypto market.
            </p>
            <a className="p-4" href='https://wa.me/+234818806604' target="_blank">
              <p className="hover:bg-white hover:text-green-600 bg-green-600 shadow-md p-3 rounded-lg font-bold text-white cursor-pointer ">Contact On Whatsapp</p>
            </a>

          </div>
          <div className='flex justify-center items-center md:w-1/3'>
            <Lottie animationData={Phonima}/>
          </div>
          <div className="flex flex-col justify-center items-center p-10  space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5 flex flex-col items-center">
              <p className="font-bold text-green-600 text-2xl">
                We build trust with our custormers
              </p>
              <Image src={crypto} alt='Cash' width={600} height={600}/>
            </div>
            <div className="space-y-5 flex flex-col items-center">
              <p className="font-bold text-green-600 text-2xl">
                Don't let your digital assets gather dust.
              </p>
              <Image src={dust} alt='Cash' width={600} height={600}/>
            </div>
            </div>
          </div>
            <div className=" flex flex-col justify-center items-center">
          
              <Bitshare/>
            <p className="font-bold text-black md:text-2xl p-3">
                Send us a message, contact us on Whatsapp
              </p>
            {/* <Image src={msg} alt='Cash' width={600} height={600}/> */}
            <a className="p-4 flex items-center" href='https://wa.me/+234818806604' target="_blank">
              <p className="hover:bg-white hover:text-green-600 bg-green-600 shadow-md p-3 rounded-lg font-bold text-white cursor-pointer ">Contact On Whatsapp</p>
            </a>
            </div>
    </div>
  );
}
