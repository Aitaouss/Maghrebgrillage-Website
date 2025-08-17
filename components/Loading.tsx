import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="https://maghrebgrillage.ma/wp-content/uploads/2015/10/MA6033547-3085-B1.jpg"
        alt="Loading..."
        className="object-contain"
        width={240}
        height={240}
      />
    </div>
  );
}
