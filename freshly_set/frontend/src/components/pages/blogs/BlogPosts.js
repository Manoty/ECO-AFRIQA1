// import { useState } from 'react'
import { IoCaretDownSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";

const BlogPosts = () => {

    // const [toggle, setToggle] = useState(1);

    // const toggleTab = (index) => {
    //     setToggle(index)
    // }

    return (
        <>
            <section className="text-base sm:text-xl">
                <div className="w-[96%] border-solid border-[1px] border-gray-200 mx-auto rounded-lg shadow-sm">
                    <div className="">

                        <div className="flex w-[96%] mx-auto justify-between items-center">
                            <h4 className="text-wrap font-medium m-1">Freshly Farms New Products Release</h4>
                            <IoCaretDownSharp className="cursor-pointer" />
                        </div>

                        <div className={"flex justify-around items-start sm:items-center sm:h-full overflow-hidden"}>

                            <div className="flex flex-col max-w-[48%] h-[240px] sm:h-full overflow-hidden p-3">

                                <div>
                                    <h6 className="m-1 text-sm font-thin">By Freshly Farms, on 07 Sept, 2024</h6>
                                </div>

                                <div className="w-full sm:h-full overflow-hidden overflow-y-auto text-gray-600">
                                    <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                                    Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    </p>
                                </div>

                                <div className="sm:w-[48%] flex justify-between text-2xl w-full ">
                                    <p><FaThumbsUp /></p>
                                    <p><MdMessage /></p>
                                    <p><BsShareFill /></p>
                                </div>
                            </div>

                            <div className="w-[72%] sm:max-w-[40%] md:max-w-[32%] lg:max-w-[24%] ">
                                <img className="w-full" src="/static/media/blogsImg.png" alt="freshly farms blog img" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPosts