import { useEffect, useState } from "react";
import { API_PREFIX, type HealthResponse } from "@prenj/shared";

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);

  useEffect(() => {
    fetch(`${API_PREFIX}/health`)
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth(null));
  }, []);

  return (
    <main>
      <h1>Prenj Adventures</h1>
      <p>Backend: {health ? `${health.status} (${health.timestamp})` : "unreachable"}</p>
    </main>
  );
}
