import React from 'react';
import Logo from './img/logo.png';
import { MdShoppingCart } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();

    const login = async () => {
       if(!user){
        const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
       }
    };
    return (
        <header className='w-screen fixed z-50  p-6 px-16'>
            {/* desktop & tablet*/}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-14 object-cover" alt="logo" />
                    <p className='text-headingColor text-lg font-serif'>FashGuru</p>
                </div>

                <ul className='flex items-center gap-8 '>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Men</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Women</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Refashioned</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Sell</li>


                </ul>

                <div className='relative flex items-center justify-center'>
                    <MdSearch className="text-textColor text-2xl ml-8 cursor-pointer" />
                    <div className='relative'><MdPersonOutline className="text-textColor text-2xl ml-8 cursor-pointer" onClick={login} /></div>
                    <div><MdShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/></div>


                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>

                </div>
            </div>

            {/* mobile*/}
            <div className='md:hidden flex w-full h-full'>

            </div>
        </header>
    )
}

export default Header;