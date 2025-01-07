"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import ShineBorder from "@/components/ui/shine-border";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  const containerRef1 = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg py-10 xl:p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-20">
          <Circle ref={div1Ref}>
            <Icons.user />
          </Circle>
                <div className="flex flex-col xl:flex-row  justify-between gap-12">
                <div ref={div3Ref} className="z-10 border-2 flex bg-background rounded-full items-center h-auto pl-1 pr-6 gap-2">
                    <div className="flex bg-primary-foreground dark:bg-muted rounded-full w-14 h-14 items-center justify-center"><Icons.checkout /></div>
                    <div className="flex flex-col py-2">
                        <p className="text-lg font-medium text-primary">Checkout Page</p>
                        <p className="text-sm text-muted-foreground">Checkout for clients</p>
                    </div>
                </div>
                <div className="z-10 border-2 flex bg-background rounded-full items-center h-auto pl-1 pr-6 gap-2">
                    <div className="flex bg-primary-foreground dark:bg-muted rounded-full w-14 h-14 items-center justify-center"><Icons.team /></div>
                    <div className="flex flex-col py-2">
                        <p className="text-lg font-medium text-primary">Processing Team</p>
                        <p className="text-sm text-muted-foreground">The whole work environment</p>
                    </div>
                </div>
                <div ref={div4Ref} className="z-10 border-2 flex bg-background rounded-full items-center h-auto pl-1 pr-6 gap-2">
                    <div className="flex bg-primary-foreground dark:bg-muted rounded-full w-14 h-14 items-center justify-center"><Icons.safe /></div>
                    <div className="flex flex-col py-2">
                        <p className="text-lg font-medium text-primary">Merchant's Account</p>
                        <p className="text-sm text-muted-foreground">Cabinet, orders history</p>
                    </div>
                </div>
            </div>
          <Circle ref={div2Ref}>
            <Icons.merchant />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        reverse
      />
    </div>
  );
}

