import React, { useState } from "react";
import styled from "styled-components";
import { useGet } from "restful-react";

const Button = styled.button`
  padding: 10px 10px;
  margin: 10px 10px;
  background: #2b093f;
  color: white;
  border-radius: 4px;
  margin &:active {
    outline: none;
    border: 1px solid pink;
  }
  &:hover {
    outline: none;
    border: 2px solid #f4e211;
    color: #f4e211;
  }
  &:focus {
    outline: none;
    border: 2px solid #00abcb;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ResponseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DogImg = styled.img`
  max-height: 600px;
  max-width: 400px;
`;
const DogSearch: React.FC = () => {
  const [url, setUrl] = useState("");
  const { data, loading, error, refetch } = useGet({
    path: "/breeds/image/random",
    lazy: true
  });
  return (
    <>
      <h2>Doggo Button w/ Hooks</h2>
      <Div>
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            refetch().then(() => {
              data && data.message && setUrl(data.message);
            });
          }}
        >
          <Button>Click Meh 4 doggos</Button>
        </form>
      </Div>
      <ResponseContainer>
        {error && <h1>Error</h1>}
        {loading && <h1>Loading</h1>}
        {data && data.message && url !== "" && (
          <DogImg alt="Good Boi" src={url} />
        )}
      </ResponseContainer>
    </>
  );
};

export default DogSearch;
