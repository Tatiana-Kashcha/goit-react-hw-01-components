import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  box-shadow: 0px 10px 10px rgba(245, 245, 247, 0.1);
  border-radius: 16px;
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
  width: 100px;
  border-radius: 100%;
  background-color: rgb(227 244 244);
`;

export const Name = styled.p``;

export const Tag = styled.p``;

export const Location = styled.p``;

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
  border-right: 1px solid rgb(219, 216, 216);
`;

export const Label = styled.span``;

export const Quantity = styled.span``;
