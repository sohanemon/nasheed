"use client";
import { GET_ALL_SONGS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
export default function Song() {
  const { data, loading } = useQuery(GET_ALL_SONGS);
  console.log(data);
  if (loading) return <>Loading</>;
  const { allSongs }: { allSongs: Songs[] } = data;
  console.log(allSongs);
  return (
    <div>
      {/* mobile */}
      <div className='grid place-content-center w-full bg-gradient-to-r from-[#899393] to-[#616E73] h-screen'>
        {/* card */}
        <main className='min-w-[22rem] max-w-sm h-[80vh] grid grid-rows-2 bg-white shadow-2xl shadow-bg-200 rounded overflow-hidden'>
          {/* cover */}
          <div className='relative'>
            <Image
              src={allSongs[1].cover.asset.url}
              alt=''
              className='w-full h-full object-cover brightness-[.25]'
              width={500}
              height={500}
            />
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
              <Image
                src={allSongs[1].cover.asset.url}
                alt=''
                className='w-32 h-32 rounded-full object-cover animate-slow-spin'
                width={200}
                height={200}
              />
            </div>
            <h2>Hera hote hele dule</h2>
          </div>
          {/* control */}
          <div className='bg-gradient-to-tr from-bg-200 to-bg-100'>control</div>
        </main>
      </div>
    </div>
  );
}

{
  /* <audio id='audioPlayer' autoPlay controls>
        <source src={allSongs[0].audio.asset.url} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio> */
}
