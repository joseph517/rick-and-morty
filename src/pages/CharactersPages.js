import React, { useEffect, useState } from 'react'
import Characters from '../component/Characters'
import Pagination from "react-js-pagination";
import Search from '../component/Search';

const CharactersPages = () => {
    const [characters, setCharacters] = useState([])
    const [numberPage, setNumberPage] = useState(1);
    const [pageConfig, setPageConfig] = useState({});
    const [search, setSearch] = useState("");

    function actualice(event) {
        setSearch(event.target.value);
    }

    function onSearh() {
        if (search) {
            setNumberPage(1)
        }
    }

    useEffect(() => {
        reqApi()

    }, [numberPage])

    const reqApi = () => {
        const api = fetch(`https://rickandmortyapi.com/api/character/?page=${numberPage}&name=${search}`
        )
            .then((response) => response.json())
            .then(characterApi => {
                let itemPages = Math.round(characterApi.info.count / characterApi.info.pages)
                setPageConfig({ ...characterApi.info, itemPages })
                setCharacters(characterApi.results)
            })
    }

    function handlePageChange(pageNumber) {
        setNumberPage(pageNumber);
    }

    return (
        <div className='App'>
            {!characters ? <p></p> :
                <>
                    <h1 className='title'>Personajes</h1>
                    <div>
                        <Search
                            onInputChange={actualice}
                            valorInput={search}
                            onSubmit={onSearh}
                        />
                        <Characters characters={characters} />
                    </div>
                </>}
            <div>
                <Pagination
                    activePage={numberPage}
                    itemsCountPerPage={pageConfig.itemPages}
                    totalItemsCount={pageConfig.count}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />

            </div>
        </div>
    )
}

export default CharactersPages