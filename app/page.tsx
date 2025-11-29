// Alex Olson | alexko@bu.edu
// page.tsx - main page file containing my components

import SignIn from "@/components/sign-in";
import Header from "@/components/Header";

// main Home component Function containing header and OAuth components...
// referred to documentation for the min-h-screen tailwind property to maximize component height to screen
export default function Home() {
  return (
    <div className="flex w-3/4 m-auto flex-col align-items-center bg-gray-800 min-h-screen">
        <Header />
        <SignIn/>
    </div>
  );
}
