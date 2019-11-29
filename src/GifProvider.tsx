import React from "react";
import { RestfulProvider } from "restful-react";
import GifSearch from "./GiphySearch";

const GifProvider: React.FC = () => {
  return (
    <RestfulProvider
      queryParams={{ apiKey: `${process.env.REACT_APP_GIPHY_API_KEY}` }}
      base={"https://api.giphy.com/v1"}
    >
      <GifSearch />
    </RestfulProvider>
  );
};

export default GifProvider;
