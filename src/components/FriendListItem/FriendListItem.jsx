import PropTypes from 'prop-types';
import { Img, Item, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
  return (
    <Item>
      <Status color={isOnline ? 'green' : 'red'}></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  )
}

FriendListItem.protoType = {
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
