import { ReactNode } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hingula Vidya Pitha - Government Aided High School, Bhotaka</title>
        <meta name="description" content="Government aided high school under BSE Odisha, established 1992. Located at Bhotaka, Kuakhia, Jajpur district." />
        <meta name="keywords" content="school, education, BSE Odisha, Jajpur, Bhotaka, NCC, Eco Club, Hingula Vidya Pitha" />
        <meta name="author" content="Hingula Vidya Pitha" />
        <link rel="icon" href="/images/logos/favicon.ico" />
      </head>
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}