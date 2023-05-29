import * as s from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <s.ListItems key={id}>
      <s.Status>{isOnline}</s.Status>
      <s.Avatar src={avatar} alt="User avatar" />
      <s.Name>{name}</s.Name>
    </s.ListItems>
  );
};
