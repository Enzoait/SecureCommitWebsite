import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TitleBanner from "../../components/TitleBanner";
import TextPage from "@/components/TextPage";
import { termsAndConditions } from "@/constants/TextConstants";

export default function Terms() {
  return (
    <>
      <Header />
      <TitleBanner title="Terms & Conditions" />
      <TextPage
        titlesAndContents={termsAndConditions}
        effectiveDate="05/21/2025"
        type="Terms of Use (“Terms”)"
      ></TextPage>
      <Footer />
    </>
  );
}
