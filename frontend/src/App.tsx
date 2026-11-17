import { useEffect, useState } from "react";

interface HealthResponse {
  status: string;
  application: string;
}

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth(null));
  }, []);

  return (
    <main>
      <h1>Prenj Adventures</h1>
      <p>Backend: {health ? `${health.application} (${health.status})` : "unreachable"}</p>
    </main>
  );
}
