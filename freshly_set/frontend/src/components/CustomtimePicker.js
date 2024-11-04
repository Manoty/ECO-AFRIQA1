import React, { useState } from 'react';

const ScrollableTimePicker = () => {
    const [startTime, setStartTime] = useState({ hour: 12, minute: 0 });
    const [endTime, setEndTime] = useState({ hour: 13, minute: 0 });

    const hours = Array.from({ length: 24 }, (_, i) => i); // 0 to 23
    const minutes = Array.from({ length: 60 }, (_, i) => i); // 0 to 59

    const handleTimeChange = (type, value, timeSetter) => {
        timeSetter((prevTime) => ({
            ...prevTime,
            [type]: value,
        }));
    };

    return (
        <div className="flex items-center space-x-4">
            {/* Start Time */}
            <div className="flex flex-col items-center">
                <h3 className="text-gray-700 font-medium">Start Time</h3>
                <div className="flex space-x-2 border rounded-lg p-2 bg-gray-100 shadow">
                    <div className="overflow-y-scroll h-32 w-12 border-r text-center">
                        {hours.map((hour) => (
                            <div
                                key={hour}
                                className={`py-1 cursor-pointer ${
                                    hour === startTime.hour ? 'bg-green-500 text-white' : 'text-gray-700'
                                }`}
                                onClick={() => handleTimeChange('hour', hour, setStartTime)}
                            >
                                {hour.toString().padStart(2, '0')}
                            </div>
                        ))}
                    </div>
                    <div className="overflow-y-scroll h-32 w-12 border-r text-center ">
    {hours.map((hour) => (
        <div
            key={hour}
            className={`py-1 cursor-pointer ${
                hour === startTime.hour ? 'bg-green-500 text-white' : 'text-gray-700'
            }`}
            onClick={() => handleTimeChange('hour', hour, setStartTime)}
        >
            {hour.toString().padStart(2, '0')}
        </div>
    ))}
</div>
                </div>
            </div>

            <span className="text-gray-700 font-bold">TO</span>

            {/* End Time */}
            <div className="flex flex-col items-center">
                <h3 className="text-gray-700 font-medium">End Time</h3>
                <div className="flex space-x-2 border rounded-lg p-2 bg-gray-100 shadow">
                    <div className="overflow-y-scroll h-32 w-12 border-r text-center">
                        {hours.map((hour) => (
                            <div
                                key={hour}
                                className={`py-1 cursor-pointer ${
                                    hour === endTime.hour ? 'bg-green-500 text-white' : 'text-gray-700'
                                }`}
                                onClick={() => handleTimeChange('hour', hour, setEndTime)}
                            >
                                {hour.toString().padStart(2, '0')}
                            </div>
                        ))}
                    </div>
                    <div className="overflow-y-scroll h-32 w-12 text-center">
                        {minutes.map((minute) => (
                            <div
                                key={minute}
                                className={`py-1 cursor-pointer ${
                                    minute === endTime.minute ? 'bg-green-500 text-white' : 'text-gray-700'
                                }`}
                                onClick={() => handleTimeChange('minute', minute, setEndTime)}
                            >
                                {minute.toString().padStart(2, '0')}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollableTimePicker;