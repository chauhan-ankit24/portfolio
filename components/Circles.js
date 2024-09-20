import Image from "next/image";

const Circles = () => {
  return (
    <div className='absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[300px]'>
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        alt="bulb"
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
