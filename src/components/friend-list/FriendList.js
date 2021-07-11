import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li class="item" key={id}>
        <span class="status">{isOnline ? 'green' : 'red'}</span>
        <img class="avatar" width="48" src={avatar} alt={name}></img>
        <p class="name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
