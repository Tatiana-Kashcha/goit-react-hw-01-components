import * as s from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <s.ListItems key={id}>
      <s.Status status={isOnline}></s.Status>
      <s.Avatar src={avatar} alt={name} width="48" height="48" />
      <s.Name>{name}</s.Name>
    </s.ListItems>
  );
};
