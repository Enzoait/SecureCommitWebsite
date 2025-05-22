import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Section from "../components/Section";
import { sampleCode, outputFile } from "@/utils/sampleCode";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Section
      textAlign="left"
      textTitle="Write a simple comment"
      textContent={
        <>Start by writing a simple comment or text next to the line containing the sensitive info you don't want to appear in your next commit.</>
      }
      tabTitle="youtubeApi.js"
      logoPath="js.png"
      defaultLangage="javascript"
      sampleCode={sampleCode}
      tips={false}
      picture={false}
      />
      <Section
      textAlign="right"
      textTitle="Run Scan Workspace command"
      textContent={
        <>Once you're done writing your code, before you commit your changes, quickly run the Scan Workspace command to find any secrets that shouldn't appear in your commit.</>
      }
      tips={false}
      picture={false}
      />
      <Section
      textAlign="left"
      textTitle="Open the generated file"
      textContent={
        <>If any secure-commit text/comment is found anywhere in the workspace, the files containing the text/comment will be added to a generated file SECURE_COMMIT_FLAGGED_FILES.md</>
      }
      tabTitle="SECURE_COMMIT_FLAGGED_FILES.md"
      logoPath="markdown-4.png"
      defaultLangage="markdown"
      sampleCode={outputFile}
      tips={true}
      picture={false}
      />
      <Footer />
    </>
  );
}
