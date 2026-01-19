import { Button } from "@/components/ui/button";
import Image from "next/image";
//default page
export default function Home() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Button variant="outline">Get Started</Button>
    </div>
  );
}
