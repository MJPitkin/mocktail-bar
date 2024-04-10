import Image from "next/image";

export default function Home() {

  const greenBawkses = "w-96 h-48 bg-red-500 md:bg-cyan-500 lg:bg-lime-500"

  return (
    <main className="flex min-w-screen min-h-screen flex-col flex-wrap items-center justify-evenly p-24">
      <div>
        <h1>A Header for Homepage</h1>
      </div>
      {/* <div className={`${greenBawkses}`}></div>
      <div className={greenBawkses}></div>
      <div className={greenBawkses}></div>
      <div className={greenBawkses}></div>
      <div className={greenBawkses}></div>
      <div className={greenBawkses}></div> */}
    </main>
  );
}
