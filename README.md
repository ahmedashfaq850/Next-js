Next.js Functions

1. usePathName for checking active links
2. Link Component for navigating in Server Components
3. useRouter Hook => The useRouter hook allows you to programmatically change routes from Client Components.
4. redirect Function => For Server Components, use the redirect function instead. (it will automatically work with out user interaction)
5. window.history.pushState using (useSearchParams)
6. window.history.replaceState using (usePathname)

Concepts

1. Pre-fetching (link component by default pre fetch the route )
2. Next.js has an in-memory client-side cache called the Router Cache. As users navigate around the app, the React Server Component Payload of prefetched route segments and visited routes are stored in the cache.
3. Partial rendering means only the route segments that change on navigation re-render on the client, and any shared segments are preserved. ------ (Watch the video for implementation)
