import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-10 pb-6 sm:ml-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
              
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase ">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Our Story</a></li>
                  <li><a href="#" className="hover:underline">Team</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Web Design</a></li>
                  <li><a href="#" className="hover:underline">Development</a></li>
                  <li><a href="#" className="hover:underline">Hosting</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Help Center</a></li>
                  <li><a href="#" className="hover:underline">Tutorials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Contact</a></li>
                  <li><a href="#" className="hover:underline">Press</a></li>
                  <li><a href="#" className="hover:underline">Legal</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">FAQs</a></li>
                  <li><a href="#" className="hover:underline">Live Chat</a></li>
                  <li><a href="#" className="hover:underline">Feedback</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 uppercase">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Facebook</a></li>
                  <li><a href="#" className="hover:underline">Twitter</a></li>
                  <li><a href="#" className="hover:underline">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center text-lg text-gray-400">
              &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
            </div>
          </div>
        </footer>
      );
}

