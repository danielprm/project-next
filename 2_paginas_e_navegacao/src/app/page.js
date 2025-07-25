import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* aula 1 - navegação */}
        <h1>home</h1>
        <Link href="/sobre">sobre</Link>

        {/* aula 2 - dados dinamicos */}
        <h1>Acessar posts</h1>
        <Link href="/posts">Posts</Link>
      </main>
    </div>
  );
}
