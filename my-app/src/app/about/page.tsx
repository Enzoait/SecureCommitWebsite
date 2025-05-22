import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleBanner from "../../components/TitleBanner";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Header />
      <TitleBanner title="About" />
      <Section
        textAlign="left"
        textTitle="Get to know SecureCommit's developer"
        textContent={
          <>
            My name is Enzo, and I'm currently pursuing a{" "}
            <Link
              href="https://www.iim.fr/cursus/mastere-developpeur-full-stack/"
              target="_blank"
              className="text-[#b15efa] transition hover:text-[#caa0ef]"
            >
              Master's degree in Full-Stack Developement
            </Link>
            . I created SecureCommit, a Visual Studio Code extension that helps
            junior developers avoid revealing sensitive information in their
            commits.
          </>
        }
        tips={false}
        picture={true}
        image={
          <>
            <Image src="/aboutme.jpg" alt="" width={500} height={500} />
          </>
        }
      />
      <Section
        textAlign="right"
        textTitle="About me"
        textContent={
          <>
            🔭 I am currently studying at IIM Digital School in France
            <br />
            💼 I am currently working as a Full-Stack Developer Apprentice
            <br />
            📄 I have held positions as an Application Developer & Front-end
            Developer
            <br />
            🌱 I am currently learning: TypeScript, React, Next.js, Python
          </>
        }
        tips={false}
        picture={true}
        image={
          <>
            <Image src="/code.jpeg" alt="" width={500} height={500} />
          </>
        }
      />
      <Footer />
    </>
  );
}