const Icons = {
  merchant: () => (
<svg 
xmlns="http://www.w3.org/2000/svg" 
width="24" 
height="24" 
viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M7.435 1.25h9.13c.57 0 1.054 0 1.453.041c.426.044.82.14 1.192.37c.371.23.633.539.863.9c.215.34.432.772.687 1.282l.016.033q.015.03.027.06l1.403 3.547c.168.423.353.95.407 1.488c.055.552-.02 1.183-.453 1.73a2.75 2.75 0 0 1-1.41.945v9.604H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.25v-9.604a2.75 2.75 0 0 1-1.41-.944c-.432-.548-.508-1.18-.453-1.73c.054-.54.24-1.066.406-1.489l1.404-3.548l.027-.06l.016-.032c.255-.51.471-.943.687-1.282c.23-.361.492-.67.863-.9c.372-.23.766-.326 1.191-.37c.4-.041.884-.041 1.454-.041M18 10.888a2.75 2.75 0 0 0 1.25.758v9.604h-4v-2.782c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.273-.963a2.25 2.25 0 0 0-.824-.824c-.307-.177-.633-.243-.962-.273c-.312-.028-.691-.028-1.13-.028h-.065c-.44 0-.82 0-1.13.028c-.33.03-.656.096-.963.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.783h-4v-9.603a2.75 2.75 0 0 0 1.25-.76a2.74 2.74 0 0 0 2 .863c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863c.788 0 1.499-.331 2-.863M10.25 21.25h3.5V18.5c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.058-.348-.079A13 13 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.274.274c-.024.04-.059.123-.079.348c-.021.235-.022.546-.022 1.027zM6.75 9a1.25 1.25 0 0 0 2.5 0a.75.75 0 0 1 1.5 0a1.25 1.25 0 0 0 2.5 0a.75.75 0 0 1 1.5 0a1.25 1.25 0 0 0 2.5 0a.75.75 0 0 1 1.5 0a1.25 1.25 0 0 0 2.232.773c.114-.144.17-.342.138-.652c-.032-.322-.151-.688-.308-1.086L19.42 4.517c-.268-.535-.447-.89-.613-1.15c-.16-.252-.274-.361-.386-.43c-.111-.07-.26-.123-.557-.154c-.314-.032-.72-.033-1.336-.033H7.472c-.617 0-1.023 0-1.336.033c-.297.031-.446.085-.557.154s-.226.178-.386.43c-.167.26-.345.615-.613 1.15L3.188 8.035c-.157.398-.276.764-.308 1.086c-.031.31.024.508.138.652A1.25 1.25 0 0 0 5.25 9a.75.75 0 0 1 1.5 0" clip-rule="evenodd"/>
</svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),

  team: () => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24"
  fill="hsl(24.6, 94.9%, 53.1%)"
  viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M5.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/>
  <path d="M15 2.25a.75.75 0 0 0 0 1.5a2.25 2.25 0 0 1 0 4.5a.75.75 0 0 0 0 1.5a3.75 3.75 0 1 0 0-7.5"/>
  <path fill-rule="evenodd" d="M3.678 13.52c1.4-.8 3.283-1.27 5.322-1.27s3.922.47 5.322 1.27c1.378.788 2.428 1.99 2.428 3.48s-1.05 2.692-2.428 3.48c-1.4.8-3.283 1.27-5.322 1.27s-3.922-.47-5.322-1.27C2.3 19.692 1.25 18.49 1.25 17s1.05-2.692 2.428-3.48m.744 1.303C3.267 15.483 2.75 16.28 2.75 17s.517 1.517 1.672 2.177C5.556 19.825 7.173 20.25 9 20.25s3.444-.425 4.578-1.073c1.155-.66 1.672-1.458 1.672-2.177s-.517-1.517-1.672-2.177C12.444 14.175 10.827 13.75 9 13.75s-3.444.425-4.578 1.073" clip-rule="evenodd"/>
  <path d="M18.16 13.267a.75.75 0 0 0-.32 1.466c.792.173 1.425.472 1.843.814s.567.677.567.953c0 .25-.12.545-.453.854c-.335.311-.85.598-1.513.798a.75.75 0 1 0 .432 1.437c.823-.248 1.558-.631 2.102-1.136c.546-.507.932-1.174.932-1.953c0-.865-.474-1.588-1.117-2.114c-.644-.527-1.51-.908-2.472-1.119"/>
  </svg>
  ),


  checkout: () => (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24"
    fill="hsl(24.6, 94.9%, 53.1%)"
    viewBox="0 0 24 24"><path 
    fill-rule="evenodd" 
    d="M7.099 1.25H16.9c1.017 0 1.717 0 2.306.204a3.8 3.8 0 0 1 2.348 2.412l-.713.234l.713-.234c.196.597.195 1.307.195 2.36v14.148c0 1.466-1.727 2.338-2.864 1.297a.196.196 0 0 0-.271 0l-.484.442c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0l-.483-.442a.196.196 0 0 0-.272 0c-1.137 1.04-2.864.169-2.864-1.297V6.227c0-1.054 0-1.764.195-2.361a3.8 3.8 0 0 1 2.348-2.412c.59-.205 1.289-.204 2.306-.204m.146 1.5c-1.221 0-1.642.01-1.96.121A2.3 2.3 0 0 0 3.87 4.334c-.111.338-.12.784-.12 2.036v14.004c0 .12.059.192.134.227a.2.2 0 0 0 .11.018a.2.2 0 0 0 .107-.055a1.695 1.695 0 0 1 2.296 0l.483.442a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0l.483-.442a1.695 1.695 0 0 1 2.296 0c.043.04.08.052.108.055a.2.2 0 0 0 .109-.018c.075-.035.135-.108.135-.227V6.37c0-1.252-.01-1.698-.12-2.037a2.3 2.3 0 0 0-1.416-1.462c-.317-.11-.738-.12-1.959-.12zM15 7.44a.75.75 0 0 1 .06 1.06l-3.572 4a.75.75 0 0 1-1.119 0l-1.428-1.6a.75.75 0 0 1 1.118-1l.87.974l3.012-3.373A.75.75 0 0 1 15 7.44M6.75 15.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
    </svg>
  ),

  safe: () => (
<svg 
xmlns="http://www.w3.org/2000/svg" 
width="24" height="24"
fill="hsl(24.6, 94.9%, 53.1%)" 
viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5m-5 4.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25m3.47 1.22a.75.75 0 0 1 1.06 0l1 1q.065.065.11.14c.401-.23.865-.36 1.36-.36s.959.13 1.36.36a1 1 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a1 1 0 0 1-.14.11c.23.401.36.865.36 1.36s-.13.959-.36 1.36q.075.045.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a1 1 0 0 1-.11-.14c-.401.23-.865.36-1.36.36s-.959-.13-1.36-.36a1 1 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a1 1 0 0 1 .14-.11a2.74 2.74 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a1 1 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06M14 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" 
clip-rule="evenodd"/>
</svg>
  ),
};
