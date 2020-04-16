import React from 'react';

import useNotification from '../../useNotification';
import NotificationItem from '../NotificationItem/NotificationItem';

const NotificationList = () => {
  const { notifications } = useNotification();

  if (!notifications.length) return null;

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <NotificationItem notification={notification} />
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
