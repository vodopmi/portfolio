import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "../fancy/parallax-floating"

import { View } from "lucide-react"

import { WistiaPlayer } from "@wistia/wistia-player-react";

const ParallaxDemo = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("div", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
      className="flex w-full h-full justify-center items-center overflow-hidden"
      ref={scope}
    >

      <Floating sensitivity={-1} className="staic overflow-hidden">
        <FloatingElement depth={0.5} className="hidden sm:block top-[45%] left-[5%] sm:left-[26%]">
            <div className="z-10  w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
            <WistiaPlayer mediaId={"9ijov1rqln"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
            </div>
        </FloatingElement>
        <FloatingElement depth={1} className="top-[42%] sm:top-[38%] left-[5%] sm:left-[19%]">
          <div className=" w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
            <WistiaPlayer mediaId={"x6u7z8x5qb"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
        </div>
        </FloatingElement>
        <FloatingElement depth={2} className="top-[12%] left-[98%] sm:left-[93%]">
          <div className=" w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
          <WistiaPlayer mediaId={"i01jxhloj7"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
          </div>
        </FloatingElement>
        <FloatingElement depth={1} className="top-[32%] left-[95%] sm:left-[83%]">
          <div className=" w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
          <WistiaPlayer mediaId={"youe2tzd9h"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
          </div>
        </FloatingElement>

        <FloatingElement depth={1} className="top-[12%] left-[-10%] sm:left-[8%]">
            <div className=" w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
                <WistiaPlayer mediaId={"30ctolj7vv"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
            </div>
        </FloatingElement>
        <FloatingElement depth={2} className="hidden sm:block top-[80%] left-[87%]">
          <div className=" w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
          <WistiaPlayer mediaId={"xeg9rijjsp"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
          </div>
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-0 sm:left-[15%]">
          <div className=" w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
          <WistiaPlayer mediaId={"9s8vlpttar"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
          </div>
        </FloatingElement>
        <FloatingElement depth={1} className="top-[67%] left-[95%] sm:left-[75%]">
          <div className=" w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform">
          <WistiaPlayer mediaId={"9cgejdfiz2"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
          </div>
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default ParallaxDemo
