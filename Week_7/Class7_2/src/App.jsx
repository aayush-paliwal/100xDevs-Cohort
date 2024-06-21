import { RecoilRoot } from 'recoil';
import './App.css'
import UsingRecoil from './Recoil_1/UsingRecoil.jsx';
import NotificationTrackerAsync from './Recoil_AsyncQueries/NotificationTrackerAsync.jsx';
// import NotificationTracker from './Recoil_2/NotificationTracker.jsx';

function App() {

  return (
    <>
      <UsingRecoil />

      <RecoilRoot>
        {/* <NotificationTracker /> */}
        <NotificationTrackerAsync />
      </RecoilRoot>

    </>
  )
}

export default App
