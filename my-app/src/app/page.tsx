import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Section from "../components/Section";

export default function Home() {
  return <>
    <Header/>
    <Banner/>
    <Section textAlign="left"/>
    <Section textAlign="right"/>
    <Footer/>
    </>;
}
