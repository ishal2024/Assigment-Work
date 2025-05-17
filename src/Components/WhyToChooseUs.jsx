import React from 'react'

import { Check, Download, List } from "lucide-react";
import { useSelector } from 'react-redux';
function WhyToChooseUs() {
   const state = useSelector((state) => state.theme)
  return (

    <div className={`container mx-auto px-4 py-16 ${state.textColor}`}>
      <h2 className="text-center text-4xl font-bold mb-16 ">Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Secure Transactions */}
        <div  data-aos="fade-down-right" className="flex flex-col items-center text-center">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Check className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2 ">Secure Transactions</h3>
          <p className="text-gray-700">End-to-end encryption</p>
        </div>

        {/* Fast Payments */}
        <div  data-aos="fade-down-left" className="flex flex-col items-center text-center">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Download className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2 ">Fast Payments</h3>
          <p className="text-gray-700">Within 24 hours</p>
        </div>

        {/* Trusted by Companies */}
        <div  data-aos="fade-down-right" className="flex flex-col items-center text-center">
          <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <List className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2 ">Trusted by Companies</h3>
          <p className="text-gray-700">100+ clients served</p>
        </div>
      </div>
    </div>
 

  )
}

export default WhyToChooseUs