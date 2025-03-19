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
      className="container py-24 sm:py-32 space-y-8 bg-background">
            {/* <div className="text-center mx-auto max-w-4xl py-8 sm:py-6 lg:py-12 px-6">
                <h2 className="text-6xl font-bold text-muted-">Projects</h2>
                <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                    A closer look at my recent work crafting design systems and performance-focused solutions for SaaS products.
                </p>
            </div> */}
            <div className="flex flex-col space-y-10 items-center">
                    
                <div className="w-full max-w-7xl flex flex-col gap-20">
                    {/* Project 1 V2*/}
                <div className="w-full max-w-7xl bg-slate-100 bg-opacity-30 dark:bg-card dark:bg-opacity-100 border border-muted rounded-[1rem] flex flex-col items-center gap-20 px-8 py-10">
                            <div className="flex flex-col items-left sm:items-center text-left sm:text-center gap-5 max-w-2xl">
                                <h3 className="text-xl">FINANCE, P2P, CRYPTO</h3>
                                <h2 className="text-4xl font-semibold sm:text-5xl sm:font-medium max-w-3xl"><span className="text-primary">P2P</span> Payment Solution</h2>                        
                                <p className="max-w-lg text-lg">
                                    I led a comprehensive redesign of the platform, transforming engineer-built interfaces into a user-friendly experience.
                                </p>
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
                                        className="w-auto rounded-full text-md h-9 px-5 mt-5 text-card-foreground bg-transparent hover:text-accent dark:hover:text-accent-foreground border border-card-foreground hover:border-primary hover:cursor-not-allowed">View Project ↗</Button>
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
                                <div className="flex self-center w-full max-w-7xl">
                                    <AnimatedBeamDemo/>
                                </div>
                                <div className="self-center flex sm:flex-row w-full max-w-5xl gap-[1rem] sm:gap-[2rem] items-baseline justify-center">
                                    <div className="flex-grow-[2]">
                                        <img src='https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/vp-1440-9uuJ0VNrRYe8yeGhFS8Q14VuhlO4rD.png' alt="Description" className="w-full h-auto rounded-xl shadow-lg" />
                                    </div>
                                    <div className="flex-grow">
                                        <img src='https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/vp-mobile-qrFqZZTIsVJOXFeZQzYfT96BBitEbR.png' alt="Description" className="w-full h-auto rounded-xl shadow-lg" />
                                    </div>
                                </div>
                </div>
                    {/* Project 2 V2*/}
                <div className="w-full max-w-7xl bg-slate-100 bg-opacity-30 dark:bg-card dark:bg-opacity-100 border border-muted rounded-[1rem] flex flex-col items-center gap-20 px-8 py-10">
                            <div className="flex flex-col items-left sm:items-center text-left sm:text-center gap-5 max-w-2xl">
                                <h3 className="text-md sm:text-xl">ADS, AI, MEDIA PRODUCTION</h3>
                                <h2 className="text-4xl font-semibold sm:text-5xl sm:font-medium max-w-3xl"><span className="bg-green-500 px-2 sm:px-6 rounded-lg">Ad</span> Production & Management <span>🎯</span> Platform</h2>                        
                                <p className="max-w-lg text-lg">
                                    Delivered 5 new features including Performance Hub for ad analytics, Actor Hub for talent management, Media Library, Shotlists, and Ideation tools.
                                </p>
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
                                        className="w-auto rounded-full text-md h-9 px-5 mt-5 text-card-foreground bg-transparent hover:text-accent dark:hover:text-accent-foreground border border-card-foreground hover:border-primary hover:cursor-not-allowed">View Project ↗</Button>
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
                            <div className="w-full flex relative self-center max-w-5xl">
                                <ChartDemo />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 w-full max-w-7xl">
                                <div className="w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                                    <WistiaPlayer mediaId={"9ijov1rqln"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                                </div>
                                <div className="w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                                    <WistiaPlayer mediaId={"x6u7z8x5qb"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                                </div>
                                <div className="w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                                    <WistiaPlayer mediaId={"9cgejdfiz2"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                                </div>
                                <div className="w-full hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl">
                                    <WistiaPlayer mediaId={"30ctolj7vv"}   do-not-track="true" controls-visible-on-load="false" silent- ="true" rounded-player="24"/>
                                </div>
                            </div>
                </div>
                    {/* Project 3 */}
                    <div className="w-full max-w-7xl bg-slate-100 bg-opacity-30 dark:bg-card dark:bg-opacity-100 border border-muted rounded-[1rem] flex flex-col items-center gap-20 px-8 py-10">
                    <a href="https://photo-portfolio-coral.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex-grow">
                            <img src='https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/Screenshot%202025-03-04%20120915-FcZAxKAYbPJ35IVSeKSiH9qFPzbVNM.png' alt="Description" className="w-full max-w-[600px] h-auto rounded-xl shadow-lg" />
                        </div>
                        <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold text-left text-muted-foreground max-w-3xl"><span className="text-card-foreground">Photo Portfolio</span> + Admin Panel</h2>
                        <p className="max-w-lg text-sm text-left">
                        I designed and developed a personal portfolio and admin panel for content management. Started with a template, modified and improved to be more flexible and fit Fedor's needs.
                        </p>
                        <a href="https://photo-portfolio-coral.vercel.app/" target="_blank" rel="noopener noreferrer" className="my-2">
                            <Button 
                            className="w-auto rounded-full text-md h-9 px-5 mt-5 text-card-foreground bg-transparent hover:text-blue-500 hover:border-blue-500 hover:bg-transparent border border-card-foreground"
                            >Visit Fedor's Portfolio ↗</Button>
                        </a>
                        </div>
                    </div>
                    </a>
                </div>
                </div>

            </div>        
    </section>
    );
  }