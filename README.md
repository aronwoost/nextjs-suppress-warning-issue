# next.js `suppressHydrationWarning` issue

[What is `suppressHydrationWarning`?](https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning)

### How to reproduce

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000/ in browser

Actual result: "Hello Server" is displayed  
Expected result: "Hello Client" is displayed

### More infos

⚠️ This app is working with App Router. The issue **does not** happen with Page Router.

This is the code in question:

```jsx
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
```

`suppressHydrationWarning` does suppress the warning, but it does also prevents re-rendering. Without the `suppressHydrationWarning` prop, the text is correctly displayed but (of course) the warning is printed in the devtools console.
