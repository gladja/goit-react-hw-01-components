import PropTypes from 'prop-types';
import { List, Img, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <List>
      {friends.map(itm =>(
        <li key={itm.id}>
          <Status color={itm.isOnline ? "green" : "red"}></Status>
          <Img src={itm.avatar}/>
          <span>{itm.name}</span>
        </li>
      ))}
    </List>
  )
}
