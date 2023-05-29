import * as s from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <s.List>
      <FriendListItem></FriendListItem>
    </s.List>
  );
};
