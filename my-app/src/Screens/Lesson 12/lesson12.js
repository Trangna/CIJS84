// import { useRef, useState } from "react";

// const App = () => {
//   let count = 0;
//   const countRef = useRef(0);
//   const [countState, setCountState] = useState(0);

//   console.log("count: ", count);
//   console.log("countRef: ", countRef.current);
//   console.log("countState", countState);

//   const increase = () => {
//     count++;
//   };

//   const increaseRef = () => {
//     countRef.current++;
//   };

//   const increaseState = () => {
//     setCountState(countState + 1);
//   };
//   return (
//     <div>
//       <div>
//         {count}
//         <button onClick={increase}>Increase Count</button>
//       </div>
//       <div>
//         {countRef.current}
//         <button onClick={increaseRef}>Increase CountRef</button>
//       </div>
//       <div>
//         {countState}
//         <button onClick={increaseState}>Increase CountState</button>
//       </div>
//     </div>
//   );
// };
