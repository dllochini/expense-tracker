import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
//default page
//for a new folder add _. Otherwise, it automatically becomes a route
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
