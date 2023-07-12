import '@styles/globals.css'
import Provider from '@components/Provider'
import Navbar from '@components/landing/Navbar/index'
import Footer from '@components/landing/Footer/Footer'

export const metadata = {
  title: 'Landing',
  description: 'Discover and shared incredible prompts to use with ChatGPT',
}
 
export default function LandingLayout({ children }) {
 return (
    <html lang="en">      
      <body>
        {/* <Provider> */}
          <Navbar />
            {children}
          <Footer />
        {/* </Provider> */}
      </body>
    </html>
  )
}
