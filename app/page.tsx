"use client";
import { Poppins } from "@next/font/google";
import { useQuery, gql } from "@apollo/client";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const GET_10_POKEMONS = gql`
  query {
    pokemons(limit: 12, offset: 0) {
      results {
        name
        dreamworld
        artwork
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_10_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, id ullam
      nam, ducimus alias dolorem voluptas aperiam corporis non minus nemo,
      suscipit sit odit animi assumenda accusamus quas hic! Libero?
    </h1>
  );
}
