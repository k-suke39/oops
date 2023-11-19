import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="px-4 py-10 bg-gray-50 bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
