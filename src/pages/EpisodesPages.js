import React, { useState, useEffect } from 'react'
import Episodes from '../component/Episodes'
import Pagination from 'react-js-pagination'

const EpisodesPages = () => {
    const [episodes, setEpisodes] = useState([])
    const [numberPage, setNumberPage] = useState(1);
    const [pageConfig, setPageConfig] = useState({});

    useEffect(() => {
        reqApi()
    }, [numberPage])

    const reqApi = async () => {
        const api = await fetch(`https://rickandmortyapi.com/api/episode?page=${numberPage}`)
        const episodeApi = await api.json()
        let itemPages = Math.round(episodeApi.info.count / episodeApi.info.pages)
        setPageConfig({ ...episodeApi.info, itemPages })
        setEpisodes(episodeApi.results)
    }

    function handlePageChange(pageNumber) {
        setNumberPage(pageNumber);
    }


    return (
        <div className='App'>
            {!episodes ? <p></p> :
                <>
                    <h1 className='title'>Episodios</h1>
                    <div>
                        <Episodes episodes={episodes} />
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

export default EpisodesPages