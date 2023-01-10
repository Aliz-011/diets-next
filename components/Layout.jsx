import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="px-4 md:px-16">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
