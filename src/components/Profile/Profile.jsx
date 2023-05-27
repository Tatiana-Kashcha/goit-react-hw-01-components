import { number } from 'prop-types';
import * as s from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <s.Container>
      <s.Description>
        <s.Avatar src={avatar} alt="User avatar" />
        <s.Name>{username}</s.Name>
        <s.Tag>@{tag}</s.Tag>
        <s.Location>{location}</s.Location>
      </s.Description>

      <s.List>
        <s.ListItems>
          <s.Label>Followers</s.Label>
          <s.Quantity>{followers}</s.Quantity>
        </s.ListItems>

        <s.ListItems>
          <s.Label>Views</s.Label>
          <s.Quantity>{views}</s.Quantity>
        </s.ListItems>

        <s.ListItems>
          <s.Label>Likes</s.Label>
          <s.Quantity>{likes}</s.Quantity>
        </s.ListItems>
      </s.List>
    </s.Container>
  );
};

Profile.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  //   avatar: PropTypes.element,
  //   stats: PropTypes.object,
};
