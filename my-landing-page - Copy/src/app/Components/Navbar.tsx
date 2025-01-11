"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from 'lucide-react'


const products = [
  { name: "Product 1", href: "#" },
  { name: "Product 2", href: "#" },
  { name: "Product 3", href: "#" },
]

const resources = [
  { name: "Documentation", href: "#" },
  { name: "Guides", href: "#" },
  { name: "Help Center", href: "#" },
]

export function Navbar() {
  const [productsOpen, setProductsOpen] = React.useState(false)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 ml-[-40px] lg:ml-0 md:ml-0">

            <svg xmlns="http://www.w3.org/2000/svg" height={20} width={220} data-name="Layer 1" viewBox="0 0 190.5 30"><path d="M12.43 0 0 29.25l12.43-7.6Zm0 0 11.82 29.25-11.82-7.6Z" style={{fill:"#0d2052"}} /><path d="M30.12 29.25 42.55 0 30.12 7.6Zm0 0L18.29 0l11.83 7.6Z" style={{fill:"#0085ff"}}/><path d="M63.59 15.66a5 5 0 0 1 .32 5.78 5.22 5.22 0 0 1-2.23 1.88 7.88 7.88 0 0 1-3.39.69h-7.78V4.54h7.42a8 8 0 0 1 3.42.67A5 5 0 0 1 63.5 7a4.59 4.59 0 0 1 .73 2.53 4.34 4.34 0 0 1-.9 2.8 5.21 5.21 0 0 1-2.4 1.67 4.3 4.3 0 0 1 2.66 1.66Zm-9.89-2.94h3.95A3.8 3.8 0 0 0 60.1 12a2.49 2.49 0 0 0 .9-2.06 2.54 2.54 0 0 0-.88-2.06 3.7 3.7 0 0 0-2.45-.74H53.7Zm6.86 7.9a2.71 2.71 0 0 0 .92-2.18 2.83 2.83 0 0 0-1-2.27 3.86 3.86 0 0 0-2.6-.84H53.7v6.07H58a3.81 3.81 0 0 0 2.56-.79ZM73.21 9A5.51 5.51 0 0 1 76 8.32v3.3h-.81a3.89 3.89 0 0 0-2.84 1 4.55 4.55 0 0 0-1 3.3V24h-3.2V8.57h3.19v2.24A5 5 0 0 1 73.21 9Zm5.59 3.1a7 7 0 0 1 6.31-3.78A6.74 6.74 0 0 1 88.3 9a6.45 6.45 0 0 1 2.17 1.78V8.57h3.22V24h-3.22v-2.3a6.34 6.34 0 0 1-2.21 1.82 7.16 7.16 0 0 1-6.83-.29 7.25 7.25 0 0 1-2.62-2.86 8.79 8.79 0 0 1-1-4.16 8.54 8.54 0 0 1 .99-4.11Zm11 1.4a4.62 4.62 0 0 0-1.72-1.79 4.51 4.51 0 0 0-2.3-.62 4.53 4.53 0 0 0-4 2.37 5.51 5.51 0 0 0-.66 2.76 5.75 5.75 0 0 0 .66 2.8 4.64 4.64 0 0 0 1.74 1.83 4.51 4.51 0 0 0 4.58 0 4.59 4.59 0 0 0 1.72-1.8 5.67 5.67 0 0 0 .66-2.79 5.59 5.59 0 0 0-.67-2.76Zm19.13-4.42a5.38 5.38 0 0 1 2.25 2.24 7.37 7.37 0 0 1 .82 3.58V24h-3.16v-8.62a4.48 4.48 0 0 0-1-3.18 3.69 3.69 0 0 0-2.84-1.11 3.73 3.73 0 0 0-2.84 1.11 4.44 4.44 0 0 0-1 3.18V24h-3.27V8.57h3.19v1.76a5.29 5.29 0 0 1 2-1.48 6.4 6.4 0 0 1 2.59-.53 6.92 6.92 0 0 1 3.26.76ZM116 12.1a7 7 0 0 1 6.34-3.78 7.24 7.24 0 0 1 3 .66 6.11 6.11 0 0 1 2.34 1.75V3.28h3.22V24h-3.22v-2.32a6 6 0 0 1-2.17 1.85 6.72 6.72 0 0 1-3.18.73 6.9 6.9 0 0 1-3.68-1 7.22 7.22 0 0 1-2.65-2.89 8.79 8.79 0 0 1-1-4.16 8.54 8.54 0 0 1 1-4.11Zm11 1.4a4.62 4.62 0 0 0-1.72-1.79 4.51 4.51 0 0 0-2.3-.62 4.53 4.53 0 0 0-4 2.37 5.51 5.51 0 0 0-.66 2.76 5.75 5.75 0 0 0 .66 2.8 4.64 4.64 0 0 0 1.74 1.83 4.51 4.51 0 0 0 4.58 0 4.59 4.59 0 0 0 1.72-1.8 5.67 5.67 0 0 0 .66-2.79 5.59 5.59 0 0 0-.68-2.76ZM151 24h-3.19l-9.6-14.53V24H135V4.51h3.19l9.6 14.5V4.51H151Zm4.13-11.9a7 7 0 0 1 6.31-3.78 6.74 6.74 0 0 1 3.18.71 6.45 6.45 0 0 1 2.17 1.78V8.57H170V24h-3.22v-2.3a6.34 6.34 0 0 1-2.21 1.82 7.16 7.16 0 0 1-6.83-.29 7.25 7.25 0 0 1-2.62-2.86 8.79 8.79 0 0 1-1-4.16 8.54 8.54 0 0 1 1.01-4.11Zm11 1.4a4.62 4.62 0 0 0-1.72-1.79 4.51 4.51 0 0 0-2.3-.62 4.53 4.53 0 0 0-4 2.37 5.51 5.51 0 0 0-.66 2.76 5.75 5.75 0 0 0 .66 2.8 4.64 4.64 0 0 0 1.74 1.83 4.51 4.51 0 0 0 4.58 0 4.59 4.59 0 0 0 1.72-1.8 5.67 5.67 0 0 0 .66-2.79 5.59 5.59 0 0 0-.67-2.76Zm14.05 7.64 4.37-12.57h3.39L182.05 24h-3.81l-5.85-15.43h3.42Z"/></svg>
          
            {/* <span className="text-xl font-bold text-black md:font-medium"></span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:absolute md:left-[30rem] md:transform md:-translate-x-1/2">
          <div className="flex items-center space-x-[40px] text-[15px]">
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center space-x-1  font-medium text-gray-700 hover:text-gray-900"
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-1000 ">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2  text-gray-700 hover:bg-gray-100"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className=" font-medium text-blue-500 hover:text-gray-900"
            >
              Pricing
            </Link>

            <Link
              href="/blogs"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Blogs
            </Link>

            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900"
              >
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {resourcesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="block px-4 py-2  text-gray-700 hover:bg-gray-100"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Login and Start for free buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4 mr-[90px]">
          <Link
            href="/login"
            className="rounded-md border-blue-400 border-[1px] px-4 py-2 text-[13px] font-medium text-black hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Start for free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 " />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center space-x-2">
             
              <span className="text-xl font-normal text-black ">BrandNav</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flex flex-col space-y-4 px-4 sm:px-6">
            <div className="space-y-1">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-900"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="ml-4 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block py-2 text-base text-gray-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="block py-2 text-base font-medium text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/blogs"
              className="block py-2 text-base font-medium text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>

            <div className="space-y-1">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-900"
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              {resourcesOpen && (
                <div className="ml-4 space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="block py-2 text-base text-gray-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 space-y-4">
              <Link
                href="/login"
                className="block w-full rounded-md px-3 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

