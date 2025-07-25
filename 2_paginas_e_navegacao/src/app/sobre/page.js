import Link from "next/link";

const SobrePage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1>pagina de sobre</h1>

      <Link href="/">home</Link>
    </div>

  );
};

export default SobrePage;
