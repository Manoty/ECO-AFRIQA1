import React, { useEffect, useState } from "react";

function TermsConditions() {
    const [isVisible, setIsVisible] = useState(false)

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <article className="font-inter">
            <div className="relative">
            <div className="font-bold ">
                <h2 className="text-2xl text-green-600 text-start mb-1">Terms & Conditions</h2>
                <p className="text-[16px] text-black/60 text-start">Last updated on january 2025</p>
            </div>
                <section>
                    <h4 className="font-bold">
                        1. Accepting The Terms
                    </h4>
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h4 className="font-bold">
                        2. User Agreement
                    </h4>
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h4 className="font-bold">
                        3. Legal 
                    </h4>
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </div>
            {
                (
                    <div 
                    className={`${ !isVisible ? "h-0 " : "h-[201px]"} transition-all duration-1000 ease-in-out fixed z-10 bottom-0 w-full sm:w-[80%] bg-slate-100 flex items-start justify-around gap-4 pt-2`}>
                    <button
                    onClick={handleToggle}
                    className="rounded-[12px] bg-[#FF0C1A] h-[67px] w-[232px]  border-none text-white font-bold text-xl cursor-pointer">DECLINE</button>
                    <button
                    onClick={handleToggle}
                    className="rounded-[12px] bg-[#008000] h-[67px] w-[232px] border-none text-white font-bold text-xl cursor-pointer">ACCEPT</button>
                    </div>
                )
            }
        </article>
    )
}

export default TermsConditions