import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Image from "next/image";
import bannerFotter from "../../../public/banner_svg.svg";
import CreditCard from "../../../public/credit_card.svg";
import Ratings from "../../../public/rating-star.svg";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FF] py-16 lg:px-4">
      <div className="flex justify-center items-center flex-col w-full px-4">
        {/* Banner Section */}
        <div
          className="flex flex-col justify-center items-center h-[200px] lg:h-[400px] w-full max-w-6xl mb-12 px-6 md:px-10 lg:px-12 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerFotter.src})`,
          }}
        >
          <div className="text-center">
            <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 max-w-2xl leading-tight">
              Want to see BrandNav in action?
            </h2>
            <h3 className="text-sm lg:text-xl text-white mb-6">
              Try BrandNav for free today!
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-[#007bff] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full lg:w-auto transition-all">
              Grab free leads
            </button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-sm">
              <div className="flex items-center gap-2 text-[12px]">
                <Image src={CreditCard} alt="card" className="h-4 w-4" />
                No credit card required
              </div>
              <span className="hidden md:block">|</span>
              <div className="flex items-center gap-1">
                <Image src={Ratings} alt="rating" className="h-4 w-[100px]" />
                <span>4.8/5 G2 Ratings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="container mx-auto px-0 md:px-10 lg:px-[140px]">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:pl-10">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="text-[#1A1B1E] text-xl font-semibold">
                BrandNav.io
              </Link>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                BrandNav is an Ecom Leads Database with tons of amazing filters. Now you can get access to stores with just a simple click.
              </p>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>

            {/* Blogs Column */}
            <div>
              <h3 className="font-semibold text-[#1A1B1E] mb-4">Blogs</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  All Blogs
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Cold Emailing
                </Link>
              </div>
            </div>

            {/* Documentation Column */}
            <div>
              <h3 className="font-semibold text-[#1A1B1E] mb-4">Documentation</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Getting Started
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-[#1A1B1E] mb-4">Resources</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Latest Updates
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Roadmap
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  About Us
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Join Us
                </Link>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-[#1A1B1E] mb-4">Legal</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Terms & Conditions
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Refund Policy
                </Link>
                <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} BrandNav. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
