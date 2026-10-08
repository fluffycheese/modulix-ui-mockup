"use client";

import { Server, RefreshCw, Terminal, HardDrive, Shield } from 'lucide-react';

export default function ControlPanel() {
  const nodes = [
    { id: 'n-001', hostname: 'manager-01', ip: '10.10.10.11', type: 'Swarm Manager', status: 'Ready', platform: 'Debian' },
    { id: 'n-002', hostname: 'manager-02', ip: '10.10.10.12', type: 'Swarm Manager', status: 'Ready', platform: 'Debian' },
    { id: 'n-003', hostname: 'manager-03', ip: '10.10.10.13', type: 'Swarm Manager', status: 'Ready', platform: 'Debian' },
    { id: 'n-004', hostname: 'worker-01', ip: '10.10.10.21', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { id: 'n-005', hostname: 'worker-02', ip: '10.10.10.22', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { id: 'n-006', hostname: 'worker-03', ip: '10.10.10.23', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { id: 'n-007', hostname: 'worker-04', ip: '10.10.10.24', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { id: 'n-008', hostname: 'worker-05', ip: '10.10.10.25', type: 'Swarm Worker', status: 'Ready', platform: 'Debian' },
    { id: 'n-009', hostname: 'gateway-01', ip: '10.10.10.5', type: 'Edge Proxy', status: 'Ready', platform: 'NixOS' },
    { id: 'n-010', hostname: 'gateway-02', ip: '10.10.10.6', type: 'Edge Proxy', status: 'Ready', platform: 'NixOS' },
    { id: 'n-ext', hostname: 'cf-global', ip: 'Anycast', type: 'CDN / WAF', status: 'Active', platform: 'Cloudflare' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Infrastructure Topology</h1>
        <p>Manage hardware nodes and external edge integrations.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
        
        {/* Topology Management */}
        <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hostname</th>
                <th>Platform</th>
                <th>IP Address</th>
                <th>Role</th>
                <th style={{ textAlign: 'right' }}>State</th>
              </tr>
            </thead>
            <tbody>
              {nodes.map((node) => (
                <tr key={node.id}>
                  <td className="font-mono" style={{ color: 'var(--text-muted)' }}>{node.id}</td>
                  <td style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
                    {node.platform === 'NixOS' ? <HardDrive size={12} color="var(--success)" /> : 
                     node.platform === 'Cloudflare' ? <Shield size={12} color="var(--warning)" /> :
                     <Server size={12} color="var(--accent-primary)" />}
                    {node.hostname}
                  </td>
                  <td><span className="tag neutral">{node.platform}</span></td>
                  <td className="font-mono" style={{ color: 'var(--text-secondary)' }}>{node.ip}</td>
                  <td>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: node.type.includes('Manager') ? 'var(--accent-secondary)' : 'inherit' }}>
                      {node.type.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <span className="tag success">{node.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Center */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div className="panel" style={{ padding: '16px' }}>
            <h2 style={{ fontSize: '0.875rem', border: 'none', marginBottom: '16px', textTransform: 'uppercase' }}>Operations</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button className="btn" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <RefreshCw size={14} /> Rebuild All Nodes
              </button>
              <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <Terminal size={14} /> Run OS Updates (Debian)
              </button>
              <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <Terminal size={14} /> Update Nix Flakes
              </button>
            </div>
          </div>

          <div className="panel" style={{ flex: 1, background: '#000', border: '1px solid #1f2937', padding: '12px' }}>
            <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '12px', borderBottom: '1px solid #1f2937', paddingBottom: '8px' }}>
              /var/log/modulix.log
            </div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: '#10b981', lineHeight: 1.5 }}>
              <div>$ ansible-playbook site.yaml</div>
              <div style={{ color: '#6b7280' }}>PLAY [all] ***************</div>
              <div>TASK [Gathering Facts] ***</div>
              <div style={{ color: '#3b82f6' }}>ok: [manager-01]</div>
              <div style={{ color: '#3b82f6' }}>ok: [manager-02]</div>
              <div style={{ color: '#3b82f6' }}>ok: [manager-03]</div>
              <div style={{ color: '#3b82f6' }}>ok: [gateway-nix-01]</div>
              <div style={{ color: '#6b7280' }}>...</div>
              <div className="blink">_</div>
            </div>
            <style jsx>{`
              .blink { animation: blinker 1s linear infinite; }
              @keyframes blinker { 50% { opacity: 0; } }
            `}</style>
          </div>

        </div>

      </div>
    </div>
  );
}
