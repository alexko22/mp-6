// Alex Olson | alexko@bu.edu
// page.tsx - main page file containing my components

import SignIn from "@/components/sign-in";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex w-3/4 m-auto flex-col align-items-center bg-gray-800 min-h-screen">
        <Header />
        <SignIn/>
    </div>
  );
}
