import { Globe, Server, ArrowRight } from 'lucide-react';

export default function NetworkPage() {
  const routes = [
    { domain: 'cloud.agency.com', edge: 'Cloudflare Proxy (Strict SSL)', ingress: 'gateway-01 (Traefik)', backend: 'worker-[01-03]:8080' },
    { domain: 'rant.agency.com', edge: 'Cloudflare Pages CDN', ingress: 'Edge Worker', backend: 'Static Assets (KV)' },
    { domain: 'git.agency.com', edge: 'Cloudflare Proxy (Strict SSL)', ingress: 'gateway-02 (Traefik)', backend: 'worker-[04-05]:80' },
    { domain: 'sso.agency.com', edge: 'Cloudflare Proxy (Strict SSL)', ingress: 'gateway-01 (Traefik)', backend: 'worker-[01,05]:8080' },
    { domain: 'photos.agency.com', edge: 'Direct DNS', ingress: 'gateway-01 (Nginx)', backend: 'gateway-01:2342' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Network Map</h1>
        <p>Routing rules and ingress points mapped to target hosts.</p>
      </header>

      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Public Endpoint</th>
              <th>Edge / DNS</th>
              <th>Ingress Node</th>
              <th>Backend Target</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, i) => (
              <tr key={i}>
                <td className="font-mono" style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={14} color="var(--accent-primary)" /> {route.domain}
                </td>
                <td className="font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {route.edge}
                </td>
                <td>
                  <span className="tag neutral">{route.ingress}</span>
                </td>
                <td className="font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {route.backend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
