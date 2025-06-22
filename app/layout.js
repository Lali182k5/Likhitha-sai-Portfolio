// app/layout.jsx
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Portfolio',
  description: 'A modern developer portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
