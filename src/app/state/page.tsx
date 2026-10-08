import { Save, HardDrive, ShieldCheck } from 'lucide-react';

export default function StatePage() {
  const volumes = [
    { name: 'nc_data', capability: 'Nextcloud', size: '500Gi', used: '342Gi', engine: 'GlusterFS', snapshot: '2 hours ago' },
    { name: 'nc_db', capability: 'Nextcloud', size: '50Gi', used: '12Gi', engine: 'Local Bind', snapshot: '2 hours ago' },
    { name: 'gitlab_data', capability: 'GitLab CE', size: '1Ti', used: '850Gi', engine: 'GlusterFS', snapshot: '4 hours ago' },
    { name: 'gitlab_db', capability: 'GitLab CE', size: '100Gi', used: '45Gi', engine: 'Local Bind', snapshot: '4 hours ago' },
    { name: 'erpnext_db', capability: 'ERPNext', size: '100Gi', used: '22Gi', engine: 'Local Bind', snapshot: '1 hour ago' },
    { name: 'keycloak_db', capability: 'Keycloak', size: '20Gi', used: '2Gi', engine: 'Local Bind', snapshot: '6 hours ago' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>State & Backups</h1>
        <p>Persistent storage volumes, cluster replication, and automated snapshot status.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="panel kpi-block">
          <div className="kpi-label">Total Persistent State</div>
          <div className="kpi-value font-mono">1.25 TiB</div>
        </div>
        <div className="panel kpi-block">
          <div className="kpi-label">Active Volumes</div>
          <div className="kpi-value font-mono">18</div>
        </div>
        <div className="panel kpi-block">
          <div className="kpi-label">Backup Health</div>
          <div className="kpi-value font-mono" style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} /> VERIFIED
          </div>
        </div>
      </div>

      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>Volume Name</th>
              <th>Bound Capability</th>
              <th>Storage Engine</th>
              <th>Provisioned</th>
              <th>Utilized</th>
              <th style={{ textAlign: 'right' }}>Last Snapshot</th>
            </tr>
          </thead>
          <tbody>
            {volumes.map((vol, i) => (
              <tr key={i}>
                <td><HardDrive size={14} color="var(--text-muted)" /></td>
                <td className="font-mono" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{vol.name}</td>
                <td>{vol.capability}</td>
                <td><span className="tag neutral">{vol.engine}</span></td>
                <td className="font-mono">{vol.size}</td>
                <td className="font-mono" style={{ color: 'var(--accent-secondary)' }}>{vol.used}</td>
                <td style={{ textAlign: 'right', color: 'var(--success)' }}>{vol.snapshot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
