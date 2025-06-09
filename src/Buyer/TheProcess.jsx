const TheProcess = () => {
  const steps = [
    'Select your design, dimensions, and quantity',
    'Submit your details',
    'Your RFQ a (Requirment for quote) will be shared with machine curated window manufacturers (maximum 6 only)',
    'The moment they generate interest, you will be notified ',
    'You can get to see there business profile', 
    'Sit back, relax & enjoy',
    'Matching fabricators will connect, meet you, and gather measurements', 
    'Compare quotes and place your order!',
  ]

  return (
    <div className="  px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Our <span className="font-medium">Seamless Process</span>
          </h3>
          <div className="mt-2 h-0.5 w-20 bg-black mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 h-full w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Process steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                {/* Circle with number (mobile) */}
                <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-white text-black font-medium mb-4">
                  {index + 1}
                </div>
                
                {/* Content container */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="relative">
                    {/* Circle with number (desktop) */}
                    <div className="hidden md:flex absolute top-0 items-center justify-center w-8 h-8 rounded-full border-2 border-black bg-white text-black font-medium transform -translate-y-1/2" 
                         style={index % 2 === 0 ? {right: '-4rem'} : {left: '-4rem'}}>
                      {index + 1}
                    </div>
                    
                    <div className={`p-6 border border-gray-200 rounded-none shadow-xs hover:shadow-sm transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                      <div className="space-y-2">
                        <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Step {index + 1}
                        </div>
                        <p className="text-lg font-light leading-relaxed text-black">
                          {step}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty div for alternating sides */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'order-first' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProcess;