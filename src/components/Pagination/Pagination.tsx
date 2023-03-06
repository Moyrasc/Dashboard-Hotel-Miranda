import React from "react";
import {
  Container,
  Nav,
  Ul,
  Text,
  PageNumber,
  PageBtn,
  Next,
  NextBtn,
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
  const pageNumbers: number[] = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = (): void => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = (): void => {
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
          <Next>
            <NextBtn onClick={prevPage} >
              <span>Prev</span>
            </NextBtn>
          </Next>

          {pageNumbers.map((number) => (
            <PageNumber key={number}>
              <PageBtn
                currentPage={
                  currentPage === number ? "currentPage" : "notCurrentPage"
                }
                onClick={() => setCurrentPage(number)}>
                {number}
              </PageBtn>
            </PageNumber>
          ))}
          <Next>
            <NextBtn onClick={nextPage}>
              <span>Next</span>
            </NextBtn>
          </Next>
        </Ul>
      </Nav>
    </Container >
  );
};

export default Pagination;