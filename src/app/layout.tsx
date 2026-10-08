"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, LineChart, FileText, Settings, Layers, Box } from 'lucide-react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Modulix UI</title>
      </head>
      <body>
        <div className="app-container">
          <aside className="sidebar">
            <div className="brand">
              <div className="brand-icon" style={{ background: 'transparent' }}>
                <img src="/logo.svg" alt="Modulix Logo" width={32} height={32} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'Outfit, sans-serif' }}>Modulix UI</h2>
            </div>

            <nav>
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>
              <Link href="/charts" className={`nav-link ${pathname === '/charts' ? 'active' : ''}`}>
                <LineChart size={18} />
                <span>Metrics & Logs</span>
              </Link>
              <Link href="/wizard" className={`nav-link ${pathname === '/wizard' ? 'active' : ''}`}>
                <FileText size={18} />
                <span>Blueprint Wizard</span>
              </Link>
              <Link href="/control" className={`nav-link ${pathname === '/control' ? 'active' : ''}`}>
                <Settings size={18} />
                <span>Control Panel</span>
              </Link>
            </nav>

            <div style={{ marginTop: 'auto', padding: '24px 0', borderTop: '1px solid var(--panel-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  AD
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Agency Dev</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>admin@agency.com</div>
                </div>
              </div>
            </div>
          </aside>
          
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
