import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(itm => (
        <div key={itm.id}>
          <FriendListItem isOnline={itm.isOnline}
                          avatar={itm.avatar}
                          name={itm.name}
          />
        </div>
      ))}
    </List>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
