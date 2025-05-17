import React from 'react'
import { Upload, Search, DollarSign } from "lucide-react"
import { useSelector } from 'react-redux'

function HowItWorks() {
  const state = useSelector((state) => state.theme)
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl  ">
      <h2 className={`text-3xl font-bold text-center mb-16 ${state.textColor}`}>How It Works</h2>

      <div className="flex flex-col items-center justify-center space-y-16 md:space-y-0 md:flex-row md:justify-between md:space-x-6">
        {/* Step 1 */}
        <div data-aos="fade-right" className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
            <Upload className="w-10 h-10" />
          </div>
          <h3 className={`text-xl font-semibold mb-1 ${state.textColor}`}>Upload License</h3>
          <p className="text-gray-600">Upload your license</p>
        </div>

        {/* Line 1 */}
        <div  className="hidden md:flex items-center justify-center relative w-24">
          <span className="h-1 w-full bg-blue-500" />
          <span className="w-3 h-3 rounded-full bg-blue-500 absolute left-0 -translate-x-1/2" />
          <span className="w-3 h-3 rounded-full bg-blue-500 absolute right-0 translate-x-1/2" />
        </div>

        {/* Step 2 */}
        <div data-aos="fade-up" className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
            <Search className="w-10 h-10" />
          </div>
          <h3 className={`text-xl font-semibold mb-1 ${state.textColor}`}>Get Valuation</h3>
          <p className="text-gray-600">Within 24 hours</p>
        </div>

        {/* Line 2 */}
        <div className="hidden md:flex items-center justify-center relative w-24">
          <span className="h-1 w-full bg-blue-500" />
          <span className="w-3 h-3 rounded-full bg-blue-500 absolute left-0 -translate-x-1/2" />
          <span className="w-3 h-3 rounded-full bg-blue-500 absolute right-0 translate-x-1/2" />
        </div>

        {/* Step 3 */}
        <div data-aos="fade-left" className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
            <DollarSign className="w-10 h-10" />
          </div>
          <h3 className={`text-xl font-semibold mb-1 ${state.textColor}`}>Get Paid</h3>
          <p className="text-gray-600">Receive payment</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
