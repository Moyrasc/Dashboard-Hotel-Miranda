import React from "react";
import {
  Container,
  Nav,
  Ul,
  Text,
  LiPageNumber,
  LiPageBtn,
  LiNext,
  LiNextBtn,
} from "./PaginationStyled";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  dataDisplayed,
  totalItems,
  indexOfLastItem,
  indexOfFirstItem,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      <Text>
        Showing {dataDisplayed} {indexOfFirstItem} to{" "}
        {indexOfLastItem > totalItems ? totalItems : indexOfLastItem} from a
        total of {totalItems} {dataDisplayed}
      </Text>
      <Nav>
        <Ul>
          <LiNext>
            <LiNextBtn onClick={prevPage} >
              <span>Prev</span>
            </LiNextBtn>
          </LiNext>

          {pageNumbers.map((number) => (
            <LiPageNumber key={number}>
              <LiPageBtn
                $type={
                  currentPage === number ? "currentPage" : "notCurrentPage"
                }
                onClick={() => setCurrentPage(number)}>
                {number}
              </LiPageBtn>
            </LiPageNumber>
          ))}
          <LiNext>
            <LiNextBtn onClick={nextPage}>
              <span>Next</span>
            </LiNextBtn>
          </LiNext>
        </Ul>
      </Nav>
    </Container >
  );
};

export default Pagination;