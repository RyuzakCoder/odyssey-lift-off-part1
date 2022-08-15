import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
  query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      name
      photo
    }
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log(loading);
  console.log(error);
  console.log(data);
  if(loading) return 'loading...';
  if(error) return 'error..';

  return (
    <>
      <Layout grid>{data?.tracks}</Layout>
    </>
  );
};

export default Tracks;
