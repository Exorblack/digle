import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
interface services{
  id:string
}
const Words:React.FC<services> = ({id}) => {
  const words = ["awesome", "great", "beautiful", "modern","customized"];

  return (
    <div className=" py-10 flex justify-center items-center px-4" id={id}>
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Create 
        <FlipWords words={words} /> <br />
        websites with Digle
      </div>
    </div>
  );
}
export default Words