import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ibrahimsyah Zairussalam</title>
        <meta
          name="description"
          content="Hi! Ibrahimsyah Zairussalam Personal Portofolio Project Exploration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="fadeIn font-sans h-screen text-white">
        <nav className="container mx-auto h-1/6 px-20 flex flex-row justify-between items-center">
          <h1 className="font-bold text-xl">Ibrahimsyah Zairussalam </h1>
          <div className="space-x-16 flex flex-row content-center font-semibold">
            <a href="#about-me">About Me</a>
            <a>Projects</a>
            <a>Contacts</a>
          </div>
        </nav>
        <section
          id="hero"
          className="container mx-auto px-20 h-5/6 flex flex-row justify-between items-center"
        >
          <div className="w-2/4">
            <h1 className="text-5xl font-bold">Hello There!</h1>
            <h2 className="text-2xl mt-8 leading-relaxed text-gray-300">
              Experienced 1 year Frontend Developer. Familiar with website,
              android native, and mobile multi-platform development. Love to
              exploring new technological things
            </h2>

            <a href="#projects">
              <div className="text-xl text-green-200 mt-10 font-bold">
                Check out my works
              </div>
            </a>
          </div>
        </section>
        <section id="about-me" className="h-full container mx-auto py-10 px-20">
          <h1 className="text-red-500 text-3xl font-bold mt-10">About Me</h1>
          <p className="mt-10 text-xl leading-relaxed">
            Hi! I am Ibrahimsyah Zairussalam. Currently studying as an
            Information System Student in Faculty of Computer Science University
            of Brawijaya. Highly interested on Software Development especially
            on Web and Mobile based Application
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
