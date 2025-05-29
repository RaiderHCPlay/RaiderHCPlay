"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | undefined>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className={"footer-container"}>
      <footer>© {year} RaiderHCPlay</footer>
    </div>
  );
}
