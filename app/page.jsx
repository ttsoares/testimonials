import React from "react";
import Image from "next/image";

import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="w-full p-2 mx-auto bg-light_g_blue h-fit md:p-10">
      <div className="container p-2 mx-auto h-fit max-w-7xl md:p-10">
        {/*  Grid  */}
        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-4 md:grid-rows-2">
          {/*  Card 1  */}
          <div className="relative order-1 p-7 bg-modViolet rounded-xl md:col-span-2">
            {/*  Quotes  */}
            <Image
              src="/bg-pattern-quotation.svg"
              width={100}
              height={100}
              alt="quote mark"
              className="absolute scale-125 top-3  right-10 md:top-4 md:right-[130px] md:scale-140"
            />
            <Header
              img="/image-daniel.jpg"
              name="Daniel Clifford"
              color="lightGray"
              ring={true}
            />

            {/*  Intro  */}
            <p className="relative z-10 mt-6 text-xl pr-7 md:pr-12">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny&apos;s worth.
            </p>

            {/*  Text  */}
            <p className="mt-6 text-xs/[24px] opacity-70 line-clamp-6 text-lightGray">
              &quot; I was an EMT for many years before I joined the bootcamp.
              I&apos;ve been looking to make a transition and have heard some
              people who had an amazing experience here. I signed up for the
              free intro course and found it incredibly fun! I enrolled shortly
              thereafter. The next 12 weeks was the best - and most grueling -
              time of my life. Since completing the course, I&apos;ve
              successfully switched careers, working as a Software Engineer at a
              VR startup. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione vero repudiandae, quasi atque officiis eum
              consectetur odio amet dolorem deleniti repellat expedita aut sunt
              laudantium cum itaque nam voluptatum quod! Quo totam sequi omnis
              deserunt? Sit nam molestiae excepturi, perspiciatis labore
              deleniti eum, eligendi quisquam quod sed nobis exercitationem
              tempora! &quot;
            </p>
          </div>

          {/*  Card 2  */}
          <div className="order-2 bg-gray-600 p-7 rounded-xl">
            <Header
              img="/image-jonathan.jpg"
              name="Jonathan Walters"
              color="lightGray"
              ring={false}
            />

            {/*  Intro  */}
            <p className="mt-6 text-xl">
              The team was very supportive and kept me motivated
            </p>

            {/*  Text  */}
            <p className="mt-6 text-xs/[24px] opacity-70 line-clamp-5 text-lightGray">
              &quot; I started as a total newbie with virtually no coding
              skills. I now work as a mobile engineer for a big company. This
              was one of the best investments I&apos;ve made in myself. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam
              veritatis natus illum ullam ab, nesciunt rerum nobis, quibusdam ad
              voluptatum rem necessitatibus facere nihil deleniti assumenda vel
              velit neque quia, nisi ipsum laudantium impedit eveniet iste.
              Pariatur, exercitationem consequuntur praesentium a est eum velit
              quos maiores ipsum facere tempora! &quot;
            </p>
          </div>

          {/*  Card 3  */}
          <div className="order-last text-gray-900 bg-white p-7 rounded-xl md:order-3 md:row-span-2 drop-shadow-xl">
            <Header
              img="/image-kira.jpg"
              name="Kira Whittle"
              color="vd_g_blue"
              ring={false}
            />

            {/*  Intro  */}
            <p className="mt-6 text-xl">
              Such a life-changing experience. Highly recommended!
            </p>

            {/*  Text  */}
            <p className="mt-6 opacity-70 text-vd_g_blue text-xs/[24px]">
              &quot; Before joining the bootcamp, I&apos;ve never written a line
              of code. I needed some structure from professionals who can help
              me learn programming step by step. I was encouraged to enroll by a
              former student of theirs who can only say wonderful things about
              the program. The entire curriculum and staff did not disappoint.
              They were very hands-on and I never had to wait long for
              assistance. The agile team project, in particular, was
              outstanding. It took my learning to the next level in a way that
              no tutorial could ever have. In fact, I&apos;ve often referred to
              it during interviews as an example of my developent experience. It
              certainly helped me land a job as a full-stack developer after
              receiving multiple offers. 100% recommend! &quot;
            </p>
          </div>

          {/*  Card 4  */}
          <div className="order-4 text-gray-900 bg-white p-7 rounded-xl drop-shadow-xl">
            <Header
              img="/image-jeanette.jpg"
              name="Jeanette Harmon"
              color="vd_g_blue"
              ring={false}
            />

            {/*  Intro  */}
            <p className="mt-6 text-xl">
              An overall wonderful and rewarding experience
            </p>

            {/*  Text  */}
            <p className="mt-6 opacity-70 text-vd_g_blue text-xs/[24px]">
              &quot; Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              &quot;
            </p>
          </div>

          {/*  Card 5  */}
          <div className="order-5 p-7 bg-vd_b_blue rounded-xl md:col-span-2">
            <Header
              img="/image-patrick.jpg"
              name="Patrick Abrams"
              color="light_g_blue"
              ring={true}
            />

            {/*  Intro  */}
            <p className="mt-6 text-xl">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </p>

            {/*  Text  */}
            <p className="mt-6 opacity-70 text-light_g_blue text-xs/[24px]">
              &quot; The staff seem genuinely concerned about my progress which
              I find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. &quot;
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
