import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
