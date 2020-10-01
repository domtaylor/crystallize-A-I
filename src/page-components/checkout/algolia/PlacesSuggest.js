import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const options = {
  appId: process.env.NEXT_ALGOLIA_PLACES_APP_ID,
  apiKey: process.env.NEXT_ALGOLIA_PLACES_API_KEY,
  type: ['city', 'address'],
  useDeviceLocation: false,
  style: false
};

export function PlacesSuggest({ label, ...props }) {
  const id = `${label}_suggest`;

  return (
    <AlgoliaPlaces
      id={id}
      type="search"
      options={options}
      placeholder="Start typing an address"
      {...props}
    />
  );
}

export default PlacesSuggest;
