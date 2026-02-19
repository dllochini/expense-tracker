

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen flex mx-auto">
      
      <div className="hidden md:block w-1/2">
        <img
          src="https://t3.ftcdn.net/jpg/06/18/60/30/360_F_618603059_lhHvL1vLRoZuSsg08mDDRcu6woibITvo.jpg"
          alt="Left Side"
          className="object-cover w-full h-full align-left"
        />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <SignIn />
      </div>

    </div>
  );
}
