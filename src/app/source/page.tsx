import { GitBranch, GitCommit, RefreshCw } from 'lucide-react';

export default function SourcePage() {
  const commits = [
    { hash: '7e815ab', msg: 'feat: add erpnext blueprint to swarm definition', author: 'steve@agency.com', time: '2 hours ago' },
    { hash: '3a4f91c', msg: 'fix: update cloudflare ingress rules for rant', author: 'steve@agency.com', time: '5 hours ago' },
    { hash: '9b2c14d', msg: 'chore: bump nextcloud version to 29.0.4', author: 'steve@agency.com', time: '1 day ago' },
    { hash: 'f5d8e21', msg: 'feat: initial immutable nixos gateway proxy config', author: 'steve@agency.com', time: '2 days ago' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>GitOps Source Sync</h1>
        <p>Upstream repository state tracking and automated blueprint compilation triggers.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="panel">
          <h3 style={{ fontSize: '0.875rem', marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Remote Repository</h3>
          <div className="font-mono" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--panel-border)', borderRadius: '2px', color: 'var(--accent-primary)', marginBottom: '16px' }}>
            git@gitlab.com:agency-internal/infrastructure-prod.git
          </div>
          <div className="kpi-grid">
             <div className="kpi-block" style={{ border: 'none', background: 'transparent', padding: '0' }}><div className="kpi-label">Active Branch</div><div className="kpi-value font-mono">main</div></div>
             <div className="kpi-block" style={{ border: 'none', background: 'transparent', padding: '0' }}><div className="kpi-label">Sync Status</div><div className="kpi-value" style={{color:'var(--success)'}}>In Sync</div></div>
          </div>
        </div>

        <div className="panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <RefreshCw size={32} color="var(--success)" style={{ margin: '0 auto 16px' }} />
            <div style={{ fontWeight: 600, marginBottom: '8px' }}>Continuous Compilation Active</div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Last successful pull: 4 minutes ago. Modulix is monitoring the remote branch for changes.</div>
          </div>
        </div>
      </div>

      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--panel-border)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', margin: 0 }}>Recent Commits (Deployed)</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th style={{ width: '100px' }}>Commit</th>
              <th>Message</th>
              <th>Author</th>
              <th style={{ textAlign: 'right' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {commits.map((commit, i) => (
              <tr key={i}>
                <td><GitCommit size={14} color="var(--text-muted)" /></td>
                <td className="font-mono" style={{ color: 'var(--accent-secondary)' }}>{commit.hash}</td>
                <td className="font-mono">{commit.msg}</td>
                <td style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>{commit.author}</td>
                <td style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>{commit.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
