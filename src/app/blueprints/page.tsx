"use client";

import { useState } from 'react';
import { Book, Code } from 'lucide-react';

export default function BlueprintsPage() {
  const [selectedBp, setSelectedBp] = useState('nextcloud');

  const schemas: Record<string, string> = {
    nextcloud: `schemaVersion: "1.0"
kind: "Capability"
metadata:
  name: "nextcloud"
  version: "29.0.4"
  author: "modulix-core"
spec:
  type: "stateful"
  requires:
    - postgresql: >=15
    - redis: >=7
  volumes:
    - name: "nc_data"
      size: "500Gi"
      mountPath: "/var/www/html/data"
  ingress:
    rules:
      - path: "/"
        port: 80
        middlewares:
          - "secure-headers"
          - "nc-caldav"`,
    rant: `schemaVersion: "1.0"
kind: "Capability"
metadata:
  name: "rant-static"
  version: "v2.1.0"
  author: "modulix-core"
spec:
  type: "stateless"
  build:
    engine: "astro"
    command: "npm run build"
  deploy:
    target: "cloudflare_pages"
    framework: "astro"`,
    gitlab: `schemaVersion: "1.0"
kind: "Capability"
metadata:
  name: "gitlab-ce"
  version: "16.11"
  author: "modulix-core"
spec:
  type: "stateful"
  requires:
    - postgresql: >=14
    - redis: >=6
  resources:
    minMemory: "4Gi"
    minCpu: "2"
  volumes:
    - name: "gitlab_config"
      size: "10Gi"
    - name: "gitlab_logs"
      size: "20Gi"
    - name: "gitlab_data"
      size: "1Ti"`
  };

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Blueprint Library</h1>
        <p>Read-only repository of available infrastructure schemas and capabilities.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '24px' }}>
        <div className="panel" style={{ padding: '12px 8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <button onClick={() => setSelectedBp('nextcloud')} className={`sub-nav-btn ${selectedBp === 'nextcloud' ? 'active' : ''}`}><Book size={14} /> Nextcloud</button>
            <button onClick={() => setSelectedBp('rant')} className={`sub-nav-btn ${selectedBp === 'rant' ? 'active' : ''}`}><Book size={14} /> RANT Static Site</button>
            <button onClick={() => setSelectedBp('gitlab')} className={`sub-nav-btn ${selectedBp === 'gitlab' ? 'active' : ''}`}><Book size={14} /> GitLab CE</button>
          </div>
        </div>

        <div className="panel" style={{ background: '#000', border: '1px solid #1f2937', padding: '16px', minHeight: '500px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '16px', borderBottom: '1px solid #1f2937', paddingBottom: '8px' }}>
            <Code size={12} /> /var/lib/modulix/schemas/{selectedBp}.yaml
          </div>
          <pre style={{ color: '#60a5fa', fontSize: '0.8125rem', fontFamily: 'monospace', lineHeight: 1.5 }}>
            {schemas[selectedBp]}
          </pre>
        </div>
      </div>
      <style jsx>{`
        .sub-nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          border-radius: 2px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8125rem;
          text-align: left;
        }
        .sub-nav-btn:hover { background: var(--panel-hover); color: var(--text-primary); }
        .sub-nav-btn.active { background: var(--panel-border); color: var(--text-primary); border-left: 2px solid var(--accent-primary); }
      `}</style>
    </div>
  );
}
