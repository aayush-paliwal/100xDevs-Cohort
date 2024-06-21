import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { notifications, totalNotificationSelector } from './store/atoms/notificationAsync.jsx'; 
// import { useEffect } from 'react';
// import axios from 'axios';
import { totalNotificationSelector, notifications } from "./store/atoms/notificationAsync"

const NotificationTrackerAsync = () => {
    const [networkCount, setNetworkCount] = useRecoilState(notifications)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default NotificationTrackerAsync;
