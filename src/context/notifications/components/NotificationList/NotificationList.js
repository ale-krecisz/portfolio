import React from 'react';

import useNotification from '../../useNotification';
import NotificationItem from '../NotificationItem/NotificationItem';

import { List } from './styled';

const NotificationList = () => {
  const { notifications } = useNotification();

  if (!notifications.length) return null;

  return (
    <List>
      {notifications.map(notification => (
        <NotificationItem notification={notification} key={notification.id} />
      ))}
    </List>
  );
};

export default NotificationList;
