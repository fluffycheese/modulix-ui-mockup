import { Server, Plus, RefreshCw, Terminal, HardDrive, Shield } from 'lucide-react';

export default function ControlPanel() {
  const nodes = [
    { hostname: 'manager-01', ip: '10.10.10.11', type: 'Swarm Manager', status: 'Ready', platform: 'Debian' },
    { hostname: 'manager-02', ip: '10.10.10.12', type: 'Swarm Manager', status: 'Ready', platform: 'Debian' },
    { hostname: 'manager-03', ip: '10.10.10.13', type: 'Swarm Manager', status: 'Ready', platform: 'Debian' },
    { hostname: 'worker-01', ip: '10.10.10.21', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { hostname: 'worker-02', ip: '10.10.10.22', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { hostname: 'worker-03', ip: '10.10.10.23', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { hostname: 'worker-04', ip: '10.10.10.24', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { hostname: 'worker-05', ip: '10.10.10.25', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { hostname: 'gateway-nix-01', ip: '10.10.10.5', type: 'Edge Proxy', status: 'Ready', platform: 'NixOS' },
    { hostname: 'gateway-nix-02', ip: '10.10.10.6', type: 'Edge Proxy', status: 'Ready', platform: 'NixOS' },
    { hostname: 'cloudflare-global', ip: 'Anycast', type: 'CDN / WAF', status: 'Active', platform: 'Cloudflare' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '40px' }}>
        <h1>Control Panel</h1>
        <p>Modify inventory topologies and trigger deployment pipelines across all targets.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        
        {/* Topology Management */}
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2>Infrastructure Topology</h2>
            <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.875rem' }}>
              <Plus size={14} /> Provision Node
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--panel-border)', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '12px 8px', fontWeight: 500 }}>Hostname</th>
                  <th style={{ padding: '12px 8px', fontWeight: 500 }}>Platform</th>
                  <th style={{ padding: '12px 8px', fontWeight: 500 }}>IP Address</th>
                  <th style={{ padding: '12px 8px', fontWeight: 500 }}>Role</th>
                  <th style={{ padding: '12px 8px', fontWeight: 500 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {nodes.map((node, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                    <td style={{ padding: '12px 8px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                      {node.platform === 'NixOS' ? <HardDrive size={14} color="var(--success)" /> : 
                       node.platform === 'Cloudflare' ? <Shield size={14} color="#f59e0b" /> :
                       <Server size={14} color="var(--accent-primary)" />}
                      {node.hostname}
                    </td>
                    <td style={{ padding: '12px 8px', color: 'var(--text-secondary)' }}>
                      {node.platform}
                    </td>
                    <td style={{ padding: '12px 8px', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      {node.ip}
                    </td>
                    <td style={{ padding: '12px 8px' }}>
                      <span style={{ 
                        background: node.type.includes('Manager') ? 'rgba(139, 92, 246, 0.1)' : 
                                    node.type.includes('CDN') ? 'rgba(245, 158, 11, 0.1)' :
                                    node.type.includes('Edge') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)', 
                        color: node.type.includes('Manager') ? 'var(--accent-secondary)' : 
                               node.type.includes('CDN') ? '#f59e0b' :
                               node.type.includes('Edge') ? 'var(--success)' : 'var(--accent-primary)',
                        padding: '4px 8px', 
                        borderRadius: '4px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600 
                      }}>
                        {node.type}
                      </span>
                    </td>
                    <td style={{ padding: '12px 8px' }}>
                      <span className="badge active">● {node.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Center */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-panel">
            <h2>Quick Actions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              <button className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                <RefreshCw size={16} /> Run Full Pipeline Rebuild
              </button>
              <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Run OS Updates (Debian)
              </button>
              <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Run Nix Flake Update
              </button>
            </div>
          </div>

          <div className="glass-panel" style={{ flex: 1, background: '#000', border: '1px solid #333' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
              <Terminal size={14} />
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Deployment Log</span>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#10b981', lineHeight: 1.8 }}>
              <div>$ ansible-playbook site.yaml</div>
              <div style={{ color: '#6b7280' }}>PLAY [all] **********************</div>
              <div>TASK [Gathering Facts] ********</div>
              <div style={{ color: '#3b82f6' }}>ok: [manager-01]</div>
              <div style={{ color: '#3b82f6' }}>ok: [manager-02]</div>
              <div style={{ color: '#3b82f6' }}>ok: [manager-03]</div>
              <div style={{ color: '#3b82f6' }}>ok: [gateway-nix-01]</div>
              <div style={{ color: '#6b7280' }}>...</div>
              <div>Waiting for trigger...</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
