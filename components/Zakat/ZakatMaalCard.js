import { ButtonCount } from "../ButtonCount";
import { useForm } from "react-hook-form";
import React from "react";

const ZakatMaalCard = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [count, setCount] = React.useState(0);

  const onSubmit = (event) => {
    event.preventDefault;
    const hasil =
      parseInt(event.emasPerakPermata) +
      parseInt(event.uangTunai) +
      parseInt(event.kendaraan);
    const total = hasil - parseInt(event.cicilan);
    const zakat = total * 0.025;
    setCount(zakat);
  };

  return (
    <div className="flex flex-col text-center py-5">
      <p className="text-sm xl:text-base text-gray-500 text-justify mb-3">
        Zakat maal yang dimaksud dalam perhitungan ini adalah zakat yang
        dikenakan atas uang, emas, surat berharga, dan aset yang disewakan.
        Tidak termasuk harta pertanian, pertambangan, dan lain-lain yang diatur
        dalam UU No.23/2011 tentang pengelolaan zakat. Zakat maal harus sudah
        mencapai nishab (batas minimum) dan terbebas dari hutang serta
        kepemilikan telah mencapai 1 tahun (haul). Nishab zakat maal sebesar 85
        gram emas. Kadar zakatnya senilai 2,5%. (Sumber: Al Quran Surah Al
        Baqarah ayat 267, Peraturan Menteri Agama Nomer 31 Tahun 2019, Fatwa MUI
        Nomer 3 Tahun 2003, dan pendapat Shaikh Yusuf Qardawi).. Standar harga
        emas yg digunakan untuk 1 gram nya adalah Rp800.000,-. Sementara nishab
        yang digunakan adalah sebesar 85 gram emas.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-left text-base mb-3">
              Nilai emas, perak, dan/atau permata
            </p>
            <input
              type="number"
              {...register("emasPerakPermata", { required: true })}
              defaultValue={count}
              min={0}
              className="mb-3 rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
            />
          </div>
          <div>
            <p className="text-left text-base mb-3">
              Uang tunai, tabungan, deposito
            </p>
            <input
              type="number"
              defaultValue={0}
              min={0}
              {...register("uangTunai", { required: true })}
              className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-left text-base mb-3">
              Kendaraan, rumah, asset lainnya
            </p>
            <input
              type="number"
              defaultValue={0}
              min={0}
              {...register("kendaraan", { required: true })}
              className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
            />
          </div>
          <div>
            <p className="text-left text-base mb-3">Cicilan/hutang</p>
            <input
              type="number"
              defaultValue={0}
              min={0}
              {...register("cicilan", { required: true })}
              className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
            />
          </div>
        </div>
        <ButtonCount />
      </form>
      <h1 className="text-base">Zakat yang harus anda bayar:</h1>
      <h1 className="text-4xl font-bold">Rp {count.toLocaleString()},00</h1>
      {errors.nominal && <p>Masukkan Nominal</p>}
    </div>
  );
};

export default ZakatMaalCard;
