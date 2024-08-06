import '@/styles/tailwind.css'

export default async function RootLayout({ children }) {
  return (
    <html>
      <body>
        { children }
      </body>
    </html>
  )
}
