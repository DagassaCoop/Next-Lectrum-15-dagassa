import { useState, useEffect } from "react";

const useFormattedDate = (date: string) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(
    () => setFormattedDate(new Date(date).toLocaleDateString("en-US")),
    []
  );

  return formattedDate;
};

export default useFormattedDate;
