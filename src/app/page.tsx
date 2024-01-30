"use client";

export default function Home() {
  let helloLabel = "";

  if (typeof window !== "undefined") {
    helloLabel = "Client";
  } else {
    helloLabel = "Server";
  }

  return (
    <main>
      <h1 suppressHydrationWarning>Hello {helloLabel}</h1>
    </main>
  );
}
