import * as s from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <s.ListItems>
      <s.Status status={isOnline} />
      <s.Avatar src={avatar} alt={name} width="48" height="48" />
      <s.Name>{name}</s.Name>
    </s.ListItems>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
