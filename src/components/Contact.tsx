import { Button } from "./ui/button";
import { MailOpen } from "lucide-react";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

interface ContactLinksProps {
    name: string;
    url: string;
    key: string;
  }

    const contactLinks: ContactLinksProps[] = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mikhail-vodopianov-b9506723a/",
            key: "1"
        },
        // {
        // name: "Email Me",
        // url: "mailto:vodopmi@icloud.com",
        // },
        {
            name: "Pinterest",
            url: "https://www.pinterest.com/vodopmi/",
            key: "2"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/vodopmi/",
            key: "3"
        },
        {
            name: "Telegram",
            url: "https://t.me/vodopmi",
            key: "4"
        },
    ];

export const Contact = () => {

    return (
        <section
            id="contact"
            className="w-screen h-[800px] sm:h-screen relative bg-background"
        >
        <div className="container h-full px-6 relative">
            <div className="absolute inset-x-0 bottom-0 w-full flex justify-between py-8 px-6">
                <div className="hidden gap-4 items-center sm:flex">
                    <h4 className="text-2xl font-medium">Mikhail Vodopianov</h4>
                    <div className="h-full w-[1px] bg-border" />
                    <p className="text-muted-foreground font-medium">2.5YoE Digital Designer</p>
                </div>
                <div className="w-full sm:w-auto flex flex-wrap justify-center gap-8">
            {contactLinks.map(({ name, url, key }: ContactLinksProps) => (
                  <a className="text-sm sm:text-xl hover:text-primary transition-all"
                        key={key}
                        rel="noreferrer noopener"
                        target="_blank"
                        href={url}>
                        {name}
                  </a>
                  ))}
                </div>
            </div>
                <div className="mx-auto max-w-4xl h-full flex items-center justify-center my-auto">
                    <div className="text-center">
                        <h1 className="text-balance text-7xl font-semibold tracking-tight sm:text-8xl">
                            Reach Out.
                        </h1>
                        <p className="my-8 text-pretty text-2xl sm:text-4xl font-regular">
                            Questions, ideas, or projects
                            <br></br>— I’m here to help make them happen
                        </p>
                        <div className="flex gap-4 justify-center mt-16">
                            <a 
                            href="mailto:vodopmi@icloud.com"
                            rel="noreferrer noopener">
                            <Button variant="secondary" size="lg" className="rounded-full text-md hover:bg-primary-foreground hover:text-primary">Email Me</Button>
                            </a>
                            <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href="https://t.me/vodopmi">
                            <InteractiveHoverButton
                            text="Telegram Me"
                            className="rounded-full text-md w-auto pr-8"
                            />
                            </a>
                            {/* <Button variant="secondary" size="lg" className="rounded-full text-md"> <div className="w-2 h-2 mr-2 bg-primary rounded-full" />Telegram Me</Button> */}
                        </div>
                    </div>
                </div>
        </div>
        </section>
    )
}