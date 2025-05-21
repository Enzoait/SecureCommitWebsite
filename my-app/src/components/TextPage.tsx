export default function TextPage(props: {
  titlesAndContents: string[][];
  effectiveDate: string;
  type: string;
}) {
  return (
    <>
      <p className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        Effective Date: {props.effectiveDate} <br />
        By installing or using the SecureCommit extension (the “Extension”), you
        agree to the following {props.type} .
      </p>
      {props.titlesAndContents.map(([title, content], index) => (
        <div
          key={index}
          className="flex flex-col gap-2 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"
        >
          <p className="font-bold text-2xl">{title}</p>
          <p className="mb-2">{content}</p>
        </div>
      ))}
    </>
  );
}
