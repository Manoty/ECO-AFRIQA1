import { useState } from 'react'
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";

const BlogPosts = ({ post }) => {

    const [toggle, setToggle] = useState(null);

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <>
            <section className="text-base sm:text-xl text-gray-900">
                <div className="w-[96%] border-solid border-[1px] bg-gray-100 border-gray-200 mx-auto rounded-lg shadow-md">
                    <div>

                        <div className="flex w-[96%] mx-auto justify-between items-center">
                            <h4 className="text-wrap font-medium m-1">{post.title}</h4>
                            {
                                toggle
                                 ? <IoCaretUpSharp className="cursor-pointer hover:text-gray-700" onClick={() => toggleTab(null)} />
                                 : <IoCaretDownSharp onClick={() => toggleTab(post.id) } className="cursor-pointer hover:text-gray-700" />
                            }
                        </div>

                        <div className={toggle ? "flex justify-around items-start sm:items-center sm:h-full overflow-hidden transition" : "hidden"}>

                            <div className="flex flex-col max-w-[48%] h-[240px] sm:h-full overflow-hidden p-3">

                                <div>
                                    <h6 className="m-1 text-sm font-thin">{post.date}</h6>
                                </div>

                                <div className="w-full sm:h-full overflow-hidden overflow-y-auto scrollbar scrollbar-track-gray-100 ">
                                    <p className="">
                                    {post.body}
                                    </p>
                                </div>

                                <div className="sm:w-[48%] flex justify-between text-2xl w-full">
                                    <p><FaThumbsUp className="cursor-pointer hover:text-blue-700 transition duration-300" /></p>
                                    <p><MdMessage className="cursor-pointer hover:text-blue-700 transition duration-300" /></p>
                                    <p><BsShareFill className="cursor-pointer hover:text-blue-700 transition duration-300" /></p>
                                </div>
                            </div>

                            <div className="w-[72%] sm:max-w-[40%] md:max-w-[32%] lg:max-w-[24%] ">
                                <img className="w-full" src={post.image} alt={post.title} />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPosts