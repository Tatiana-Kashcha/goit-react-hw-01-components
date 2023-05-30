import * as s from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <s.ListItems key={id}>
      <s.Status status={isOnline}></s.Status>
      <s.Avatar src={avatar} alt={name} width="48" height="48" />
      <s.Name>{name}</s.Name>
    </s.ListItems>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
