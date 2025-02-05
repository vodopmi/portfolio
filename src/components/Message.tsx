import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useRef } from "react";
import VariableFontCursorProximity from "@/components/fancy/variable-font-cursor-proximity"

export const Message = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="message"
    className="w-screen h-[800px] sm:h-screen relative bg-background"
    >
    <div className="container px-6 h-full">
    <div className="h-full flex items-center justify-center my-auto">
    <Tabs defaultValue="recruiters" className="w-full sm:w-[896px] h-[600px] transition-all">
      <TabsList className="w-full sm:w-auto mb-8 ">
        <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="recruiters">Recruiters</TabsTrigger>
        <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="managers">Managers</TabsTrigger>
        <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="designers">Designers</TabsTrigger>
        <TabsTrigger className="text-sm w-full px-0 sm:w-auto sm:px-4" value="engineers">Engineers</TabsTrigger>
      </TabsList>
      <TabsContent value="recruiters">
      <div className="w-full">
            <div className="text-4xl md:text-5xl lg:text-6xl" style={{ whiteSpace: 'pre-line' }}>
            <div
      className="w-full h-full items-center justify-center cursor-pointer relative overflow-hidden"
      ref={containerRef}
    >
      {/* this is the important stuff */}
      <div className="flex flex-col gap-8">
        <div>
        <VariableFontCursorProximity
          label={'I’m a digital designer with two years of experience building complex SaaS (2).'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
        <div>
        <VariableFontCursorProximity
          label={'Thrive in small (5-7) dev-teams where every contribution counts.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
    </div>
    </div>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="managers">
        <div className="w-full">
            < div className="text-4xl md:text-5xl lg:text-6xl" style={{ whiteSpace: 'pre-line' }}>
            <div
      className="w-full h-full items-center justify-center cursor-pointer relative overflow-hidden"
      ref={containerRef}
    >
      {/* this is the important stuff */}
      <div className="flex flex-col gap-8">
        <div>
        <VariableFontCursorProximity
          label={'I have understanding of product strategies and business needs.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
        <div>
        <VariableFontCursorProximity
          label={'I will partner closely with you to maximize our impact.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
    </div>
    </div>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="designers">
      <div className="w-full">
            <div className="text-4xl md:text-5xl lg:text-6xl" style={{ whiteSpace: 'pre-line' }}>
            <div
      className="w-full h-full items-center justify-center cursor-pointer relative overflow-hidden"
      ref={containerRef}
    >
      {/* this is the important stuff */}
      <div className="flex flex-col gap-8">
        <div>
        <VariableFontCursorProximity
          label={'I’m a systems thinker and detail oriented. I prefer to keep sheets clean and well-organized.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
        <div>
        <VariableFontCursorProximity
          label={'I will collaborate with you and learn from you.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
    </div>
    </div>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="engineers">
      <div className="w-full">
            <div className="text-4xl md:text-5xl lg:text-6xl" style={{ whiteSpace: 'pre-line' }}>
            <div
      className="w-full h-full items-center justify-center cursor-pointer relative overflow-hidden"
      ref={containerRef}
    >
      {/* this is the important stuff */}
      <div className="flex flex-col gap-8">
        <div>
        <VariableFontCursorProximity
          label={'I speak your language and provide clean pixel-perfect layouts with deep understanding of what is behind.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div>
        {/* <div>
        <VariableFontCursorProximity
          label={'Thrive in small (5-7) dev-teams where every contribution counts.'}
          className="leading-tight"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        /></div> */}
    </div>
    </div>
            </div>
        </div>
      </TabsContent>
    </Tabs>
    </div>
    </div>
    </section>
  );
};