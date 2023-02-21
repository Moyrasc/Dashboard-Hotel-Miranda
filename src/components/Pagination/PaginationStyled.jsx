import styled from "styled-components";

const PaginationContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  place-items: center;
  width: 100%;
  & .pagination__results{
    flex-grow: 1;
    color: #fff;
  }
  & .pagination__buttons {
    color: #fff;
    &__page {
      padding: 8px 16px;
      border-radius: 12px;
      border: none;
      margin-right: 10px;
      color: #fff;
      background-color: #eee;
      &__active {
        padding: 8px 16px;
        border-radius: 12px;
        border: none;
        color: #fff;
        background-color: #135846;
        margin-right: 10px;
        border-bottom: 1px solid #135846;
      }
      &:hover {
        background-color: #135846;
        color: white;
      }
    }
    &__fixed {
      border-radius: 12px;
      padding: 8px 16px;
      color: #fff;
      border: 1px solid #135846;
      background-color:#135846;
      margin-right: 10px;
      transition:all 0.3s ease-out;
      &:hover {
        background-color: #135846;
        color: white;
      }
    }
  }
`
export{
    PaginationContainer
}