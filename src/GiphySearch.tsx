import React, { useState } from "react";
import { useSearchGifs } from "./api";
import styled from "styled-components";

const SearchBar = styled.input`
  text-align: left;
  padding: 10px 60px;
  border-radius: 4px;
  background: #040404;
  font-family: Andale Mono, monospace;
  font-size: 20px;
  letter-spacing: 1.5px;
  color: #fff;
  border: 1px solid #333;
  &:active {
    outline: none;
    border: 1px solid pink;
  }
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
    border: 2px solid #f4e211;
  }
`;
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
const DivForBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ResponseDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const GiphySearch: React.FC = () => {
  const [word, setWord] = useState("");
  const [formInput, setFormInput] = useState("");
  const { error, loading, data: giphyResponse } = useSearchGifs({
    queryParams: {
      q: `${word}`,
      limit: 10
    }
  });
  return (
    <>
      <h2>Giphy Rest Search w/ Hooks</h2>
      <DivForBar>
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setWord(formInput);
          }}
        >
          <SearchBar
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormInput(e.target.value);
            }}
            type="text"
          ></SearchBar>
          <Button>Click Meh</Button>
        </form>
      </DivForBar>
      <ResponseDiv>
        {error && <h1>Error</h1>}
        {loading && <h1>Loading</h1>}
        {giphyResponse &&
          giphyResponse.data &&
          giphyResponse.data.map(gif => {
            return (
              <img
                alt={gif.slug}
                src={
                  gif &&
                  gif.images &&
                  gif.images.fixed_height_small &&
                  gif.images.fixed_height_small.url
                    ? gif.images.fixed_height_small.url
                    : ""
                }
              />
            );
          })}
      </ResponseDiv>
    </>
  );
};

export default GiphySearch;
