import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const DrAppointment = () => {
  document.title = "(Appointment Page)";
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookAppointment
        handleDateChange={handleDateChange}
        date={selectedDate}
      ></BookAppointment>
      <Footer></Footer>
    </div>
  );
};

export default DrAppointment;