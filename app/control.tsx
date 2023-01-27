import Image from "next/image";

export default function Control({ cover }: Songs) {
  return (
    <>
      <div className='bg-gradient-to-tr from-bg-200 to-bg-100'>
        <div className='flex justify-evenly my-4 items-center'>
          <Image
            src={cover.asset.url}
            width={100}
            height={100}
            alt='artist'
            className='w-16 h-16 rounded-full object-cover shadow-lg shadow-black/30'
          />
          <button className='btn'>{"<<"}</button>
          <button className='btn'>{"v"}</button>
          <button className='btn'>{"<<"}</button>
        </div>
      </div>
    </>
  );
}
