import React from 'react'

const Search = ({ valorInput, onInputChange, onSubmit }) => {

    function onKeyPress(e) {
        if (e.key === "Enter") {
            onSubmit();
        }
    }
    console.log(valorInput)


    return (
        <div className="d-flex justify-content-end">
            <div className="mb-3 col-4">
                <input
                    onKeyPress={onKeyPress}
                    value={valorInput}
                    onChange={onInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Presione enter para buscar personaje"
                />
            </div>
        </div>

    )
}

export default Search