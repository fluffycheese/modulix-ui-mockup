import { ExternalLink, Database, Globe, Cloud, Shield, GitMerge, Key, Server, Activity } from 'lucide-react';

export default function Dashboard() {
  const apps = [
    { name: "Nextcloud", url: "https://cloud.agency.com", icon: <Cloud size={24} color="#0082c9" />, status: "active", version: "29.0.4", platform: "Modulix Standard (Swarm)" },
    { name: "RANT Website", url: "https://rant.agency.com", icon: <Globe size={24} color="#f59e0b" />, status: "active", version: "v2.1.0", platform: "Cloudflare Pages" },
    { name: "GitLab CE", url: "https://git.agency.com", icon: <GitMerge size={24} color="#fc6d26" />, status: "active", version: "16.11", platform: "Modulix Standard (Swarm)" },
    { name: "Keycloak", url: "https://sso.agency.com", icon: <Key size={24} color="#00c0f3" />, status: "active", version: "24.0.1", platform: "Modulix Standard (Swarm)" },
    { name: "PhotoPrism", url: "https://photos.agency.com", icon: <Database size={24} color="#10b981" />, status: "syncing", version: "231128", platform: "Immutable (NixOS)" },
    { name: "ERPNext", url: "https://erp.agency.com", icon: <Server size={24} color="#007bff" />, status: "active", version: "v15.1", platform: "Modulix Standard (Swarm)" },
    { name: "Vaultwarden", url: "https://vault.agency.com", icon: <Shield size={24} color="#175DDC" />, status: "active", version: "1.30.5", platform: "Modulix Standard (Swarm)" },
    { name: "Uptime Kuma", url: "https://status.agency.com", icon: <Activity size={24} color="#22c55e" />, status: "active", version: "1.23.11", platform: "Immutable (NixOS)" }
  ];

  return (
    <div>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Client Dashboard</h1>
          <p>Your installed capabilities and active endpoints.</p>
        </div>
        <button className="btn">Deploy New Service</button>
      </header>

      <h2>Active Services</h2>
      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {apps.map((app, i) => (
          <div key={i} className="glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="app-logo">
                {app.icon}
              </div>
              <span className={`badge ${app.status}`}>
                {app.status === 'active' ? '● Online' : '⟳ Syncing'}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>{app.name}</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <a href={app.url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                {app.url} <ExternalLink size={12} />
              </a>
            </div>

            <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <span>Version {app.version}</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{app.platform}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '48px' }}>
        <h2>Infrastructure Health</h2>
        <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 48px', padding: '32px' }}>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '8px' }}>Swarm Nodes</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>8 / 8</div>
          </div>
          <div style={{ width: '1px', background: 'var(--panel-border)' }}></div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '8px' }}>Immutable (NixOS)</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>2 / 2</div>
          </div>
          <div style={{ width: '1px', background: 'var(--panel-border)' }}></div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '8px' }}>Cloudflare CDN</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--success)', marginTop: '10px' }}>Operational</div>
          </div>
          <div style={{ width: '1px', background: 'var(--panel-border)' }}></div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '8px' }}>Blueprint Drift</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>0%</div>
          </div>
          <div style={{ width: '1px', background: 'var(--panel-border)' }}></div>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '8px' }}>Last Validated</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '10px' }}>Just now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
