import React from 'react'
import { Copyright } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-[#39383d] py-4 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-2 md:mb-0">
                        <span className="font-bold text-xl">AlgoTrack</span>
                        <Copyright className="h-4 w-4 mx-2" />
                        <span>{currentYear} All rights reserved.</span>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/privacy" className="hover:text-gray-300 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-gray-300 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-gray-300 transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}