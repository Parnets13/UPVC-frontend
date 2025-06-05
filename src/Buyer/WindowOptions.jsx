
const WindowOptions = () => {
  const options = ['Double Hung', 'Casement', 'Sliding', 'Bay & Bow', 'Custom Shapes']
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-black">Available Window Options</h3>
      <p className="text-gray-700 mb-6">Choose from our wide range of window styles and customization options.</p>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center p-3 border-b border-gray-100">
            <FiCheckCircle className="text-black mr-3" />
            <span className="text-gray-800">{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default WindowOptions;