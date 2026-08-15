import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

export const metadata: Metadata = {
  title: 'TGR Logistics Services | Transporte de Carga Pesada y Aduanas',
  description: 'Empresa líder en logística y transporte de carga pesada. Operaciones aduaneras y marítimas. Conectamos puertos con destinos con seguridad y puntualidad.',
  keywords: 'logística, transporte de carga, aduanas, gandolas, contenedores, puertos, venezuela, transporte marítimo',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
