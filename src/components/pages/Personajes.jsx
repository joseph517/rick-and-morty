import { useState, useEffect, useCallback } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";
import { CharacterItem } from "../characters/CharactersItems";
import { Search } from "../search/Search";

export function Personajes() {
  const [characterList, setCharacterList] = useState();
  const [numberPage, setNumberPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pageConfig, setPageConfig] = useState();

  //1
  function actualice(event) {
    setSearch(event.target.value);
  }

  //3
  function onSearh() {
    load(true);
  }

  //4
  const load = useCallback(
    (searching) => {
      if (searching) {
        setNumberPage(1);
      }
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?page=${
            searching ? "1" : numberPage
          }&name=${search}`
        )
        .then((res) => {
          setCharacterList(res.data);
          setPageConfig(res.data.info);
        });
    },
    [numberPage, search]
  );

  useEffect(() => {
    if (numberPage) {
      load();
    }
  }, [numberPage, load]);

  function handlePageChange(pageNumber) {
    setNumberPage(pageNumber);
  }

  return (
    <div>
      <Search
        onSubmit={onSearh}
        valorInput={search}
        onInputChange={actualice}
      />
      <div className="row py-5">
        {characterList?.results.map((character) => {
          return <CharacterItem key={character.id} {...character} />;
        })}
      </div>
      {pageConfig && (
        <Pagination
          activePage={numberPage}
          itemsCountPerPage={20}
          totalItemsCount={pageConfig.count}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
}
