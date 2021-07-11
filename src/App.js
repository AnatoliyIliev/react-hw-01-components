// import React from 'react';
import friends from './components/friend-list/friends.json';
import user from './components/social-profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import transactions from './components/transaction-history/transactions.json';

import FriendList from './components/friend-list/FriendList';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import TransactionHistory from './components/transaction-history/TransactionHistory';

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
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
