import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomDatePicker = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date, view }) =>
                    view === 'month' && (date.getDay() === 3 || date.getDay() === 5) ? 'highlight' : null
                }
                prev2Label={null}
                next2Label={null}
                className="border-none rounded-lg shadow-lg p-4"
            />
        </div>
    );
};

export default CustomDatePicker;