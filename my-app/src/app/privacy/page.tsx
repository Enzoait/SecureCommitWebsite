import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleBanner from "../../components/TitleBanner";
import TextPage from "@/components/TextPage";
import { privacyPolicy } from "@/constants/TextConstants";

export default function Terms() {
  return (
    <>
      <Header />
      <TitleBanner title="Privacy Policy" />
      <TextPage
        titlesAndContents={privacyPolicy}
        effectiveDate="05/21/2025"
        type="Privacy Policy"
      ></TextPage>
      <Footer />
    </>
  );
}
