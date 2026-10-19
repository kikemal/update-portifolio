import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="case">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>This page wandered off.</h1>
        <p className="case-summary">The work is still on the home page.</p>
        <Button href="/">Back home</Button>
      </div>
    </main>
  );
}
