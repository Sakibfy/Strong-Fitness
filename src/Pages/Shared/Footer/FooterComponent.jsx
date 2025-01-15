
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer container className="bg-black">
      <div className="w-full bg-gray-200 text-black">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 pl-4">
          <div>
           <h2 className="font-bold text-4xl">Strong Fitness</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-black" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-black">Strong Fitness</Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title className="text-black" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-black">Github</Footer.Link>
                <Footer.Link href="#" className="text-black">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-black" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-black">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-black">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Strong Fitness" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
