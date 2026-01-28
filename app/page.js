import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
//default page
//for a new folder add _. Otherwise, it automatically becomes a route
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}
