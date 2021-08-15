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

      <main className="fadeIn font-sans bg-black h-screen text-white">
        <nav className="container mx-auto py-20 px-20 flex flex-row justify-between">
          <h1 className="font-bold text-xl">Ibrahimsyah Zairussalam </h1>
          <div className="space-x-16 flex flex-row content-center font-semibold">
            <a>Projects</a>
            <a>Contacts</a>
          </div>
        </nav>
        <section
          id="hero"
          className="container mx-auto py-10 px-20 flex flex-row justify-between content-center"
        >
          <div className="w-2/4">
            <h1 className="text-5xl font-bold">Hello There!</h1>
            <h2 className="text-2xl mt-8 leading-relaxed text-gray-300">
              Experienced 1 year Frontend Developer. Familiar with website,
              android native, and mobile multi-platform development. Love to
              exploring new technological things
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
