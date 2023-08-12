import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Slider from "@/Components/Slider";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-5xl  text-white">Hello World!</h1>
      <div className="bg-black h-screen text-white">
        <Header />
        <Cards />
        <Slider />
        <Footer />
      </div>
    </>
  );
}
