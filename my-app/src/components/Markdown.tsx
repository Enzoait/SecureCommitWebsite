import TitleBanner from "../components/TitleBanner";
import ReactMarkdown from "react-markdown";

export default function MarkdownComponent({ content }: { content: string }) {
  return (
    <>
      <TitleBanner title="Documentation" />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <h2 className="mt-4 text-lg font-semibold mb-4">Extension Commands</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
}
