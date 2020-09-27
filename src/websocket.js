import store from "./redux/store";
import { setAreas } from "./redux/actions";

// Create WebSocket connection.
// const Socket = new WebSocket('ws://165.22.38.77:3002/bananas');

// Connection opened
// Socket.addEventListener('open', function (event) {
//   Socket.send('Hello Server!');
// });

// Listen for messages
// Socket.addEventListener('message', function (event) {
//   console.log('Message from server ', JSON.parse(event.data));
//   let update = JSON.parse(event.data);
//   console.log("State:", store.getState());
//   let areas = store.getState().areas;
//   for(let i=0; i < areas.length; i++) {
//     for (let j=0; j < areas[i].tasks.length; j++) {
//       if (areas[i].tasks[j].id === update.id) {
//         if (update.action === "Leaving") {
//           areas[i].tasks[j].current_volunteers -= 1;
//           return setAreas(areas);
//         } else if (update.action === "Joining") {
//           areas[i].tasks[j].current_volunteers += 1;
//           return setAreas(areas);
//         }
//       }
//     }
//   }
// });

// Socket.addEventListener('joinTask', function (event) {
//   console.log("Join Task Event:", event);
// });

// Socket.addEventListener('leaveTask', function (event) {
//   console.log("Leave Task Event:", event);
// });

// Socket.addEventListener('newTask', function (event) {
//   console.log("New Task Event:", event);
// });

// export default Socket;