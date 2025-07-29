"use client"

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Fade } from 'react-awesome-reveal'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Fade direction="right" key={index} delay={index * 100}>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <h4 className="text-lg font-bold text-[#0b0d0e] font-['Urbanist'] flex items-center">
                <span className="mr-3 text-primary">▶</span>
                {faq.question}
              </h4>
              <ChevronDown 
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <p className="text-[#5c5f6e] text-sm leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  )
}

export default FAQAccordion 