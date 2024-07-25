import { useState, memo } from 'react'
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";

const BlogPosts = ({ post }) => {

    // const { id } = post
    // console.log(id)
    const [toggle, setToggle] = useState(null);

    const toggleTab = (index) => setToggle(index)

    const haveImage = (
        <div className={`${toggle ? " h-[240px] sm:h-[400px]" : "h-[0]" } transition-all delay-150 duration-150 flex items-start justify-between overflow-hidden gap-3`}>
            <div className="flex max-w-[50%] flex-col h-[240px] sm:h-full overflow-hidden">
                <div>
                    <h6 className="text-sm my-0 font-thin tracking-wider">{post.date}</h6>
                </div>

                <div className="w-full sm:h-full overflow-hidden overflow-y-auto scrollbar scrollbar-track-gray-100">
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
            <div className="max-h-[360px] rounded-3xl overflow-hidden border border-solid border-gray-300 shadow-sm">
                <img className=" w-full rounded-2xl" src={post.image} alt={post.title} />
            </div>
        </div>
    )

    const haveNoImage = (
        <section className={`${toggle ? "h-[320px] sm:h-[240px]" : "h-0"} transition-all delay-150 duration-300 overflow-hidden`}>
            <div className="max-h-[240px] overflow-hidden overflow-y-auto scrollbar scrollbar-track-gray-100">
            <h6 className="text-sm my-0 font-thin tracking-wider">{post.date}</h6>
                <p>{post.body}</p>
            </div>
            <div className="flex items-start gap-[10%] text-2xl w-full">
                <p><FaThumbsUp className="cursor-pointer hover:text-blue-700 transition duration-300" /></p>
                <p><MdMessage className="cursor-pointer hover:text-blue-700 transition duration-300" /></p>
                <p><BsShareFill className="cursor-pointer hover:text-blue-700 transition duration-300" /></p>
            </div>
        </section>
    )

    return (
        <>
            <section className="text-base sm:text-xl text-gray-900">
                <div className="w-full border-solid border-[1px] bg-gray-100 border-gray-200 mx-auto rounded-xl hover:shadow-lg shadow-md">
                    <div className="p-6">
                        <div className={post.image ? "flex justify-between items-center py-4" : "flex justify-between items-center py-4"}>
                            <h4 onClick={() => toggleTab(!toggle)} className="text-wrap font-bold m-0 cursor-pointer">{post.title}</h4>
                            {
                                toggle
                                 ? <IoCaretUpSharp className="cursor-pointer hover:text-gray-700" onClick={() => toggleTab(!toggle)} />
                                 : <IoCaretDownSharp onClick={() => toggleTab(!toggle)} className="cursor-pointer hover:text-gray-700" />
                            }
                        </div>
                        <div>
                        { post.image
                        ? (
                            haveImage
                        )
                        : haveNoImage }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(BlogPosts)