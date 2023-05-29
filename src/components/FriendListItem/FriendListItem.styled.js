import styled from 'styled-components';

export const ListItems = styled.li`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 4px;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: rgb(34 161 161);
`;
