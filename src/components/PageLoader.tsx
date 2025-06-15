
const PageLoader = () => (
  <div className="flex items-center justify-center h-64 w-full">
    <div 
      className="w-8 h-8 border-4 border-gray-300 border-t-[#03bd4d] rounded-full animate-spin"
      style={{ 
        borderTopColor: "#03bd4d",
        borderRightColor: "transparent",
        borderBottomColor: "transparent", 
        borderLeftColor: "transparent"
      }}
    />
  </div>
);

export default PageLoader;
