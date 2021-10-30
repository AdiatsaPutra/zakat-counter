import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ZakatMaalCard, ZakatPenghasilanCard } from "../components";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home({ artikels }) {
  return (
    <div>
      <Head>
        <title>Aplikasi Penghitung zakat</title>
        <meta name="description" content="aplikasi penghitungan zakat islam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="relative bg-indigo-800 h-xxl font-poppins">
          <Navbar />
          <div className="flex justify-center text-center pt-36">
            <div>
              <h1 className="text-lg md:text-3xl font-bold text-white">
                Aplikasi Informasi Dan Penghitungan Zakat
              </h1>
              <p className="text-base lg:text-lg text-white my-3">
                Temukan informasi tentang zakat dan penghitungannya.
              </p>
            </div>
          </div>
          <div className="absolute mx-5 sm:mx-10 lg:mx-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white p-10 mt-5 lg:mt-xl rounded-xl shadow-xl">
            <Tabs selectedTabClassName="bg-green-500 rounded-xl mb-3 text-white">
              <TabList>
                <Tab>
                  <h1 className="text-xs lg:text-lg">Zakat Penghasilan</h1>
                </Tab>
                <Tab>
                  <h1 className="text-xs lg:text-lg">Zakat Maal</h1>
                </Tab>
              </TabList>
              <TabPanel>
                <ZakatPenghasilanCard />
              </TabPanel>
              <TabPanel>
                <ZakatMaalCard />
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="mt-xxxl lg:mt-xxl"></div>
        <div className="container px-5 md:m-auto font-poppins">
          <p className="text-lg font-bold text-gray-900 mb-3">
            Informasi tentang zakat
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {artikels &&
              artikels.map((artikel) => (
                <div key={artikel.id}>
                  <div className="relative">
                    <Image
                      src={
                        "http://localhost:1337" +
                        artikel.Photo.formats.thumbnail.url
                      }
                      alt=""
                      width={500}
                      height={250}
                      className="rounded-xl shadow-xl"
                      layout="responsive"
                    />
                  </div>
                  <Link href="/">
                    <a className="mt-3 text-base hover:text-blue-900 transition-all duration-500">
                      {artikel.Title}
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/artikels");
  const artikels = await res.json();
  return {
    props: { artikels },
  };
}
