import Head from "next/head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ZakatMaalCard, ZakatPenghasilanCard } from "../components";
import { Navbar } from "../components/Navbar";

export default function PenghitungZakat() {
  return (
    <div>
      <Head>
        <title>Aplikasi Penghitung zakat</title>
        <meta name="description" content="aplikasi penghitungan zakat islam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="my-10 lg:my-12 mx-5 lg:mx-32 xl:mx-96 shadow-xl rounded-xl p-10">
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
        <div className="flex justify-center">
          <div className="fixed bottom-0 w-full text-center bg-green-500 py-2">
            Build with ❤️ by Adiatsa
          </div>
        </div>
      </div>
    </div>
  );
}