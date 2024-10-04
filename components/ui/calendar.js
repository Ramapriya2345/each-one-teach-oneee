// // components/ui/calendar.js
// import React, { useState } from 'react';
// import { format, addMonths, subMonths, isSameDay } from 'date-fns';

// const Calendar = ({ selected, onSelect }) => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const daysInMonth = (date) => {
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const firstDayOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   const renderDays = () => {
//     const days = [];
//     const totalDays = daysInMonth(currentMonth);
//     const startDay = firstDayOfMonth(currentMonth);

//     // Add empty slots for the days before the first day of the month
//     for (let i = 0; i < startDay; i++) {
//       days.push(<div key={`empty-${i}`} className="empty-day"></div>);
//     }

//     // Add actual days
//     for (let day = 1; day <= totalDays; day++) {
//       const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
//       days.push(
//         <div
//           key={day}
//           className={`day ${isSameDay(dayDate, selected) ? 'selected' : ''}`}
//           onClick={() => onSelect(dayDate)}
//         >
//           {day}
//         </div>
//       );
//     }
    
//     return days;
//   };

//   const handlePrevMonth = () => {
//     setCurrentMonth(subMonths(currentMonth, 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(addMonths(currentMonth, 1));
//   };

//   return (
//     <div className="calendar">
//       <div className="header">
//         <button onClick={handlePrevMonth} className="arrow">
//           &#9664; {/* Left arrow */}
//         </button>
//         <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
//         <button onClick={handleNextMonth} className="arrow">
//           &#9654; {/* Right arrow */}
//         </button>
//       </div>
//       <div className="days">
//         {renderDays()}
//       </div>
//       <style jsx>{`
//         .calendar {
//           border: 1px solid #ccc;
//           border-radius: 8px;
//           overflow: hidden;
//         }
//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 10px;
//           background:  #2c2e2e;
//           color:white
//         }
//         .arrow {
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           font-size: 18px;
//         }
//         .days {
//           display: grid;
//           grid-template-columns: repeat(7, 1fr);
//           gap: 5px;
//           padding: 10px;
//         }
//         .day, .empty-day {
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #fff;
//           border: 1px solid #eee;
//           border-radius: 4px;
//           cursor: pointer;
//         }
//         .day.selected {
//           background: #0070f3;
//           color: white;
//         }
//         .empty-day {
//           background: transparent;
//           border: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Calendar;
// components/ui/calendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarComponent = ({ className, ...props }) => {
  return (
    <Calendar 
      className={`border border-gray-200 rounded-md custom-calendar ${className}`} 
      {...props} 
    />
  );
};
