"use client";
import Image from "next/image";

export default function Cover({ cover }: Songs) {
  console.log(cover);
  return (
    <>
      <div className='relative'>
        <Image
          src={cover?.asset.url}
          alt=''
          className='w-full h-full object-cover brightness-[.25]'
          width={500}
          height={500}
        />
        <div className='absolute top-[42%] -translate-y-1/2 left-1/2 -translate-x-1/2'>
          <Image
            src={cover?.asset.url}
            alt=''
            className='w-32 h-32 rounded-full object-cover animate-slow-spin'
            width={200}
            height={200}
          />
        </div>
        <div className='absolute bottom-4 left-4 text-primary'>
          <h2 className='text-lg'>Hera hote hele dule</h2>
          <h2 className='text-sm text-primary/75'>Unknown artist</h2>
        </div>
      </div>
    </>
  );
}
