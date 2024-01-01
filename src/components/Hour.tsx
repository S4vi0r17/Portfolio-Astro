import { useState, useEffect } from "react";

const Hour = () => {
  const [formattedHour, setFormattedHour] = useState("");

  const formatHour = ({ clientDate, clientTimeZone }) => {
    const hour = clientDate.toLocaleString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: clientTimeZone,
    });
    return { hour };
  };
  useEffect(() => {
    // Obtenemos la hora local del cliente
    const clientDate = new Date();

    // Obtenemos la zona horaria del cliente
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Formateamos la hora usando la zona horaria del cliente
    const { hour } = formatHour({ clientDate, clientTimeZone });

    setFormattedHour(hour);
  }, []);

  return (
    <span className="text-3xl flex font-bold uppercase justify-center items-center h-full">
      {formattedHour}
    </span>
  );
};

export default Hour;
