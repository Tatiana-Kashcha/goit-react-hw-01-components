import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

export const Description = styled.div`
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Avatar = styled.img`
  width: 130px;
  border-radius: 100%;
  background-color: rgb(227 244 244);
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
`;

export const Tag = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: gray;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: rgb(227 244 244);
  border: 1px solid rgb(219, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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

export const Label = styled.span`
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
