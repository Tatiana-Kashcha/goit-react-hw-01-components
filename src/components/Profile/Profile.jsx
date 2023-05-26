import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ListItems,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <ListItems>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItems>

        <ListItems>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItems>

        <ListItems>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItems>
      </List>
    </Container>
  );
};
