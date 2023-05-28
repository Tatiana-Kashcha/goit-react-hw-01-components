import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  h2 {
    color: gray;
    background-color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgb(219, 216, 216);
`;

export const ListItems = styled.li`
  text-align: center;
  flex-direction: column;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100px;
  &:not(:last-child) {
    border-right: 1px solid rgb(219, 216, 216);
  }
`;

export const Id = styled.span`
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Label = styled.span`
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 22px;
`;
