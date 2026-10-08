import { Key, Shield, Users } from 'lucide-react';

export default function IdentityPage() {
  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Identity & Access</h1>
        <p>Centralized authorization policies and secret management integration.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="panel">
          <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={16} color="var(--accent-primary)" /> Keycloak Tenants
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ border: '1px solid var(--panel-border)', padding: '16px', borderRadius: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="font-mono" style={{ fontWeight: 600 }}>agency-prod-01</span>
                <span className="tag success">Active</span>
              </div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Users: 1,405 | Groups: 12</div>
            </div>
            <div style={{ border: '1px solid var(--panel-border)', padding: '16px', borderRadius: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="font-mono" style={{ fontWeight: 600 }}>agency-dev-01</span>
                <span className="tag neutral">Staging</span>
              </div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Users: 24 | Groups: 3</div>
            </div>
          </div>
        </div>

        <div className="panel">
          <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={16} color="var(--success)" /> HashiCorp Vault Integration
          </h3>
          <div className="kpi-grid" style={{ marginBottom: '16px' }}>
             <div className="kpi-block"><div className="kpi-label">Status</div><div className="kpi-value font-mono" style={{color:'var(--success)', fontSize: '1rem'}}>UNSEALED</div></div>
             <div className="kpi-block"><div className="kpi-label">Active Leases</div><div className="kpi-value font-mono" style={{fontSize: '1rem'}}>42</div></div>
          </div>
          <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Vault Agent is actively injecting secrets via sidecar on 142 containers.
          </div>
        </div>
      </div>

      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--panel-border)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', margin: 0 }}>Secret Bindings</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Vault Path</th>
              <th>Bound Capability</th>
              <th>Last Rotated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono" style={{ color: 'var(--accent-primary)' }}>secret/data/agency/nextcloud/db</td>
              <td>bp-nc-01</td>
              <td className="font-mono">2026-09-15</td>
            </tr>
            <tr>
              <td className="font-mono" style={{ color: 'var(--accent-primary)' }}>secret/data/agency/gitlab/root</td>
              <td>bp-git-01</td>
              <td className="font-mono">2026-10-01</td>
            </tr>
            <tr>
              <td className="font-mono" style={{ color: 'var(--accent-primary)' }}>secret/data/agency/cloudflare/api</td>
              <td>bp-rant-01</td>
              <td className="font-mono" style={{ color: 'var(--warning)' }}>2025-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
