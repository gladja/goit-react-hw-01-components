import PropTypes from 'prop-types';
import { List, Img, Status, Item, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(itm => (
        <Item key={itm.id}>
          <Status color={itm.isOnline ? 'green' : 'red'}></Status>
          <Img src={itm.avatar} alt="User avatar" width="48" />
          <Name>{itm.name}</Name>
        </Item>
      ))}
    </List>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
