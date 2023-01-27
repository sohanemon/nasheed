import { gql } from "@apollo/client";
export const GET_ALL_SONGS = gql`
  {
    allSongs {
      title
      artist
      cover {
        asset {
          url
        }
      }
      audio {
        asset {
          url
        }
      }
    }
  }
`;
