import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-4 lg:px-48">
        {/* Logo and Line */}
        <div className="flex flex-col items-start">
          <Image src="/assets/images/logo.png" alt="Logo" width={120} height={120} className=" mb-4" />
          <div className="border-t h-[3px] border-[#5686bd] w-full"></div>
        </div>
        
        {/* Footer Columns */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company */}
          <div>
            <h5 className="font-bold mb-2 text-[#024957]">Company</h5>
            <ul>
              <li><Link href="#" className="hover:text-[#54bbbd]">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#54bbbd]">Developers</Link></li>
              <li><Link href="#" className="hover:text-[#54bbbd]">Security</Link></li>
              <li><Link href="#" className="hover:text-[#54bbbd]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="font-bold mb-2 text-[#024957]">Solutions</h5>
            <ul>
              <li><Link href="#" className="hover:text-[#54bbbd]">Workforce Management Software</Link></li>
              <li><Link href="#" className="hover:text-[#54bbbd]">Managed by Axle</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h5 className="font-bold mb-2 text-[#024957]">Get in Touch</h5>
            <ul>
              <li><a href="#" className="hover:text-[#54bbbd]">Contact Us</a></li>
              <div className="flex justify-center md:justify-start mt-4">
                {/* Replace these with actual icons or images */}
                <Link href="#" className="mr-4 hover:text-[#54bbbd]">LinkedIn</Link>
                <Link href="#" className="mr-4 hover:text-[#54bbbd]">Twitter</Link>
                <Link href="#" className="hover:text-[#54bbbd]">Google</Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
