# Next.js 13 App Router Unexpected Behavior with Dynamic Routes and Nested Layouts

This repository demonstrates an unexpected behavior in Next.js 13's App Router when combining dynamic routes and nested layouts.  The issue arises when a dynamic route segment is used within a nested layout, leading to incorrect rendering or unexpected route matching.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/blog/post-1`.

You will likely observe unexpected behavior, such as the layout not rendering correctly or a wrong page being displayed. 

## Expected Behavior

The expected behavior is that the nested layout should render correctly, showing the content of `/blog/post-1` based on the defined dynamic route segment.

## Actual Behavior

The actual behavior differs from what is expected and leads to incorrect rendering or routing issues. 

## Solution
The solution involves restructuring the file system and route definition to fix the unexpected behaviour. See the `bugSolution.js` file for details.