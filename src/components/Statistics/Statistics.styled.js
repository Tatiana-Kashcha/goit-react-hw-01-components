import styled from 'styled-components';
import { getRandomHexColor } from './Statistics';

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
    padding-top: 25px;
    padding-bottom: 25px;
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
  /* Перший варіант отримання кольору фону */
  &:nth-child(1) {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(2) {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(3) {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(4) {
    background-color: ${getRandomHexColor()};
  }
  &:nth-child(5) {
    background-color: ${getRandomHexColor()};
  }
`;

export const Label = styled.span`
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 22px;
`;
