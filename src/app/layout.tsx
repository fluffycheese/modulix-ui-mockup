"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, LineChart, FileText, Settings, Activity, Book, Key, Globe, GitBranch, Save, DollarSign, Menu, X } from 'lucide-react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Modulix Compiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <div className="app-container">
          <div className="mobile-header">
            <div className="brand" style={{ marginBottom: 0, paddingLeft: 0 }}>
              <img src="/logo.svg" alt="Modulix Logo" width={24} height={24} />
              <h2 style={{ margin: 0, fontSize: '1rem', border: 'none', padding: 0 }}>Modulix Compiler</h2>
            </div>
            <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="brand">
              <div style={{ background: 'transparent', display: 'flex', alignItems: 'center' }}>
                <img src="/logo.svg" alt="Modulix Logo" width={24} height={24} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1rem', border: 'none', padding: 0 }}>Modulix Compiler</h2>
            </div>

            <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', paddingLeft: '12px' }}>Operational Console</div>
            <nav style={{ marginBottom: '24px' }}>
              <Link href="/" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                <LayoutDashboard size={14} />
                <span>Dashboard</span>
              </Link>
              <Link href="/wizard" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/wizard' ? 'active' : ''}`}>
                <FileText size={14} />
                <span>Blueprint Compiler</span>
              </Link>
              <Link href="/control" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/control' ? 'active' : ''}`}>
                <Settings size={14} />
                <span>Infrastructure Topology</span>
              </Link>
              <Link href="/charts" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/charts' ? 'active' : ''}`}>
                <LineChart size={14} />
                <span>Telemetry & Metrics</span>
              </Link>
            </nav>

            <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', paddingLeft: '12px' }}>System Audit & State</div>
            <nav>
              <Link href="/source" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/source' ? 'active' : ''}`}>
                <GitBranch size={14} />
                <span>Source Sync</span>
              </Link>
              <Link href="/audit" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/audit' ? 'active' : ''}`}>
                <Activity size={14} />
                <span>Event Stream</span>
              </Link>
              <Link href="/blueprints" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/blueprints' ? 'active' : ''}`}>
                <Book size={14} />
                <span>Blueprint Library</span>
              </Link>
              <Link href="/state" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/state' ? 'active' : ''}`}>
                <Save size={14} />
                <span>State & Backups</span>
              </Link>
              <Link href="/identity" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/identity' ? 'active' : ''}`}>
                <Key size={14} />
                <span>Identity & Access</span>
              </Link>
              <Link href="/network" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/network' ? 'active' : ''}`}>
                <Globe size={14} />
                <span>Network Map</span>
              </Link>
              <Link href="/costs" onClick={() => setIsSidebarOpen(false)} className={`nav-link ${pathname === '/costs' ? 'active' : ''}`}>
                <DollarSign size={14} />
                <span>Resource Costs</span>
              </Link>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--panel-border)' }}>
              <div style={{ padding: '0 12px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>admin@agency.com</div>
                <div className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '4px' }}>Tenant: agency-prod-01</div>
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
