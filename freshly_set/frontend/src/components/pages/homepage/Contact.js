import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

function Contact() {
  return (
    <div className="block lg:flex w-[100%] justify-between ">
      <div className="mt-[62px] ml-[40px] block space-y-[29px] ">
        <div className="flex justify-between lg:w-[478px]">
          <div classsName="block">
            <img
              className="h-[49px] w-[45px] space-x-1"
              src="/static/media/mail.png"
              alt="email"
            />
            <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px] lg:-ml-[80px]">Email</p>
            <a href="mailto:info.freshlyfarms5@gmail.com" className="font-normal no-underline" target="_blank">
              <p className="font-[400] text-[17px] lg:text-[22px] text-[#525560] font-josefin -mt-[10px]">info.freshlyfarms</p>
            </a>
          </div>

          <div classsName="block -ml-[30px]">
            <img
              className="h-[49px] w-[49px]"
              src="/static/media/phone.png"
              alt="phone"
            />
            <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px] lg:-ml-[80px]">Phone</p>
            <p className="font-[400] text-[17px] lg:text-[22px] text-[#525560] font-josefin -mt-[10px]">
              {" "}
              +254 701 234 567{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between lg:w-[478px]">
          <div classsName="block">
            <img
              className="h-[49px] w-[49px]"
              src="/static/media/location.png"
              alt="Office"
            />
            <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px]">Office</p>
            <p className=" font-josefin text-[#525560] font-[400] text-[17px] lg:text-[22px] -mt-[10px]">
              {" "}
              Nairobi, Kenya{" "}
            </p>
          </div>

          <div classsName="block ">
            <img
              className="h-[49px] w-[49px] mr-[90px]"
              src="/static/media/globe.png"
              alt="Social Media"
            />
            <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px] mr-[90px]">Socials</p>
            <div className=" space-x-[5px]  ">
              <a href="" title="Instagram" target="_blank">
                <img
                  src="/static/media/instagram.png"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61561757183894"
                title="Facebook"
                target="_blank"
              >
                <img
                  src="/static/media/facebook.png"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              <a
                href="https://x.com/FreshlyFarms5"
                title="Twitter"
                target="_blank"
              >
                <img
                  src="/static/media/twitter.png"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              <a
                href="https://www.tiktok.com/@infofkexnoo?_t=8o7P91f39aI&_r=1"
                title="Tiktok"
                target="_blank"
              >
                <img
                  src="/static/media/tiktok.svg"
                  className="h-[37px]  w-[32px]"
                />
              </a>
            </div>
          </div>

    </div>
      </div>
      <div className="block mt-[94px] mx-[10vw] lg:ml-[187px]  lg:mr-[84px] ">
        <p className="text-[22px] text-black font-[700] font-inter">Email</p>
        <input
          placeholder="john@gmail.com"
          className="h-[46px] w-[80vw] lg:w-[474px] lg:h-[46px] py-[10px] px-[14px] rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none"
        />
        <p className="font-inter text-[16px] font-[500] text-[#333F51]">
          Message
        </p>
        <textarea
          className="h-[220px] w-[80vw] lg:h-[220px] lg:w-[474px]  rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none text-[16px] lg:text-[24px] font-inter px-[14px] py-[10px]"
          placeholder="Your message..."
        />

        <div className="flex justify-center mx-[2vw] lg:mx-0">
          <button className="h-[56px] w-[80vw] lg:w-[474px] rounded-[14px] bg-[#008000] border-none font-inter text-[25px]  text-white font-[700] mt-[41px]">Send</button>

        </div>
      </div>
    </div>
  );
}

export default Contact;
