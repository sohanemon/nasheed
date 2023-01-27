"use client";
import { GET_ALL_SONGS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Control from "./control";
import Cover from "./cover";
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
        <main className='min-w-[18rem] max-w-[22rem] h-[80vh] grid grid-rows-2 bg-white shadow-2xl shadow-bg-200 rounded-md overflow-hidden'>
          {/* cover */}
          <Cover {...allSongs[1]} />
          {/* control */}
          <Control />
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
