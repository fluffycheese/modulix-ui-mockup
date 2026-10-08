import { ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  const apps = [
    { id: "bp-nc-01", name: "Nextcloud", url: "cloud.agency.com", status: "active", version: "29.0.4", platform: "Swarm", nodes: "worker-01, worker-02, worker-03" },
    { id: "bp-rant-01", name: "RANT Website", url: "rant.agency.com", status: "active", version: "v2.1.0", platform: "Cloudflare", nodes: "cf-global" },
    { id: "bp-git-01", name: "GitLab CE", url: "git.agency.com", status: "active", version: "16.11", platform: "Swarm", nodes: "worker-04, worker-05" },
    { id: "bp-kc-01", name: "Keycloak", url: "sso.agency.com", status: "active", version: "24.0.1", platform: "Swarm", nodes: "worker-01, worker-05" },
    { id: "bp-photo-01", name: "PhotoPrism", url: "photos.agency.com", status: "syncing", version: "231128", platform: "NixOS", nodes: "gateway-01" },
    { id: "bp-erp-01", name: "ERPNext", url: "erp.agency.com", status: "active", version: "v15.1", platform: "Swarm", nodes: "worker-02, worker-03, worker-04, worker-05" },
    { id: "bp-vault-01", name: "Vaultwarden", url: "vault.agency.com", status: "active", version: "1.30.5", platform: "Swarm", nodes: "worker-01" },
    { id: "bp-kuma-01", name: "Uptime Kuma", url: "status.agency.com", status: "active", version: "1.23.11", platform: "NixOS", nodes: "gateway-02" }
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Infrastructure Dashboard</h1>
          <p>Global view of deployed capabilities and underlying compute architecture.</p>
        </div>
        <button className="btn">Provision Resource</button>
      </header>

      <div style={{ marginBottom: '40px' }}>
        <h2>System Telemetry Overview</h2>
        <div className="kpi-grid">
          <div className="kpi-block">
            <div className="kpi-label">Swarm Compute</div>
            <div className="kpi-value">8 <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>/ 8</span></div>
            <div style={{fontSize: '0.6875rem', color: 'var(--success)', marginTop: '4px'}}>All nodes reporting healthy</div>
          </div>
          <div className="kpi-block">
            <div className="kpi-label">Immutable Proxies</div>
            <div className="kpi-value">2 <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>/ 2</span></div>
            <div style={{fontSize: '0.6875rem', color: 'var(--success)', marginTop: '4px'}}>NixOS configurations matching</div>
          </div>
          <div className="kpi-block">
            <div className="kpi-label">Cloudflare Edge</div>
            <div className="kpi-value" style={{color: 'var(--success)'}}>OK</div>
            <div style={{fontSize: '0.6875rem', color: 'var(--text-secondary)', marginTop: '4px'}}>Routing normal</div>
          </div>
          <div className="kpi-block">
            <div className="kpi-label">Blueprint Drift</div>
            <div className="kpi-value">0%</div>
            <div style={{fontSize: '0.6875rem', color: 'var(--text-secondary)', marginTop: '4px'}}>Verified 12m ago</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2>Deployed Capabilities</h2>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}><span className="font-mono">8</span> total resources</div>
        </div>
        
        <div style={{ border: '1px solid var(--panel-border)', borderRadius: '2px', overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}></th>
                <th>Blueprint ID</th>
                <th>Capability</th>
                <th>Endpoint</th>
                <th>Platform</th>
                <th>Target Hosts</th>
                <th>Version</th>
                <th style={{ textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr key={app.id}>
                  <td style={{ textAlign: 'center' }}>
                    {app.status === 'active' ? <CheckCircle2 size={14} color="var(--success)" /> : <AlertCircle size={14} color="var(--warning)" />}
                  </td>
                  <td className="font-mono" style={{ color: 'var(--text-muted)' }}>{app.id}</td>
                  <td style={{ fontWeight: 500 }}>{app.name}</td>
                  <td>
                    <a href={`https://${app.url}`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {app.url} <ExternalLink size={10} />
                    </a>
                  </td>
                  <td>
                    <span className="tag neutral">{app.platform}</span>
                  </td>
                  <td className="font-mono">{app.nodes}</td>
                  <td className="font-mono">{app.version}</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`tag ${app.status === 'active' ? 'success' : 'warning'}`}>
                      {app.status === 'active' ? 'ONLINE' : 'SYNCING'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
