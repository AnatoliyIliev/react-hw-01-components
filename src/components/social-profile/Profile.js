// import user from './user.json';
import PropTypes from 'prop-types';

// stats: {followers, views, likes}

const Profile = ({ tag, name, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img width="50" src={avatar} alt={name} class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape(PropTypes.number.isRequired).isRequired,
};

export default Profile;
