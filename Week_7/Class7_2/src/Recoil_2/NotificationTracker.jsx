// import React from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, notificationSelector } from './store/atoms/notification';

// const NotificationTracker = () => {
//     const networkAtomCount = useRecoilValue(networkAtom);
//     const jobsAtomCount = useRecoilValue(jobsAtom);
//     const notificationAtomCount = useRecoilValue(notificationsAtom);
//     const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
//     const totalNotificationCount = useRecoilValue(notificationSelector);

//   return (
//     <div>
//       <button>Home</button>

//       <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
//       <button>Jobs ({jobsAtomCount})</button>
//       <button>Messaging ({messagingAtomCount})</button>
//       <button>Notifications ({notificationAtomCount})</button>

//       <button>Me ({totalNotificationCount})</button>
//       <button onClick={() => setMessagingAtomCount(messagingAtomCount + 1)}>UpdateMsg</button>
//     </div>
//   )
// }

// export default NotificationTracker;
