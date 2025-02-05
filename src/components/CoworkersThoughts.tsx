import LetterSwapForward from "./fancy/letter-swap-forward-anim";

interface LeadProps {
    imageUrl: string;
    name: string;
    position: string;
    url: string;
  }

interface TestimonialProps {
    name: string;
    position: string;
    comment: string;
  }

const leadList: LeadProps[] = [
    {
      imageUrl: "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/chad-Y2iEyRmQDnLaSpFLuIhGWFUZq44Vyh.png",
      name: "Chad Terry",
      position: "Production Manager & Tech Director",
      url: "https://www.linkedin.com/in/michael-chad-terry/",
    },
    {
      imageUrl: "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/egor-PPJP9XVJYzRXGtl41HMrVFDQdVTIDe.jpg",
      name: "Egor Andrianov",
      position: "Chief Technology Officer",
      url: "https://www.linkedin.com/in/talentumtuum/",
    },
    {
      imageUrl: "https://wlzjlnsxqo8fuoob.public.blob.vercel-storage.com/vodopmi/ivan-EhXzQ1s2Gj52Sfj7Qms0TMlSo1mStC.jpg",
      name: "Ivan Chernyaev",
      position: "Project Manager & Business Analyst",
      url: "#",
    },
  ];

  const testimonials: TestimonialProps[] = [
    {
      name: "Ivan Chernyaev",
      position: "Project Manager & Business Analyst",
      comment: "Mikhail always gathers information about upcoming tasks in the best possible way, striving to understand their very essence. Based on this, he seeks the most optimal solution from the user's perspective.<br /><br />Mikhail should work on improving his skills in art direction, as this seems to be a concise growth point for his abilities and potential.<br /><br />I highly recommend Mikhail as a competent professional with a high level of expertise.",
    },
    {
      name: "Kirill Brussel",
      position: "Software Engineer",
      comment:
        "He is a professional, easy to communicate, grasps information on the fly, offers solutions that work.<br /><br />From the improvements, I can only advise to pay more attention to the text in the layout, otherwise everything is perfect!",
    },
];




export const CoworkersThoughts = () => {

    return (
        <section 
        id="coworkers-thoughts" 
        className="w-screen py-24 sm:py-32 space-y-8 bg-background">
        <div className="container px-6">
            <div className="text-center mx-auto max-w-4xl py-8 sm:py-6 lg:py-12">
                <h2 className="text-6xl font-bold">Coworkers Thoughts</h2>
                <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                I asked my colleagues for honest feedback <br></br>— here’s what they had to say. 
                <br></br><br></br>For a deeper look, don’t hesitate to connect with my project leads.
                </p>
                <div className="flex flex-wrap justify-center gap-8 gap-y-10 pt-8 max-w-fit mx-auto">
        {leadList.map(({ imageUrl, name, position, url }: LeadProps) => (
            <a 
                key={name}
                rel="noreferrer noopener"
                href={url}
                target="_blank"
                className="flex flex-col items-center hover:text-primary transition-all hover:scale-105">
                <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="rounded-full w-20 h-20 aspect-square object-cover sm:scale-10"
                />
                <h3 className="text-lg font-semibold mt-4">{name}</h3>
                <p className="text-muted-foreground text-sm max-w-36">{position}</p>
            </a>
          )
        )}
                </div>
            </div>
            <div className="grid gap-20 max-w-7xl md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-24 mx-auto space-y-4 lg:space-y-24 pt-20">
        {testimonials.map(
          ({ name, position, comment }: TestimonialProps) => (
            <div
                key={position} 
                className="max-w-md md:break-inside-avoid overflow-hidden">
                <div className="flex flex-row items-center gap-4 pb-4">
                    <div className="flex gap-x-2 items-baseline flex-wrap">
                        <h3 className="text-md">{name}</h3>
                        <h5 className="text-muted-foreground">{position}</h5>
                    </div>
                </div>
                <p className="text-xl" dangerouslySetInnerHTML={{ __html: comment }} />
            </div>
          )
        )}
                    <LetterSwapForward 
                    label="More to come."
                    className="max-w-md md:break-inside-avoid overflow-hidden text-primary text-4xl font-semibold" />
            </div>
        </div>
        </section>
    )
    }