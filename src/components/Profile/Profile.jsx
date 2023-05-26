// import user from '../../data/user.json';
import user from 'data/user.json';

// {
/* <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />; */
// }

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    // {/* <div class="profile"> */}
    <Container>
      <Description>
        {/* <div class="description"> */}
        <Avatar
          // <img
          //   src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          src={avatar}
          alt="User avatar"
          //   class="avatar"
          // />
        />
        <Name>{username}</Name>
        {/* <p class="name">Petra Marica</p> */}
        <Tag>@{tag}</Tag>
        {/* <p class="tag">@pmarica</p> */}
        <Location>{location}</Location>
        {/* <p class="location">Salvador, Brasil</p> */}
        {/* </div> */}
      </Description>

      <ListStats>
        {/* <ul class="stats"> */}
        <li>
          <Label>Followers</Label>
          {/* <span class="label">Followers</span> */}
          <Quantity>{followers}</Quantity>
          {/* <span class="quantity">1000</span> */}
        </li>
        <li>
          <Label>Views</Label>
          {/* <span class="label">Views</span> */}
          <Quantity>{views}</Quantity>
          {/* <span class="quantity">2000</span> */}
        </li>
        <li>
          <Label>Likes</Label>
          {/* <span class="label">Likes</span> */}
          <Quantity>{likes}</Quantity>
          {/* <span class="quantity">3000</span> */}
        </li>
        {/* </ul> */}
      </ListStats>
    </Container>
    // {/* </div>; */}
  );
};
