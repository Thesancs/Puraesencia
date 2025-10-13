import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Script from 'next/script';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Baño de Oro',
  description: 'Transforma tu vida vendiendo Sales de Baño desde casa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className='scroll-smooth'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1702412167381771');
              fbq('track', 'PageView');
            `}}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        {/* Meta Pixel Code (noscript) */}
        <noscript>
            <Image
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1702412167381771&ev=PageView&noscript=1"
                alt=""
            />
        </noscript>
        {/* End Meta Pixel Code */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}
