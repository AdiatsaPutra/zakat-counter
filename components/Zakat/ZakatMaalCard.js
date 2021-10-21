import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ZakatMaalCard = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [count, setCount] = useState(0);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-left text-xl mb-3">
          Nilai emas, perak, dan/atau permata
        </p>
        <input
          type="number"
          {...register("emasPerakPermata", { required: true })}
          defaultValue={count}
          min={0}
          className="mb-3 rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
        />
        <p className="text-left text-xl mb-3">Uang tunai, tabungan, deposito</p>
        <input
          type="number"
          defaultValue={0}
          min={0}
          {...register("uangTunai", { required: true })}
          className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
        />
        <p className="text-left text-xl mb-3">
          Kendaraan, rumah, asset lainnya
        </p>
        <input
          type="number"
          defaultValue={0}
          min={0}
          {...register("kendaraan", { required: true })}
          className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
        />
        <p className="text-left text-xl mb-3">Cicilan/hutang</p>
        <input
          type="number"
          defaultValue={0}
          min={0}
          {...register("cicilan", { required: true })}
          className="rounded-md w-full border leading-tight h-10 ring-2 p-2 focus:outline-none ring-gray-300 focus:ring-green-300 transition duration-500"
        />
        <Button />
      </form>
      <h1 className="text-xl">Zakat yang harus anda bayar:</h1>
      <h1 className="text-4xl font-bold">Rp {count.toLocaleString()},00</h1>
      {errors.nominal && <p>Masukkan Nominal</p>}
    </div>
  );
};

export default ZakatMaalCard;
