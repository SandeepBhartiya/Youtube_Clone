import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
import { VideoGrid } from "@/components/VideoGrid";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <VideoCard title={"Let begin our new Adventure."} image={"skyrim.jpg"} author={"Sandeep"} view={"52M"}  timestamps={"1 day ago"}></VideoCard>
       */}
       <VideoGrid/>
    </div>
  );
}
