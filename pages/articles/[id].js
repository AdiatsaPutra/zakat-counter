import { useRouter } from "next/router";

const Artikel = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div className="w-full h-xxl bg-indigo-500">{id}</div>
    </div>
  );
};

export default Artikel;
