"use client";

import { Activity, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function AuditPage() {
  const events = [
    { time: '2026-10-08T19:42:15Z', level: 'info', subsystem: 'compiler', msg: 'Blueprint [bp-nc-01] compiled successfully. Target: swarm.' },
    { time: '2026-10-08T19:42:01Z', level: 'info', subsystem: 'ansible', msg: 'Executing playbook: deploy_stack.yml on [manager-01]' },
    { time: '2026-10-08T19:40:55Z', level: 'warning', subsystem: 'ansible', msg: 'Drift detected on [worker-03]: /etc/docker/daemon.json modified.' },
    { time: '2026-10-08T18:15:22Z', level: 'error', subsystem: 'cloudflare', msg: 'API Rate limit exceeded for Zone: agency.com. Retrying in 60s.' },
    { time: '2026-10-08T17:05:10Z', level: 'info', subsystem: 'vault', msg: 'Secret rotation completed for path: /secret/erpnext_db_pass' },
    { time: '2026-10-08T16:50:00Z', level: 'info', subsystem: 'swarm', msg: 'Node [worker-05] successfully joined the cluster as worker.' },
    { time: '2026-10-08T15:30:12Z', level: 'info', subsystem: 'nixos', msg: 'Flake update applied to [gateway-01]. Reboot required.' },
    { time: '2026-10-08T14:20:05Z', level: 'info', subsystem: 'compiler', msg: 'Blueprint [bp-rant-01] compiled successfully. Target: cloudflare.' },
    { time: '2026-10-08T12:00:00Z', level: 'info', subsystem: 'cron', msg: 'Daily backup sequence initiated for all stateful volumes.' },
    { time: '2026-10-08T10:15:42Z', level: 'warning', subsystem: 'swarm', msg: 'High memory usage detected on [worker-02]. Container rebalancing.' }
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Event Stream</h1>
        <p>Immutable audit log of all system state changes and compiler actions.</p>
      </header>

      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th style={{ width: '220px' }}>Timestamp (UTC)</th>
              <th style={{ width: '150px' }}>Subsystem</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev, i) => (
              <tr key={i}>
                <td>
                  {ev.level === 'info' && <Info size={14} color="var(--accent-primary)" />}
                  {ev.level === 'warning' && <AlertTriangle size={14} color="var(--warning)" />}
                  {ev.level === 'error' && <Activity size={14} color="var(--danger)" />}
                  {ev.level === 'success' && <CheckCircle size={14} color="var(--success)" />}
                </td>
                <td className="font-mono" style={{ color: 'var(--text-secondary)' }}>{ev.time}</td>
                <td><span className="tag neutral" style={{ fontFamily: 'monospace' }}>{ev.subsystem}</span></td>
                <td className="font-mono" style={{ color: ev.level === 'error' ? 'var(--danger)' : ev.level === 'warning' ? 'var(--warning)' : 'var(--text-primary)' }}>
                  {ev.msg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
