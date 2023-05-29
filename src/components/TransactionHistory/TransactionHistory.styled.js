import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 40px;
  margin-bottom: 40px;
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
    border: 1px solid rgb(219, 216, 216);
  }
`;

export const Tbody = styled.tbody`
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  tr:nth-child(even) {
    background-color: rgb(228 239 244);
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: gray;
    font-size: 14px;
    border: 1px solid rgb(219, 216, 216);
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
`;
