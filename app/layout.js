import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from "@/app/components/header";
import {Footer} from "@/app/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enigmart.ru - ремонт холодильников, стиральных машин',
  description: 'Бесплатно выезжаю по Томску и до 30 км от города!',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <script
          dangerouslySetInnerHTML={{
              __html: `
              (function(w, d, s, o){
                var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';
                j.onload = function() {
                  if (document.readyState !== 'loading') Marquiz.init(o);
                  else document.addEventListener("DOMContentLoaded", function() {
                    Marquiz.init(o);
                  });
                };
                d.head.insertBefore(j, d.head.firstElementChild);
              })(window, document, 'script', {
                host: '//quiz.marquiz.ru',
                region: 'eu',
                id: '64add4288eaa61002591a61d',
                autoOpen: false,
                autoOpenFreq: 'once',
                openOnExit: false,
                disableOnMobile: false
              });
            `
          }}
      ></script>
      <Header/>

      <main>
        {children}
      </main>
      <footer>
          <Footer/>
      </footer>
      </body>
    </html>
  )
}
