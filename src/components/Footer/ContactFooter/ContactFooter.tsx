function ContactFooter() {
  const apiPhone = import.meta.env.VITE_PHONE;
  const apiMail = import.meta.env.VITE_MAIL;
  
  const apiTG = import.meta.env.VITE_TG;
  const apiIG = import.meta.env.VITE_IG;

  return (
    <div className="grid grid-rows-3 cursor-pointer">
      <>Contact</>
      <div className="grid grid-rows-2 text-xs">
        <div>{apiPhone}</div>
        <div>{apiMail}</div>
      </div>
      <div className="grid grid-rows-2">
        <div>Stay Contacted</div>
        <div className="flex gap-2">
          <a href={apiTG}><img src="telegram.png" alt="" className="size-5"/></a>
          <a href={apiIG}><img src="instagram.png" alt="" className="size-5"/></a>
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
