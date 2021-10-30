import { ButtonCount } from "../ButtonCount";
import { useForm } from "react-hook-form";
import React from "react";

const ZakatPenghasilanCard = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [count, setCount] = React.useState(0);

  const onSubmit = (event) => {
    event.preventDefault;
    const total = parseInt(event.penghasilan) + parseInt(event.bonus);
    const zakat = total * 0.025;
    setCount(zakat);
  };

  return (
    <div className="flex flex-col text-center py-5">
      <p className="text-sm xl:text-base text-gray-500 text-justify mb-3">
        Zakat penghasilan atau yang dikenal juga sebagai zakat profesi adalah
        bagian dari zakat maal yang wajib dikeluarkan atas harta yang berasal
        dari pendapatan / penghasilan rutin dari pekerjaan yang tidak melanggar
        syariah. Nishab zakat penghasilan sebesar 85 gram emas per tahun. Kadar
        zakat penghasilan senilai 2,5%. Dalam praktiknya, zakat penghasilan
        dapat ditunaikan setiap bulan dengan nilai nishab per bulannya adalah
        setara dengan nilai seperduabelas dari 85 gram emas, dengan kadar 2,5%.
        Jadi apabila penghasilan setiap bulan telah melebihi nilai nishab
        bulanan, maka wajib dikeluarkan zakatnya sebesar 2,5% dari
        penghasilannya tersebut. (Sumber: Al Quran Surah Al Baqarah ayat 267,
        Peraturan Menteri Agama Nomer 31 Tahun 2019, Fatwa MUI Nomer 3 Tahun
        2003, dan pendapat Shaikh Yusuf Qardawi).
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-left text-base mb-3">
          Masukkan jumlah penghasilan anda
        </p>
        <input
          type="number"
          {...register("penghasilan", { required: true })}
          defaultValue={count}
          min={0}
          className="mb-3 rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
        />
        <p className="text-left text-base mb-3">Masukkan jumlah bonus anda</p>
        <input
          type="number"
          defaultValue={0}
          min={0}
          {...register("bonus")}
          className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
        />
        <ButtonCount />
      </form>
      <h1 className="text-base">Zakat yang harus anda bayar:</h1>
      <h1 className="text-4xl font-bold">Rp {count.toLocaleString()},00</h1>
      {errors.nominal && <p>Masukkan Nominal</p>}
    </div>
  );
};

export default ZakatPenghasilanCard;
