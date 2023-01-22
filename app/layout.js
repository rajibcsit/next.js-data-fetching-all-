import Navbar from "./shared/Navbar";
function layout({ children }) {
  return (
    <html>
      <head></head>
      <body className="wrapper">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default layout;
