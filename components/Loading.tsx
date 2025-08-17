import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <Image
        src="https://maghrebgrillage.ma/wp-content/uploads/2015/10/MA6033547-3085-B1.jpg"
        alt="Loading..."
        className="object-contain"
        width={240}
        height={240}
      />
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#02742c] rounded-full animate-spin"></div>
    </div>
  );
}
