import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white/95 backdrop-blur-sm py-6 text-center border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-xl font-bold text-black font-['Space_Grotesk']">
                        AiLiveSync
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                        &copy; {new Date().getFullYear()} Built with ❤️ by AiLiveSync. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
