import { useState } from 'react'

import './App.css'
// import Notification from './components/notification'
import useNotification from './hooks/use-notification';

function App() {

  // Custom Hook = useNotification(position)

  const [count, setCount] = useState(0)

  const notificationInfo = [
    {
      type: "error",
      message: "Testing error Notification..!",
      duration: 3000
    },
    {
      type: "success",
      message: "Testing success Notification..!",
      duration: 3000
    },
    {
      type: "warning",
      message: "Testing warning Notification..!",
      duration: 3000
    },
    {
    type: "info",
    message: "Testing info Notification..!",
    duration: 3000
    }
  ];

  // change the position of notification from here
  const {  NotificationComponent, triggerNotification } = useNotification("top-left");

  return (
    <>
      <div>
        {notificationInfo.map(({type, message, duration}) => <button onClick={() => triggerNotification({type, message, duration})} >{type}</button>)}
        {/* <Notification type='success' message={'New Notification'}/> */}
        {/* <button onClick={() => triggerNotification({
          type: "error",
          message: "Testing error Notification..!",
          duration: 3000
        })
        } >Trigger Success</button>
        <button onClick={() => triggerNotification({
          type: "success",
          message: "Testing success Notification..!",
          duration: 3000
        })
        } >Trigger Success</button>
        <button onClick={() => triggerNotification({
          type: "warning",
          message: "Testing warning Notification..!",
          duration: 3000
        })
        } >Trigger Success</button>
        <button onClick={() => triggerNotification({
          type: "info",
          message: "Testing info Notification..!",
          duration: 3000
        })
        } >Trigger Success</button> */}
        {NotificationComponent}
      </div>
    </>
  )
}

export default App
