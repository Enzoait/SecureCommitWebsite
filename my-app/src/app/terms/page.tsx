import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-[300px] border-b-2 border-b-[#b15efa] ">
        <p className="text-[#b15efa] text-6xl text-center">
          Terms & Conditions
        </p>
      </div>
      <Footer />
    </>
  );
}
