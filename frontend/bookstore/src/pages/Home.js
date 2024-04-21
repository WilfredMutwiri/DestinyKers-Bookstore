// icons
import bestsellerIcon from '../images/best-seller.webp'
import comingsoonIcon from '../images/coming-soon.webp'
import trendingIcon from '../images/trending.webp'
import newRelease from '../images/new.webp'
import membershipIcon from '../images/membership.webp'

import banner1 from '../images/Banner1.webp'
import banner2 from '../images/banner2.webp'
import banner3 from '../images/banner3.webp'
// fiction books
import sikunjema from '../images/Siku Njema.jpg'
import accrossTheBridge from '../images/AcrossTheBridge.webp'
import killMeQuick from '../images/kill-me-quick-nuriakenya.webp'
import kingofwrath from '../images/king of greed.webp'
import godofmalice from '../images/god of malicejpg.webp'
// self-improvement books
import LawsOfPower from '../images/48LawsofPower.webp'
import cantHurtMe from '../images/canHurtMe2.webp'
import richDadPoorDad from '../images/richdadpoorDad.webp'
import leaderShipChallenge from '../images/LeadershipChallange.jpeg'
import AtomicHabits from '../images/AtomicHabits2.webp'
// mothers day gifts
import neverLie from '../images/never lie.jpg'
import hunting from '../images/hunting.webp'
import sweeterOblivion from '../images/sweaterOblivion.webp'
import silentPatient from '../images/silentPatient.webp'
import fiveSecondRule from '../images/thefiveSecondRule.webp'
import timeManagement from '../images/Timemanagement.webp'
import lifeInPrison from '../images/my life in prison.jpeg'
import thingsfallapart from '../images/things fall apart.jpeg'
import subtleArt from '../images/subtleArt.webp'
// home banners
import homeBanner1 from '../images/homeBanner1.webp'
import mothersBanner2 from '../images/mothersBanner.webp'
import { useState,useEffect,useRef} from 'react'
// books
import AcrossTheBridgePDF from '../Books/Across The Bridge (destinykers bookstore).pdf'
import AtomicHabitsPDf from '../Books/Atomic habits (destinykers Bookstore).pdf'
import CantHurtMePDF from "../Books/CAN'T HURT ME(destinykers bookstore).pdf"
import RichDadPoorDadPDF from "../Books/Rich Dad Poor Dad (destinykers bookstore).pdf"
import LawsOfPowerPDF from '../Books/The 48 Laws of Power by Robert Greene (destinykers bookstore).pdf'
import leadershipChallengePDF from "../Books/The Leadership Challenge (destinykers bookstore).pdf"
import killmeQuickPDf from '../Books/Kill Me Quick (Meja Mwangi) (destinykers bookstore).pdf'
import sikunjemaPDF from '../Books/Siku Njema.pdf'
import kingofGreed from '../Books/king of Greed Bk1 (Destinykers Bookstore).pdf'
import godofmalicePDF from '../Books/god of malice (destinykers bookstore).pdf'
const Home = () => {
    const [bannerImg,setBannerImg]=useState(0);
    const Images=[banner1,banner2,banner3];
    const changeImg=()=>{
        setBannerImg((prevImg)=>(prevImg === Images.length-1?0:prevImg+1))
    }
    useEffect(()=>{
        const Interval=setInterval(changeImg,2000);
        return ()=>clearInterval(Interval)
    },[])
    // reveal book prices
    const bookInfoRef=useRef(null)
    const bookCoverRef=useRef(null)

    const bookInfoRef2=useRef(null)
    const bookCoverRef2=useRef(null)

    const bookInfoRef3=useRef(null)
    const bookCoverRef3=useRef(null)

    const bookInfoRef4=useRef(null)
    const bookCoverRef4=useRef(null)

    const bookInfoRef5=useRef(null)
    const bookCoverRef5=useRef(null)

    const showBookInfo=()=>{
        if(bookCoverRef.current && bookInfoRef.current){
            bookInfoRef.current.style.display="block"
        }
    }
    // show second book
    const showBookInfo2=()=>{
        if(bookCoverRef2.current && bookInfoRef2.current ){
            bookInfoRef2.current.style.display="block"
        }
    }
    // show third book
    const showBookInfo3=()=>{
        if(bookCoverRef3.current && bookInfoRef3.current ){
            bookInfoRef3.current.style.display="block"
        }
    }
    // show fourth book
    const showBookInfo4=()=>{
        if(bookCoverRef4.current && bookInfoRef4.current ){
            bookInfoRef4.current.style.display="block"
        }
    }
    // show fifth book
    const showBookInfo5=()=>{
        if(bookCoverRef5.current && bookInfoRef5.current ){
            bookInfoRef5.current.style.display="block"
        }
    }
    // hide books
    const HideBookInfo=()=>{
        if(bookCoverRef.current && bookInfoRef.current){
            bookInfoRef.current.style.display=""
        }
    }
    // hide second book
    const HideBookInfo2=()=>{
        if(bookCoverRef2.current && bookInfoRef2.current){
            bookInfoRef2.current.style.display=""
        }
    }
    // hide third book
    const HideBookInfo3=()=>{
        if(bookCoverRef3.current && bookInfoRef3.current){
            bookInfoRef3.current.style.display=""
        }
    }
    // hide fourth book
    const HideBookInfo4=()=>{
        if(bookCoverRef4.current && bookInfoRef4.current){
            bookInfoRef4.current.style.display=""
        }
    }
    // hide fifth
    const HideBookInfo5=()=>{
        if(bookCoverRef5.current && bookInfoRef5.current){
            bookInfoRef5.current.style.display=""
        }
    }
    const bkNotAvailable=()=>{
        alert("Sorry,This book is not available in our store at the moment...");
    }
    return (
        <div class="w-full">
            {/* home image section */}
            <div>
                {/* {changeImg[bannerImg]} */}
                <img src={Images[bannerImg]} alt="desktopBanner1"/>
            </div>
            {/* basic links section */}
            <section>
                <hr class="h-1 bg-black" />
                <h2 class="p-3 text-center">Find an exclusive space at DestinyKers Bookstore</h2>
                <p class="text-center pb-2">Over 2000 eBooks to download, all genres are covered,hardcopies also available at an affordable price!</p>
                <hr class=" bg-black" />
                <div class="w-8/12 m-auto pt-5 pb-5">
                    <ul class="block md:flex justify-between">
                    <li>
                        <img class="w-12" src={membershipIcon}/>
                        DestinyKers Membership
                    </li>
                    <li>
                        <img class="w-12" src={bestsellerIcon}/>
                        BestSellers
                    </li>
                    <li>
                        <img class="w-12" src={newRelease}/>
                        New release
                    </li>
                    <li>
                        <img class="w-12" src={comingsoonIcon}/>
                        Coming Soon
                    </li>
                    <li>
                        <img class="w-12" src={trendingIcon}/>
                        Trending
                    </li>
                    </ul>
                </div>
                <hr />
            </section>
            {/* fiction books section */}
            <section>
                <div class="w-11/12 m-auto pt-7 md:pt-14 pb-7 md:pb-14 font-serif">
                    <span class="flex justify-between">
                    <h2 class="text-lg md:text-2xl font-semibold pb-3"><span class="text-orange-500">~</span>Fiction Lovers</h2>
                    <p class="text-blue-600 hover:text-orange-500 cursor-pointer">See All</p>
                    </span>
                    <div class="block md:grid grid-cols-5 p-3 overflow-hidden" id='fictionBooks'>
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" ref={bookCoverRef} onMouseEnter={showBookInfo}  src={sikunjema} alt='sikunjema cover'/>
                            <div ref={bookInfoRef} class="hidden">
                            <div onMouseLeave={HideBookInfo} class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={sikunjemaPDF} download={sikunjemaPDF}>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* second fiction book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                        <img class="h-auto md:h-72 w-full" ref={bookCoverRef2} onMouseEnter={showBookInfo2}  src={accrossTheBridge} alt="AcrossTheBridge cover"/>
                        <div ref={bookInfoRef2} class="hidden">
                        <div onMouseLeave={HideBookInfo2} class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={AcrossTheBridgePDF} download={AcrossTheBridgePDF}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                        </div>
                        </div>
                        </div>
                        {/* third fiction book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" ref={bookCoverRef3} onMouseEnter={showBookInfo3} src={killMeQuick} alt='kill me quick cover'/>
                            <div class="hidden" ref={bookInfoRef3}>
                            <div onMouseLeave={HideBookInfo3} class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={killmeQuickPDf} download={killmeQuickPDf}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* fourth fiction book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full"  ref={bookCoverRef4} onMouseEnter={showBookInfo4} src={kingofwrath} alt='king of wrath cover'/>
                            <div class="hidden" ref={bookInfoRef4}>
                            <div onMouseLeave={HideBookInfo4} class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={kingofGreed} download={kingofGreed}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* fifth book */}
                        <div>
                        <div class="mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" ref={bookCoverRef5} onMouseEnter={showBookInfo5} src={godofmalice} alt='black bird cover'/>
                            <div class="hidden" ref={bookInfoRef5}>
                            <div onMouseLeave={HideBookInfo5}  class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={godofmalicePDF} download={godofmalicePDF}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* first advert section */}
            <section>
                <div class="w-11/12 m-auto">
                    <img src={homeBanner1} alt='homeBanner 1 Img'/>
                </div>
            </section>
            {/* non-fiction section */}
            <section>
                <div class="w-11/12 m-auto pt-7 md:pt-14 pb-7 md:pb-14 font-serif">
                <span class="flex justify-between">
                    <h2 class="text-lg md:text-2xl font-semibold pb-3"><span class="text-orange-500">~</span>Improve Yourself!</h2>
                    <p class="text-blue-600 hover:text-orange-500 cursor-pointer">See All</p>
                    </span>
                    <div class="block md:grid grid-cols-5 p-3 overflow-hidden" id='fself-improvement books'>
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={AtomicHabits} alt='AtomicHAbits cover'/>
                            <div  class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a download={AtomicHabitsPDf} href={AtomicHabitsPDf}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* second self imporvement book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                        <img class="h-auto md:h-72 w-full"  src={richDadPoorDad} alt="rich dad poor dad cover"/>
                        <div class="">
                        <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={RichDadPoorDadPDF} download={RichDadPoorDadPDF}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                        </div>
                        </div>
                        </div>
                        {/* third self-improvement book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={leaderShipChallenge} alt='Leadership challange cover'/>
                            <div class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={leadershipChallengePDF} download={leadershipChallengePDF}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* fourth self-improvemtn book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={cantHurtMe} alt='cant Hurt me cover'/>
                            <div class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={CantHurtMePDF} download={CantHurtMePDF}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* fifth self-improvement book */}
                        <div>
                        <div class="mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={LawsOfPower} alt='48 Laws of power cover'/>
                            <div class="">
                            <div  class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-blue-700 bg-gray-900 p-1 text-sm rounded-full" href=''>Available</a></span>
                                <a href={LawsOfPowerPDF} download={LawsOfPowerPDF}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* second home banner section */}
            <section>
                <div class="w-11/12 m-auto">
                    <img class="w-full object-cover" src={mothersBanner2} alt='mothers day banner'/>
                </div>
            </section>
            {/* mothers day gifts section */}
            <section>
                <div class="w-11/12 m-auto pt-7 md:pt-14 pb-7 md:pb-14 font-serif">
                <span class="flex justify-between pb-5">
                <h2 class="text-lg md:text-2xl font-semibold pb-3"><span class="text-orange-500">~</span>Celebrating mother Gifts!</h2>
                <p class="text-blue-600 hover:text-orange-500 cursor-pointer">See All</p>
                </span>
                <div class="block md:flex" id='mothersday'>
                    {/* the right aside book */}
                    <div class="mr-0 md:mr-10 w-96">
                        <img class="w-full" src={neverLie} alt='youLikeItDarker cover'/>
                        <div class="bg-gray-900 text-white p-3">
                            <h2 class="text-orange-500 text-lg">Author : Stephen King</h2>
                            <h3 class="text-orange-500">Publisher :Random House</h3>
                            <h3 class="text-blue-600">Number of pages :400</h3>
                            <p class="pt-3">
                            A story that revolves around a small town that is haunted by a mysterious
                            and malevolent force, which causes its residents to confront their deepest
                            fears and darkest secrets. As the darkness spreads, the townspeople must
                            band together to fight the evil that threatens to consume them all.<br/>
                            <div class="flex justify-between p-3">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </p>
                        </div>
                    </div>
                    {/* the left side books */}
                    <div class="">
                        {/* first grid */}
                        <div class="block md:grid grid-cols-4 mb-5">
                            {/* first left side grid 1 book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={hunting} alt='hunting cover'/>
                            <div  class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not available</a></span>
                                <svg onClick={bkNotAvailable}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        {/* second book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                        <img class="h-auto md:h-72 w-full"  src={sweeterOblivion} alt="sweeter Oblivion cover cover"/>
                        <div class="">
                        <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                        </div>
                        </div>
                        </div>
                        {/* third book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={fiveSecondRule} alt='The 5 seconds rule cover'/>
                            <div class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        {/* fourth book*/}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={subtleArt} alt='the subtle art cover'/>
                            <div class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* second grid */}
                        <div class="grid grid-cols-4">
                            {/* first second left aside grid book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={lifeInPrison} alt='lifeInPrison cover'/>
                            <div  class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        {/* second book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                        <img class="h-auto md:h-72 w-full"  src={timeManagement} alt="time management cover"/>
                        <div class="">
                        <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                        </div>
                        </div>
                        </div>
                        {/* third book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={silentPatient} alt='silent patient cover'/>
                            <div class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        {/* fourth book */}
                        <div class="mr-0 md:mr-5 mb-5 md:mb-0">
                            <img class="h-auto md:h-72 w-full" src={thingsfallapart} alt='thingsfallapart cover'/>
                            <div class="">
                            <div class="flex justify-between p-3 bg-gray-300 -mt-16 z-50 relative">
                                <span class="text-orange-500">Status<br/><a class="text-red-700 bg-gray-50 p-1 text-sm rounded-full" href=''>Not Available</a></span>
                                <svg onClick={bkNotAvailable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
     );
}
 
export default Home;