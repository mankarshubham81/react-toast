import { useState } from 'react';
import './App.css';
import useNotification from './hooks/use-notification';

function App() {
  const [position, setPosition] = useState('top-left'); // State to store the selected position

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
  const { NotificationComponent, triggerNotification } = useNotification(position);

  return (
    <>
      <div className='main-container'>
        <div className="control-panel">
          <label htmlFor="position-select">Select Notification Position: </label>
          <select
            id="position-select"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="top-left">Top Left</option>
            <option value="top-right">Top Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
        <div className="button-grid">
          {notificationInfo.map(({ type, message, duration }) => (
            <button key={type} onClick={() => triggerNotification({ type, message, duration })}>
              {type}
            </button>
          ))}
        </div>
        {NotificationComponent}
      </div>
    </>
  );
}

export default App;
