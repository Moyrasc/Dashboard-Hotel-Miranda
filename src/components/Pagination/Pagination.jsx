import React, { useEffect, useMemo, useState } from "react";
import { PaginationContainer } from "./PaginationStyled";

const Pagination = ({ itemsPerPage, items, setItems }) => {
  const [actualPage, setActualPage] = useState(0)

  const arraysSplitted = useMemo(() => {
    const arrays = []
    for (let i = 0; i < items.length; i += itemsPerPage) {
      const piece = items.slice(i, i + itemsPerPage)
      arrays.push(piece)
    }
  }, [items, itemsPerPage])


  useEffect(() => {
    setItems(arraysSplitted[actualPage])
  }, [arraysSplitted, setItems, actualPage])

  useEffect(() => {
    setItems(arraysSplitted[actualPage])
    setActualPage(0)
  }, [actualPage, arraysSplitted, setItems, items])

  useEffect(() => {
    setItems(arraysSplitted[actualPage])
  }, [actualPage, arraysSplitted, setItems])

  const nextPage = () => {
    setActualPage(actualPage + 1)
  }
  const prevPage = () => {
    setActualPage(actualPage - 1)
  }

  return (
    <PaginationContainer>
      <div className='pagination__results'>
        {items.length === 0
          ? <p>Nothing to show</p>
          : <p>Showing {itemsPerPage * (actualPage + 1)} of {items.length} results</p>
        }
      </div>
      <div className='pagination__buttons'>
        {actualPage > 0 && <button className='pagination__buttons__fixed' onClick={() => setActualPage(0)}>{'<<'}</button>}
        {actualPage > 0 && <button className='pagination__buttons__fixed' onClick={prevPage}>{'<'}</button>}
        {actualPage > 1 && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage - 2)}>{actualPage - 1}</button>}
        {actualPage > 0 && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage - 1)}>{actualPage}</button>}
        <button className='pagination__buttons__page__active'>{actualPage + 1}</button>
        {(actualPage > 0 && actualPage < arraysSplitted.length - 1) && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage + 1)}>{actualPage + 2}</button>}
        {(actualPage > 1 && actualPage < arraysSplitted.length - 2) && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage + 2)}>{actualPage + 3}</button>}
        {actualPage < arraysSplitted.length - 1 && <button className='pagination__buttons__fixed' onClick={nextPage}>{'>'}</button>}
        {actualPage < arraysSplitted.length - 1 && <button className='pagination__buttons__fixed' onClick={() => setActualPage(arraysSplitted.length - 1)}>{'>>'}</button>}
      </div>
    </PaginationContainer>
  )
}

export default Pagination
