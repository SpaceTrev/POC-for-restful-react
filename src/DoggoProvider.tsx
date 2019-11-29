import React from "react";
import { RestfulProvider } from "restful-react";
import DogSearch from "./DoggoSearch";

const DogProvider: React.FC = () => {
  return (
    <RestfulProvider base={"https://dog.ceo/api"}>
      <DogSearch />
    </RestfulProvider>
  );
};

export default DogProvider;
