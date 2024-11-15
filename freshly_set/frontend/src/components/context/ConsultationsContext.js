import { createContext, useState } from "react";

export const ConsultationContext = createContext();

export const ConsultationProvider = ({ children }) => {

    const [name, setName] = useState("");
    const [meetingType, setMeetingType] = useState("onsite");
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [note, setNote] = useState("");

    const [selectedConsultants, setSelectedConsultants] = useState([]);

    const [consultant, setConsultant] = useState({})
    return(
        <ConsultationContext.Provider value={{ name, setName, meetingType, setMeetingType, date, setDate, time, setTime, note, setNote, consultant, setConsultant, selectedConsultants, setSelectedConsultants}}>
            {children}
        </ConsultationContext.Provider>
    )
}