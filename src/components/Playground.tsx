import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { useRef } from "react";
import MediaBetweenText from "../fancy/components/blocks/media-between-text";
import useScreenSize from "../hooks/use-screen-size";

export const Playground = () => {
  // Ensure you initialize your containerRef if needed
  const containerRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();
  

  return (
    <section
      id="playground"
      className="w-screen h-[800px] sm:h-[75vh] relative bg-background"
    >
      <div className="container px-6 h-full">
        <div className="h-full flex items-center justify-center my-auto">
          <Tabs
            defaultValue="1"
            className="w-full h-full transition-all"
          >
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="1">
                1
              </TabsTrigger>
              <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="2">
                2
              </TabsTrigger>
              <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="3">
                3
              </TabsTrigger>
              <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="4">
                4
              </TabsTrigger>
            </TabsList>
            <TabsContent className="h-full" value="1">
              <div className="w-full h-full rounded-md bg-muted p-10">
              <div className="w-full h-full flex flex-col items-center justify-center bg-background">
                <a href="https://www.instagram.com/p/C3oL4euoc2l/?img_index=1" target="_blank" rel="noreferrer">
                <MediaBetweenText
                    firstText="that's a nice ("
                    secondText=") chair!"
                    mediaUrl={"https://cdn.cosmos.so/90e2192e-7bd4-44af-96ae-05cd955c0cfb?format=jpeg"}
                    mediaType="image"
                    triggerType="hover"
                    mediaContainerClassName="w-full h-[30px] sm:h-[100px] overflow-hidden mx-px mt-1 sm:mx-2 sm:mt-4" 
                    className="cursor-pointer sm:text-6xl text-2xl text-[#ff5941] lowercase font-light flex flex-row items-center justify-center w-full"
                    animationVariants = {{
                        initial: { width: 0 },
                        animate: { width: screenSize.lessThan("sm") ? "30px" : "100px", transition: { duration: 0.4, type: "spring", bounce: 0 }  },
                    }}
                />
                </a>
            </div>
              </div>
            </TabsContent>
            <TabsContent className="h-full" value="2">
              <div className="w-full h-full rounded-md bg-muted p-10">
2
              </div>
            </TabsContent>
            <TabsContent className="h-full" value="3">
              <div className="w-full h-full rounded-md bg-muted p-10">
3
              </div>
            </TabsContent>
            <TabsContent className="h-full" value="4">
              <div className="w-full h-full rounded-md bg-muted p-10">
4
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};