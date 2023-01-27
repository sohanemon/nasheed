import { gql } from "@apollo/client";
export const GET_ALL_SONGS = gql`
  {
    allSongs {
      title
      artist
      audio {
        asset {
          url
        }
      }
    }
  }
`;
