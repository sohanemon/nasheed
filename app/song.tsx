"use client";
import { GET_ALL_SONGS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
export default function Song() {
  const { data, loading } = useQuery(GET_ALL_SONGS);
  console.log(data);
  if (loading) return <>Loading</>;
  const { allSongs } = data;
  return (
    <div>
      {/* mobile */}
      <div className='grid place-content-center w-full bg-gradient-to-r from-[#899393] to-[#616E73] h-screen'>
        {/* card */}
        <main className='min-w-[22rem] max-w-sm h-[80vh] grid grid-rows-2 bg-white shadow-2xl shadow-bg-200 rounded-md'>
          {/* cover */}
          <div>cover</div>
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
