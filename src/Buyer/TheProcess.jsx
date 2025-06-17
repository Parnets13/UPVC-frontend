import { Link } from "react-router-dom";

const TheProcess = () => {
  const steps = [
    {
      title: "Design Selection",
      text: 'Choose your preferred design, dimensions, and quantity from our extensive catalog',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "Details Submission",
      text: 'Provide your contact and project details through our secure form',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "RFQ Distribution",
      text: 'Your request will be shared with our network of pre-vetted window manufacturers (maximum 6)',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "Instant Notifications",
      text: 'Get real-time updates when manufacturers express interest in your project',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "Profile Review", 
      text: 'Access detailed business profiles of interested manufacturers', 
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "Relax & Wait",
      text: 'Our team handles all coordination while you wait for responses',
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "Professional Measurement", 
      text: 'Selected fabricators will visit to take precise measurements', 
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a7f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: "Order Placement",
      text: 'Compare competitive quotes and finalize your order with confidence',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 sm:text-5xl">
            Our <span className="text-black">Seamless</span> Process
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            From selection to installation - we make window shopping simple and efficient
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-black transform -translate-x-1/2"></div>
          
          {/* Process steps */}
          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
  {/* Text content */}
  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'} z-10`}>
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold text-xl mr-4">
          {index + 1}
        </div>
        <h3 className="text-2xl font-semibold font-poppins text-gray-900">{step.title}</h3>
      </div>
      <p className="text-lg text-gray-600 font-inter pl-16">{step.text}</p>
    </div>
  </div>

  {/* Connector line */}
  <div className="hidden lg:block absolute top-1/2 left-1/2 w-12 h-1 bg-black transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

  {/* Image content */}
  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'} z-10`}>
    <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <img 
        src={step.image} 
        alt={`Step ${index + 1}: ${step.title}`}
        className="w-full h-64 lg:h-80 object-cover"
        loading="lazy"
      />
    </div>
  </div>
</div>

              );
            })}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/window-options" className="inline-block">
            <button className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              BUY NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheProcess;