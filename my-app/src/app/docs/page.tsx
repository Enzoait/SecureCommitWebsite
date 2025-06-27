import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarkdownComponent from "@/components/Markdown";
import { DocsConstant } from "@/constants/DocsConstant";

export default function Docs() {
  return (
    <>
      <Header />
      <MarkdownComponent content={DocsConstant.content} />
      <Footer />
    </>
  );
}
