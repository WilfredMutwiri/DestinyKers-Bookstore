import navBanner from '../images/navBAnner.jpg'
import { useState,useEffect,useRef} from 'react';
const NavBar = () => {
    // banner text change
    let bannerTexts=['We Beleive in Education For Change!','Get 25% off when you sign Up today!','Download as many eBooks as you wish',"Mothers' day Offer Available!!"];
    const [newText,setNewText]=useState(0);
    const changeText=()=>{
        setNewText((prevIndex)=>(prevIndex === bannerTexts.length-1?0:prevIndex+1))
    }
    useEffect(()=>{
        const interval=setInterval(changeText,1700)
        return ()=>clearInterval(interval)
    },[])
    // signup and login reveal
    const [hovered,setIsHoverd]=useState(false)
    const moreNavIcon=useRef(null)
    const moreNavInfo=useRef(null)
    const revealLogins=()=>{
        if(moreNavIcon.current && moreNavInfo.current){
            moreNavInfo.current.style.display="block"
        }
    }
    const closeLogins=()=>{
        if(moreNavIcon.current && moreNavInfo.current){
            moreNavInfo.current.style.display="none"
        }  
    }
    // reveal menu
    const menuRef=useRef(null)
    const menuIcon=useRef(null)
    const accountRef=useRef(null)
    const revealMenu=()=>{
        if(menuIcon.current && menuRef.current || menuIcon.current && accountRef.current){
            menuRef.current.style.display="block"
            accountRef.current.style.display="block"
        }
    }
    // hide menu
    const closeMenu=()=>{
        if(menuIcon.current && menuRef.current || menuIcon.current && accountRef.current){
            menuRef.current.style.display=""
            accountRef.current.style.display=""
        }
    }
    return (
        <div class="w-full bg-gray-50 font-sans">
            {/* text change banner */}
            <div class="bg-gray-800 p-3 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="font-semibold text-blue-500 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
                <h2 class="ml-0 md:ml-20 mr-0 md:mr-20 text-center text-white font-semibold">{bannerTexts[newText]}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="font-semibold text-blue-500 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
            {/* logo and search section */}
            <section>
                <div class="block md:flex w-11/12 m-auto p-5 ">
                    <div class="flex justify-between">
                        <h2 class="pb-5 md:pb-0 text-center font-bold text-lg md:text-3xl text-orange-500">Destiny<span class="text-blue-500">Kers Bookstore</span></h2>
                        <svg ref={menuIcon} onClick={revealMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 block md:hidden hover:text-orange-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div class="ml-0 md:ml-10 mr-0 md:mr-10 flex">
                        <input type="text" placeholder="Search by Title or Author" class="p-1 bg-gray-200 w-full md:w-96 border-black border-2"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-10 p-2 text-white bg-gray-800 -ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    {/* account tab */}
                    <div class="hidden md:block" ref={accountRef}>
                    <div class="flex mt-2 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h2 class="ml-2">My Account
                    <ul ref={moreNavInfo} onMouseLeave={closeLogins} class="z-50 absolute bg-gray-300 w-28 p-3 hidden">
                        <li class="font-semibold text-orange-500">Login</li>
                        <li class="font-semibold text-blue-600">SignUp</li>
                    </ul>
                    </h2>
                    <svg ref={moreNavIcon} onMouseEnter={revealLogins} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1 text-blue-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div>
                    </div>
                </div>
            </section>
            {/* navBar section */}
            <div class="mb-4 w-10/12 m-auto p-4 md:p-0 pb-4 hidden md:block bg-gray-200 rounded-md md:bg-gray-50" ref={menuRef}>
                <div>
                    <ul class="block md:flex font-semibold text-lg">
                        <li class="navLi">Fiction<span class="navLiSpan">||</span></li>
                        <li class="navLi">Self-Improvement <span class="navLiSpan">|</span></li>
                        <li class="navLi">Kids <span class="navLiSpan">|</span></li>
                        <li class="navLi"> Health <span class="navLiSpan">|</span></li>
                        <li class="navLi">Finance <span class="navLiSpan">|</span></li>
                        <li class="navLi">Spiritual <span class="navLiSpan">|</span></li>
                        <li class="navLi">Mystery <span class="navLiSpan">|</span></li>
                        <li class="navLi">Teens <span class="navLiSpan">|</span></li>
                        <li class="navLi">Premium <span class="navLiSpan">|</span></li>
                        <li class=" hover:bg-gray-300 hover:text-orange-500 rounded-md p-2 md:p-0">Contacts</li>
                    </ul>
                </div>
                <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 m-auto text-orange-500 block md:hidden hover:text-blue-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
            {/* navBanner Image */}
            <div>
                <img src={navBanner} alt='navBanner image'/>
            </div>
            {/* finalAdvert Text */}
            <div class="bg-gray-800 p-2">
                <h1 class="text-center text-normal md:text-lg font-semibold text-white">Members Get 20% Off on Premium Books</h1>
            </div>
        </div>
    );
}
 
export default NavBar;