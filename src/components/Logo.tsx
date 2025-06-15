
const Logo = () => (
  <a href="/" className="flex items-center" aria-label="Home">
    <img
      src="logo.svg"
      alt="Logo"
      className="h-8 w-8 rounded"
      draggable={false}
      style={{
        boxShadow: "0 2px 16px #03bd4db0",
        borderRadius: "6px",
        background: "#111"
      }}
    />
  </a>
);

export default Logo;
