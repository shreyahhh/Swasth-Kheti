import React from 'react';

export default function Component() {
  return (
    <footer className="bg-background text-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 mb-4">
            <LeafIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Green Thumb</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Discover the beauty of nature with our curated selection of high-quality plants and accessories.
          </p>
        </div>
        <nav className="flex flex-col space-y-2">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <a href="#" className="text-sm hover:underline">
            Home
          </a>
          <a href="#" className="text-sm hover:underline">
            Shop
          </a>
          <a href="#" className="text-sm hover:underline">
            About
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <h4 className="text-lg font-semibold mb-2">Categories</h4>
          <a href="#" className="text-sm hover:underline">
            Indoor Plants
          </a>
          <a href="#" className="text-sm hover:underline">
            Outdoor Plants
          </a>
          <a href="#" className="text-sm hover:underline">
            Accessories
          </a>
          <a href="#" className="text-sm hover:underline">
            Care Guides
          </a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <a href="#" className="text-sm hover:underline">
            Instagram
          </a>
          <a href="#" className="text-sm hover:underline">
            Facebook
          </a>
          <a href="#" className="text-sm hover:underline">
            Twitter
          </a>
          <a href="#" className="text-sm hover:underline">
            Pinterest
          </a>
        </nav>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm text-muted-foreground">
        &copy; 2024 Green Thumb. All rights reserved.
      </div>
    </footer>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}
