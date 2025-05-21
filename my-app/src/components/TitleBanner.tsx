export default function SimpleBanner(props: { title: string }) {
  return (
    <div className="flex items-center justify-center w-full h-[400px] border-b-2 border-b-[#e8e8e8] dark:border-b-[#333]">
      <p className="text-[#b15efa] text-6xl text-center">{props.title}</p>
    </div>
  );
}
