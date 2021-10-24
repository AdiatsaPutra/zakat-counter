import Head from "next/head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ZakatMaalCard, ZakatPenghasilanCard } from "../components";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aplikasi Penghitung zakat</title>
        <meta name="description" content="aplikasi penghitungan zakat islam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex justify-center">
          <div className="fixed bottom-0 w-full text-center bg-green-500 py-2">
            Build with ❤️ by Adiatsa
          </div>
        </div>
      </div>
    </div>
  );
}
