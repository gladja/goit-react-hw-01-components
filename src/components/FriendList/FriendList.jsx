import PropTypes from 'prop-types';
import { List, Img, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(itm => (
        <li key={itm.id}>
          <Status color={itm.isOnline ? 'green' : 'red'}></Status>
          <Img src={itm.avatar} />
          <span>{itm.name}</span>
        </li>
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
