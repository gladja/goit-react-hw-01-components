import PropTypes from 'prop-types';
import { Wrap, Img, Description, Name, Text, List, Item, Quantity } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <Wrap>
      <Description>
        <Img
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <List>
        <Item>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <Quantity >{stats.likes}</Quantity>
        </Item>
      </List>
    </Wrap>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}

