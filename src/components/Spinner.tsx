
const Spinner = () => (
  <div className="flex items-center justify-center h-full w-full">
    <div 
      className="w-10 h-10 border-4 border-gray-300 border-t-[#03bd4d] rounded-full animate-spin"
      style={{ 
        borderTopColor: "#03bd4d",
        borderRightColor: "transparent",
        borderBottomColor: "transparent", 
        borderLeftColor: "transparent"
      }}
    />
  </div>
);

export default Spinner;
