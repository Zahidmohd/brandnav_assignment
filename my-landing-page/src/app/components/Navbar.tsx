"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const products = [
  { name: "Product 1", href: "#" },
  { name: "Product 2", href: "#" },
  { name: "Product 3", href: "#" },
];

const resources = [
  { name: "Documentation", href: "#" },
  { name: "Guides", href: "#" },
  { name: "Help Center", href: "#" },
];

export function Navbar() {
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={220}
              data-name="Layer 1"
              viewBox="0 0 190.5 30"
            >
              <path d="M12.43 0 0 29.25l12.43-7.6Zm0 0 11.82 29.25-11.82-7.6Z" style={{ fill: "#0d2052" }} />
              <path d="M30.12 29.25 42.55 0 30.12 7.6Zm0 0L18.29 0l11.83 7.6Z" style={{ fill: "#0085ff" }} />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center space-x-1 text-black hover:text-blue-500 hover:border hover:border-black hover:px-2 hover:py-1 hover:rounded-lg hover:border-2"
            >
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {productsOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-black hover:text-blue-500 hover:border hover:border-black hover:px-2 hover:py-1 hover:rounded-lg hover:border-2"
          >
            Pricing
          </Link>

          <Link
            href="/blogs"
            className="text-black hover:text-blue-500 hover:border hover:border-black hover:px-2 hover:py-1 hover:rounded-lg hover:border-2"
          >
            Blogs
          </Link>

          <div className="relative">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center space-x-1 text-black hover:text-blue-500 hover:border hover:border-black hover:px-2 hover:py-1 hover:rounded-lg hover:border-2"
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
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Login and Signup Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="rounded-md border border-black px-4 py-2 text-sm font-medium text-black bg-white hover:bg-blue-500 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Start for free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-black"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-normal text-white">BrandNav</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flex flex-col space-y-4 px-4 sm:px-6">
            <div className="space-y-1">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-white"
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
                      className="block py-2 text-base text-gray-300"
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
              className="block py-2 text-base font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/blogs"
              className="block py-2 text-base font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>

            <div className="space-y-1">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-white"
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
                      className="block py-2 text-base text-gray-300"
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
                className="block w-full rounded-md border border-white px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-500 hover:text-black"
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
  );
}
