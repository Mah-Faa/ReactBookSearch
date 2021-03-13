import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import CardsBooks from "./CardsBooks";

const SearchBox = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [maxResults, setMaxResults] = useState(10);

  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`;
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log(query);
    setSearch("");
  };

  useEffect(() => {
    getBooks();
  }, [query]);

  const getBooks = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setBooks(data.itmes);

    console.log(data.items);
  };

  return (
    <div>
      <div className="mainImage d-flex justify-content align-items-center flex-column">
        <h3 className="display-2 text-center  mb-2" style={{ zIndex: 2 }}>
          Shellfs books
        </h3>
        <div>
          <Form inline onSubmit={getSearch}>
            <FormGroup>
              <Input type="text" value={search} onChange={updateSearch} />
            </FormGroup>
            <Button type="submit">Search</Button>
          </Form>
        </div>
      </div>
      <CardsBooks />
    </div>
  );
};

export default SearchBox;
