// import React from 'react';
import friends from './components/friend-list/friends.json';
import user from './components/social-profile/user.json';

import FriendList from './components/friend-list/FriendList';
import Profile from './components/social-profile/Profile';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ,
      <FriendList friends={friends} />,
    </div>
  );
};

export default App;
