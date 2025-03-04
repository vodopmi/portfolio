import ParallaxDemo from "./fancy/parallax-demo";
import { AnimatedBeamDemo } from "./magic/animated-beam";
import { Button } from "./ui/button";
import { ChartDemo } from "./ui/chart-demo";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

import { toast, useToast } from "@/hooks/use-toast"
import TextReveal from "./ui/text-reveal";

export const Projects = () => {

    return (
      <section id="projects" 
      className="w-screen py-24 sm:py-32 space-y-8 bg-background">
            {/* <div className="text-center mx-auto max-w-4xl py-8 sm:py-6 lg:py-12 px-6">
                <h2 className="text-6xl font-bold text-muted-">Projects</h2>
                <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                    A closer look at my recent work crafting design systems and performance-focused solutions for SaaS products.
                </p>
            </div> */}
            <div className="flex flex-col space-y-[-40px] items-center">
                    {/* Project 1 */}
                <div className="w-full max-w-[2560px] bg-muted rounded-[2.5rem] flex flex-col items-start space-y-10 sm:space-y-20 p-8">
                    <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between w-full gap-5 order-2 sm:order-1 pt-10 sm:pt-0">
                        <div className="flex items-start gap-1">
                            <div className="rounded-full text-small border border-muted-foreground px-2.5">
                                <p>Finance</p>
                            </div>
                            <div className="rounded-full text-small border border-muted-foreground px-2.5">
                                <p>P2P</p>
                            </div>
                            <div className="rounded-full text-small border border-muted-foreground px-2.5">
                                <p>Crypto</p>
                            </div>
                        </div>
                        <p className="max-w-lg text-sm text-center sm:text-left">
                        I led a comprehensive redesign of the platform, transforming engineer-built interfaces into a user-friendly experience.
                        <br></br>
                        <br></br>I developed a custom design system to unify the payment page, merchant dashboard, team dashboard, and admin panel. Introduced a new back-office tool, streamlining operations and enhancing efficiency across the board.
                        <br></br>
                        <br></br>Boosted checkout conversion rates through UX optimization.
                        </p>
                    </div>
                    <div className="flex w-full justify-center order-1 sm:order-2">
                    <h2 className="text-7xl font-semibold text-center max-w-3xl"><span className="text-primary">P2P</span><br></br>Payment Solution</h2>
                    </div>
                    <div className="flex self-center order-3 pt-20 w-full max-w-7xl">
                        <AnimatedBeamDemo/>
                    </div>
                    <div className="self-center flex sm:flex-row order-4 py-20 w-full max-w-7xl gap-[1rem] sm:gap-[2rem] items-baseline justify-center">
  <div className="flex-grow-[2]">
    <img src='https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/vp-1440-9uuJ0VNrRYe8yeGhFS8Q14VuhlO4rD.png' alt="Description" className="w-full h-auto rounded-xl shadow-lg" />
  </div>
  <div className="flex-grow">
    <img src='https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/vp-mobile-qrFqZZTIsVJOXFeZQzYfT96BBitEbR.png' alt="Description" className="w-full h-auto rounded-xl shadow-lg" />
  </div>
</div>
                    {/* <div className="flex w-full justify-center text-9xl order-3">
                        <TextReveal text="Seamless Payments, Infinite Possibilities." className="text-9xl" />
                    </div> */}
                    <div className="flex w-full justify-center pb-36 order-last">
                    <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Button
                         onClick={() => {
                            toast({
                              title: "Thanks for your interest! 🤩",
                              description: "This page is currently under construction. Soon, you'll be able to see 👀 the full case.",
                            })
                          }}
                        className="w-auto rounded-full text-2xl h-16 px-8 text-white hover:text-primary bg-primary hover:border border-primary hover:cursor-not-allowed">View Project</Button>
                        </TooltipTrigger>
                        <TooltipContent className=" rounded-2xl">
                            <div className="w-full sm:w-80 flex flex-col gap-1 p-2">
                                <h5 className="text-md font-semibold text-primary">Thanks for your interest! 🤩</h5>
                                <p>This page is currently under construction. Soon, you'll be able to see 👀 the full case.</p>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                    </div>
                </div>
                                {/* Project 2 */}
                <div className="relative w-full max-w-[2560px] bg-blue-600 rounded-[2.5rem] flex flex-col items-start gap-5 p-8 text-card dark:text-white mt-[-200px]">
                {/* <div className="absolut">
                        <ParallaxDemo />
                    </div> */}
                    <div className="z-10 sm:z-0 flex flex-col relative items-center sm:items-start sm:flex-row sm:justify-between w-full gap-5 order-2 sm:order-1 pt-10 sm:pt-0">
                        <div className="flex items-start gap-1">
                            <div className="rounded-full text-small border dark:border-white px-2.5">
                                <p>Ads</p>
                            </div>
                            <div className="rounded-full text-small border dark:border-white px-2.5">
                                <p>AI</p>
                            </div>
                            <div className="rounded-full text-small border dark:border-white px-2.5">
                                <p>Media Production</p>
                            </div>
                        </div>
                        <p className="relative max-w-lg text-sm text-center sm:text-left">
                        Built a design system and refreshed the platform's look.
                        <br></br>
                        <br></br>Delivered 5 new features including Performance Hub for ad analytics, Actor Hub for talent management, Media Library, Shotlists, and Ideation tools. 
                        <br></br>
                        <br></br>Also led the Bootstrap to Ant.Design 5 redesign and developed helper apps for mobile and desktop.
                        </p>
                    </div>
                    <div className="z-10 sm:z-0 flex w-full justify-center order-1 sm:order-2 sm:mt-40">
                    <h2 className="text-5xl sm:text-7xl font-semibold text-center max-w-3xl"><span className="sm:bg-green-500 px-0 sm:px-6 rounded-3xl">Ad</span> Production and Management <span>🎯</span> Platform</h2>
                    </div>

                    <div className="flex flex-col gap-20 order-3 self-center sm:my-40 w-full max-w-7xl">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 w-full max-w-7xl">
                        <div className="z-10 w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                            <WistiaPlayer mediaId={"9ijov1rqln"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                        </div>
                        <div className="z-10 w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                            <WistiaPlayer mediaId={"x6u7z8x5qb"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                        </div>
                        <div className="z-10 w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                            <WistiaPlayer mediaId={"i01jxhloj7"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                        </div>
                        <div className="z-10 w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                            <WistiaPlayer mediaId={"30ctolj7vv"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                        </div>
                    </div>

                    <div className="z-10 w-full flex relative self-center order-3 max-w-7xl">
                        <ChartDemo />
                    </div>

                    </div>

                    <div className="z-10 sm:z-0 flex w-full justify-center  sm:mb-36 order-last">
                    <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Button 
                             onClick={() => {
                                toast({
                                  title: "Thanks for your interest! 🤩",
                                  description: "This page is currently under construction. Soon, you'll be able to see 👀 the full case.",
                                })
                              }}
                        className="w-auto rounded-full text-2xl h-16 px-8 text-white bg-green-500 hover:border border-white hover:cursor-not-allowed">View Project</Button>
                        </TooltipTrigger>
                        <TooltipContent className=" rounded-2xl">
                            <div className="w-full sm:w-80 flex flex-col gap-1 p-2">
                                <h5 className="text-md font-semibold text-primary">Thanks for your interest! 🤩</h5>
                                <p>This page is currently under construction. Soon, you'll be able to see 👀 the full case.</p>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                    </div>
                </div>

                    {/* Project 3 */}
                <div className="w-full max-w-[2560px] rounded-[2.5rem] flex flex-col items-center space-y-10 p-8 pt-[160px]">
                    <a href="https://photo-portfolio-coral.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="z-10 rounded-[1.5rem] grid grid-cols-1 sm:grid-cols-2 gap-8 bg-card border border-muted p-8">
                        <div className="flex-grow">
                            <img src='https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/Screenshot%202025-03-04%20120915-FcZAxKAYbPJ35IVSeKSiH9qFPzbVNM.png' alt="Description" className="w-full max-w-[600px] h-auto rounded-xl shadow-lg" />
                        </div>
                        <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold text-left text-primary max-w-3xl"><span className="text-card-foreground">Portfolio</span> + Admin Panel</h2>
                        <p className="max-w-lg text-sm text-left">
                        I designed and developed a personal portfolio and admin panel for content management. Started with a template, modified and improved to be more flexible and fit Fedor's needs.
                        </p>
                        <a href="https://photo-portfolio-coral.vercel.app/" target="_blank" rel="noopener noreferrer" className="my-2">
                            <Button 
                            className="w-auto rounded-full text-white hover:text-primary bg-primary hover:border border-primary"
                            >Visit Fedor's Portfolio</Button>
                        </a>
                        </div>
                    </div>
                    </a>
                </div>
            </div>        
    </section>
    );
  }