import React from 'react';

export interface TimelineItemProps {
  date: string;
  title: string;
  description?: string;
  icon: string;
  listItems?: string[];
  image?: string;
  imageAlt?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardLink?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  icon,
  listItems,
  image,
  imageAlt,
  cardTitle,
  cardDescription,
  cardLink,
}) => {
  return (
    <div className="group relative flex gap-x-5">
      <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-border">
        <div className="relative z-10 size-6 flex justify-center items-center">
            <img src={icon} alt="Description" className="h-full w-full object-cover" />

        </div>
      </div>

      <div className="grow pb-8 group-last:pb-0">
        <h3 className="mb-1 text-xs text-muted-foreground">{date}</h3>
        <p className="font-semibold text-sm text">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        {listItems && (
          <ul className="list-disc ms-6 mt-3 space-y-1.5">
            {listItems.map((item, index) => (
              <li key={index} className="ps-1 text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        )}
        {image && cardTitle && cardDescription &&(
          <div className="mt-3">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="block border rounded-lg hover:shadow-sm focus:outline-none"
              href={cardLink}
            >
              <div className="relative flex items-center overflow-hidden">
                <img
                  className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                  src={image}
                  alt={imageAlt}
                />
                <div className="grow p-4 ms-32 sm:ms-48">
                  <div className="min-h-24 flex flex-col justify-center">
                    <h3 className="font-semibold text-sm">
                      {cardTitle}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cardDescription}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  return (
    <div>
      <TimelineItem
        date="Full-time, Remote since September 2023"
        title="Viscap.ai – Ad Production and Management Platform"
        // description="The company has high expectations and using OKRs there is a mutual understanding of expectations and performance."
        icon={'../src/assets/viscap-logo.png'} 
        listItems={[
          "5 Brand New Features.",
          "2 Complete Reskins with ui libraries.",
          "2 Helper Apps.",
          "1 Landing.",        ]}        
        // image="src/assets/viscap-ai.png"
        // imageAlt="Blog Image"
        // cardTitle="Viscap.ai"
        // cardDescription="Unlock the power of AI-driven direct response video. Our web app empowers 7-9 figure brands to create optimized, high-converting video campaigns." 
        // cardLink='https://viscap.ai'
        // /
      />
      <TimelineItem
        date="Part-time, Remote, Oct. 2023 – Dec. 2024"
        title="VoidPay – P2P Payment System"
        // description="This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the culture is as good as it gets at 1,000+ employees if you ask me. Managers are still adapting to the growth I think, but everyone has to. Great place to work."
        icon={'../src/assets/voidpay-logo.png'}
        listItems={[
          "Increased checkout page conversion rate from 45% to 85%.",
          "Built & Maintained own design system.",
          "Complete redesign the entire service.",
          "Brand new tool for back-office.",
        ]}
        // image="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // imageAlt="Blog Image"
        // cardTitle="Studio by Mailchimp"
        // cardDescription="Produce professional, reliable streams easily leveraging Mailchimp's innovative broadcast studio." 
        />
      <TimelineItem
        date="Full-time, Remote, Jan. 2023 – Oct. 2023"
        title="Atlantis – Web Agency"
        // description="Work in Slack is one of the beautiful experiences I can do in my entire life. There are a lot of interesting things to learn and managers respect your time and your personality." 
        icon={'../src/assets/atls-logo.png'}
        listItems={[
          "1 SaaS.",
          "1 Mobile Crypto Game.",
          "2 Landings.",
          "4 Agency Websites.",
        ]}      />
      <TimelineItem
        date="Learning & Practicing since Dec. 2021"
        title="Start Point"
        description={''} 
        icon={'../src/assets/icon.ico'}      />
    </div>
  );
};



export const TrackRecord = () => {

  return (
    <section id="track-record" 
    className="w-screen py-24 sm:py-32 space-y-8 bg-background">
    <div className="container px-6">
      <div className="text-center mx-auto max-w-4xl py-8 sm:py-6 lg:py-12">
        <h2 className="text-6xl font-bold">Track Record</h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Like in CV, but a bit better.
        </p>
      </div>
      <div className='max-w-sm mx-auto'><Timeline /></div>

      
{/*   <div className="flex-col px-6 py-10 space-y-12 max-w-lg mx-auto relative">
        <div className="absolute top-4 left-8 w-px h-full bg-border"></div>

        <div>
          <div className="flex items-start space-x-4">
            <div className="relative pt-1.5">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Viscap.ai – Ad Production<br></br>& Management Platform</h3>
              <p className="text-primary">Full-time, Remote since September 2023</p>
              <ul className="mt-2 space-y-0.5 text-muted-foreground">
                <li>5 Brand New Features</li>
                <li>2 Complete Reskins with UI libraries</li>
                <li>2 Helper Apps</li>
                <li>1 Landing</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start space-x-4">
            <div className="relative pt-1.5">
              <div className="h-4 w-4 rounded-full bg-border"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">VoidPay – P2P Payment System</h3>
              <p className="text-base">Part-time, Remote, Oct. 2023 – Dec. 2024</p>
              <ul className="mt-2 space-y-0.5 text-muted-foreground">
                <li>Increased checkout page conversion rate from 45% to 85%</li>
                <li>Built & Supported own design system</li>
                <li>Complete redesign of the entire service</li>
                <li>Brand new tool for back-office</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start space-x-4">
            <div className="relative pt-1.5">
              <div className="h-4 w-4 rounded-full bg-border"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Atlantis – Web Agency</h3>
              <p className="text-base">Full-time, Remote, Jan. 2023 – Oct. 2023</p>
              <ul className="mt-2 space-y-0.5 text-muted-foreground">
                <li>1 SaaS</li>
                <li>1 Mobile Crypto Game</li>
                <li>2 Landings</li>
                <li>4 Agency Websites</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start space-x-4">
            <div className="relative pt-1.5">
              <div className="h-4 w-4 rounded-full bg-border"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Start Point</h3>
              <p className="text-base">Learning & Practicing since Dec. 2021</p>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};
