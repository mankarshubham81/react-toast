import { useState } from 'react';
import './App.css';
import useNotification from './hooks/use-notification';

function App() {

  const [count, setCount] = useState(0);

  const notificationInfo = [
    {
      type: "error",
      message: "Testing error Notification..!",
      duration: 4000
    },
    {
      type: "success",
      message: "Testing success Notification..!",
      duration: 4000
    },
    {
      type: "warning",
      message: "Testing warning Notification..!",
      duration: 4000
    },
    {
      type: "info",
      message: "Testing info Notification..!",
      duration: 4000
    }
  ];

  // change the position of notification from here
  const { NotificationComponent, triggerNotification } = useNotification("top-left");

  return (
    <>
      <div>
        {notificationInfo.map(({ type, message, duration }) => (
          <button key={type} onClick={() => triggerNotification({ type, message, duration })}>
            {type}
          </button>
        ))}
        {NotificationComponent}
      </div>
    </>
  );
}

export default App;
