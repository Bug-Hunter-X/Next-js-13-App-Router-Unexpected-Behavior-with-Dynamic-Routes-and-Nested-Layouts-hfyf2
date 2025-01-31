```javascript
// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```
```javascript
// app/blog/page.js

export default function BlogPage() {
  return (
    <div>Blog Home</div>
  );
}
```
```javascript
// app/blog/[slug]/page.js

export default function BlogPost({params}) {
  return (
    <div>Blog Post: {params.slug}</div>
  );
}
```