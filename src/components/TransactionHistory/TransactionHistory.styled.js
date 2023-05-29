import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const Table = styled.table`
  padding-top: 40px;
  width: 100%;
  text-align: center;
`;

export const Thead = styled.thead`
  background-color: rgb(58 190 233);
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  th {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Tbody = styled.tbody`
  background-color: #ffffff;
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: gray;
    font-size: 14px;
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
`;
