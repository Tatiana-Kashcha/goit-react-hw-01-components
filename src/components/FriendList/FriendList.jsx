import * as s from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <s.List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} />
      ))}
    </s.List>
  );
};
