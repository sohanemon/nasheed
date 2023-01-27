"use client";
import { GET_ALL_SONGS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
export default function Song() {
  const { data, loading } = useQuery(GET_ALL_SONGS);
  console.log(data);
  if (loading) return <>Loading</>;
  return (
    <>
      <audio id='audioPlayer' controls>
        <source src={data.allSongs[0].audio.asset.url} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
