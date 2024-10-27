function ScheduleFooter() {
  const apiStreet = import.meta.env.VITE_STREET;
  const apiCity = import.meta.env.VITE_CITY;

  return (
    <div className="grid grid-rows-3 gap-5 sm:ml-auto">
      <div className="text-lg">Opening Hours</div>
      <div className="grid grid-rows-3 text-xs">
        <div>Mon - Fri: 8pm - 4am</div>
        <div>Saturday: 6pm - 4am</div>
        <div>Sunday: 6pm - 4pm</div>
      </div>
      <div className="grid grid-rows-2">
        <div>{apiStreet}</div>
        <div>{apiCity}</div>
      </div>
    </div>
  );
}

export default ScheduleFooter;