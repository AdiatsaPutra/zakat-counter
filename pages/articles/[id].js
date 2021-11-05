import { useRouter } from "next/router";
import Image from "next/image";
import { Footer } from "../../components/Footer";

const Artikel = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col justify-center items-center mt-5 mx-5">
      <div className="relative w-full lg:w-xl flex justify-center h-96 lg:h-xxl">
        <Image
          src="/zakat-fitrah.jpg"
          alt="Zakat"
          layout="fill"
          className="rounded-xl"
          objectFit="cover"
        />
      </div>
      <div className="w-full lg:w-xl">
        <h1 className="font-poppins text-2xl font-bold my-5">Title</h1>
        <p className="font-poppins text-lg text-justify">
          Zakat fitrah (zakat al-fitr) adalah zakat yang diwajibkan atas setiap
          jiwa baik lelaki dan perempuan muslim yang dilakukan pada bulan
          Ramadhan pada Idul Fitri. Sebagaimana hadist Ibnu Umar ra, Rasulullah
          SAW mewajibkan zakat fitrah satu sha’ kurma atau satu sha’ gandum atas
          umat muslim; baik hamba sahaya maupun merdeka, laki-laki maupun
          perempuan, kecil maupun besar. Beliau saw memerintahkannya
          dilaksanakan sebelum orang-orang keluar untuk shalat.” (HR Bukhari
          Muslim) Selain untuk mensucikan diri setelah menunaikan ibadah di
          bulan Ramadhan, zakat fitrah juga dapat dimaknai sebagai bentuk
          kepedulian terhadap orang yang kurang mampu,membagi rasa kebahagiaan
          dan kemenangan di hari raya yang dapat dirasakan semuanya termasuk
          masyarakat miskin yang serba kekurangan. Zakat fitrah wajib ditunaikan
          bagi setiap jiwa, dengan syarat beragama Islam, hidup pada saat bulan
          Ramadhan, dan memiliki kelebihan rezeki atau kebutuhan pokok untuk
          malam dan Hari Raya Idul Fitri. Besarannya adalah beras atau makanan
          pokok seberat 2,5 kg atau 3,5 liter per jiwa. Para ulama, diantaranya
          Shaikh Yusuf Qardawi telah membolehkan zakat fitrah ditunaikan dalam
          bentuk uang yang setara dengan 1 sha’ gandum, kurma atau beras.
          Nominal zakat fitrah yang ditunaikan dalam bentuk uang, menyesuaikan
          dengan harga beras yang dikonsumsi. Berdasarkan SK Ketua BAZNAS No. 7
          Tahun 2021 tentang Zakat Fitrah dan Fidyah untuk wilayah Ibukota DKI
          Jakarta Raya dan Sekitarnya, ditetapkan bahwa nilai zakat fitrah
          setara dengan uang sebesar Rp40.000,-/hari/jiwa BAZNAS akan
          menyalurkan zakat fitrah dalam bentuk beras kepada mustahik, termasuk
          keluarga rentan yang mengalami kesulitan akibat dampak pandemi
          Covid-19. Zakat Fitrah ditunaikan sejak awal Ramadhan dan paling
          lambat dilakukan sebelum pelaksanaan Shalat Idul Fitri. Sementara itu,
          penyalurannya kepada mustahik (penerima zakat) paling lambat dilakukan
          sebelum pelaksanaan shalat Idul Fitri. (Sumber: Peraturan Menteri
          Agama Nomor 52 Tahun 2014, SK Ketua BAZNAS No. 27 Tahun 2020, Hadist
          Riwayat Bukhari Muslim, dan pendapat Shaikh Yusuf Qardawi).
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Artikel;
