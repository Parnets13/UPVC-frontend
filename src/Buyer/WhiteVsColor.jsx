import { FiCheckCircle } from "react-icons/fi";
import dummyVideo from "../assets/dummy.mp4";

const WhiteVsColor = () => {

  const comparisonData = [
    {
      category: "Appearance",
      white: "Classic, clean look, commonly used & widely accepted",
      laminated: "Offers a variety of colors and textures; enhances aesthetics and matches modern designs",
    },
    {
      category: "Cost",
      white: "More affordable; considered the base standard",
      laminated: "Higher cost due to added lamination process",
    },
    {
      category: "UV Resistance & Fading",
      white: "Good UV resistance, but can show yellowing over very long periods if poor quality",
      laminated: "High UV protection; resistant to fading & discoloration",
    },
    {
      category: "Maintenance",
      white: "Easier to clean but may show dirt & stains more visibly",
      laminated: "Hides dirt better but may require gentler cleaning to preserve finish",
    },
    {
      category: "Heat Resistance",
      white: "Reflects more sunlight, tends to stay cooler",
      laminated: "Darker shades may absorb more heat; advanced lamination mitigates this with UV resistant layers",
    },
    {
      category: "Scratch Visibility",
      white: "Minor scratches will be less noticeable",
      laminated: "Scratches can be more visible, especially on darker shades & textured finishes",
    },
    {
      category: "Availability",
      white: "Readily available with shorter lead times",
      laminated: "May have longer delivery times due to customization",
    },
  ];

  // return (
  //   <div className="">
  //     <div className="flex flex-col justify-center items-center">
  //       <h3 className="mb-2 text-3xl font-medium text-black">
  //         White vs Colored Windows
  //       </h3>
  //       <p className="text-gray-700 mb-6">
  //         Compare the benefits of classic white versus custom colored window
  //         frames.
  //       </p>
  //     </div>
  //       <section className="mb-16">
  //         <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl bg-black">
  //           <video
  //             className="w-full h-full object-cover"
  //             controls
  //             playsInline
  //             autoPlay
  //           >
  //             <source src={dummyVideo} type="video/mp4" />
  //           </video>
  //         </div>
  //       </section>
  //     <div className="flex flex-col md:flex-row gap-6">
  //       <div className="flex-1 border border-gray-200 p-4 rounded-lg">
  //         <div className="h-48 bg-gray-100 rounded mb-4"></div>
  //         <h4 className="font-medium text-black mb-2">White Windows</h4>
  //         <ul className="text-gray-600 space-y-2 text-sm">
  //           <li className="flex items-start">
  //             <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
  //             <span>Classic, timeless look</span>
  //           </li>
  //           <li className="flex items-start">
  //             <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
  //             <span>Lower cost option</span>
  //           </li>
  //           <li className="flex items-start">
  //             <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
  //             <span>Matches most home styles</span>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="flex-1 border border-gray-200 p-4 rounded-lg">
  //         <div className="h-48 bg-gray-100 rounded mb-4"></div>
  //         <h4 className="font-medium text-black mb-2">Colored Windows</h4>
  //         <ul className="text-gray-600 space-y-2 text-sm">
  //           <li className="flex items-start">
  //             <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
  //             <span>Customizable to your home</span>
  //           </li>
  //           <li className="flex items-start">
  //             <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
  //             <span>Enhanced curb appeal</span>
  //           </li>
  //           <li className="flex items-start">
  //             <FiCheckCircle className="text-black mr-2 mt-0.5 flex-shrink-0" />
  //             <span>Premium finish options</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* <h3 className="text-3xl font-medium text-black mb-3">
            
          </h3> */}
          <h3 className="text-3xl font-light  tracking-tight text-black sm:text-4xl">
              <span className="font-medium"> White </span>vs
           <span className="font-medium"> Colored Windows </span>
          </h3>
          <div className="mt-2 h-0.5 w-20 mb-2 bg-black mx-auto"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Compare the benefits of classic white versus custom colored window frames.
          </p>
        </div>

        {/* Video Section */}
        <section className="mb-16">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              muted
            >
              <source src={dummyVideo} type="video/mp4" />
            </video>
          </div>
        </section> 

        {/* Detailed Comparison Table */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h4 className="text-2xl font-medium text-black mb-6 text-center">
            Detailed Feature Comparison
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-500 w-1/4">Category</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500 w-3/8">White Windows</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500 w-3/8">Colored Windows</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-4 px-4 font-medium text-gray-900">{item.category}</td>
                    <td className="py-4 px-4 text-gray-700">{item.white}</td>
                    <td className="py-4 px-4 text-gray-700">{item.laminated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Decision Helper */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h4 className="text-2xl font-medium text-black mb-4 text-center">
            Which One Should You Choose?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h5 className="font-medium text-black text-lg mb-3">Choose White If:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span className="text-gray-700">You prefer a classic, timeless look</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span className="text-gray-700">Budget is a primary concern</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span className="text-gray-700">You want quick availability</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h5 className="font-medium text-black text-lg mb-3">Choose Colored If:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span className="text-gray-700">You want to match your home's unique style</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span className="text-gray-700">Enhanced curb appeal is important</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span className="text-gray-700">You prefer premium, customized finishes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteVsColor;
