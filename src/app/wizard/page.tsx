"use client";

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Lock, Terminal, Shield, Database } from 'lucide-react';

export default function WizardPage() {
  const [step, setStep] = useState(0); 
  const [intent, setIntent] = useState('');
  const [appType, setAppType] = useState('rant');
  const [platform, setPlatform] = useState('cloudflare');
  const [apiKey, setApiKey] = useState('');
  const [subdomain, setSubdomain] = useState('');

  const handleIntent = (selectedIntent: string) => {
    setIntent(selectedIntent);
    if (selectedIntent === 'new_app') {
      setStep(1);
    } else {
      setStep(-1);
    }
  };

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Blueprint Compiler</h1>
        <p>Interactive wizard to generate and deploy target infrastructure blueprints.</p>
      </header>

      {step > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '8px', fontSize: '0.8125rem', fontFamily: 'monospace' }}>
          <span style={{ color: step >= 1 ? 'var(--text-primary)' : 'var(--text-muted)' }}>1. Select Application</span>
          <span style={{ color: 'var(--text-muted)' }}>{'>'}</span>
          <span style={{ color: step >= 2 ? 'var(--text-primary)' : 'var(--text-muted)' }}>2. Target Platform</span>
          <span style={{ color: 'var(--text-muted)' }}>{'>'}</span>
          <span style={{ color: step >= 3 ? 'var(--text-primary)' : 'var(--text-muted)' }}>3. Configuration</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left Side: The Wizard Form */}
        <div className="panel" style={{ minHeight: '500px', display: 'flex', flexDirection: 'column', borderTop: '2px solid var(--accent-primary)' }}>
          
          {step === 0 && (
            <div>
              <h2 style={{ fontSize: '1rem', border: 'none', marginBottom: '4px' }}>What would you like to do?</h2>
              <p style={{ marginBottom: '24px', fontSize: '0.8125rem' }}>Select the primary operation context.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button onClick={() => handleIntent('new_app')} className="intent-row">
                  <Database size={16} /> <span style={{ fontFamily: 'Inter, sans-serif' }}>Deploy New Capability</span>
                </button>
                <button onClick={() => handleIntent('new_node')} className="intent-row">
                  <Terminal size={16} /> <span style={{ fontFamily: 'Inter, sans-serif' }}>Provision Infrastructure Node</span>
                </button>
                <button onClick={() => handleIntent('edit_app')} className="intent-row">
                  <Shield size={16} /> <span style={{ fontFamily: 'Inter, sans-serif' }}>Modify Existing Blueprint</span>
                </button>
              </div>
              <style jsx>{`
                .intent-row {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 16px;
                  background: var(--bg-color);
                  border: 1px solid var(--panel-border);
                  border-radius: 2px;
                  cursor: pointer;
                  color: var(--text-primary);
                  font-family: 'Courier New', monospace;
                  font-size: 0.875rem;
                  transition: none;
                }
                .intent-row:hover {
                  border-color: var(--accent-primary);
                  background: var(--panel-bg);
                }
              `}</style>
            </div>
          )}

          {step === -1 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <Terminal size={32} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
              <div className="font-mono" style={{ color: 'var(--warning)', marginBottom: '16px' }}>Feature Disabled</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>This section of the wizard is currently a mockup placeholder.</p>
              <button className="btn btn-outline" style={{ marginTop: '24px' }} onClick={() => setStep(0)}>
                <ArrowLeft size={14} /> Back to Intents
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 style={{ fontSize: '1rem', border: 'none', marginBottom: '4px' }}>Select Application</h2>
              <p style={{ marginBottom: '24px', fontSize: '0.8125rem' }}>Choose the application blueprint to compile.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {[
                  { id: 'rant', name: 'RANT Static Site', desc: 'Astro-powered platform.' },
                  { id: 'nextcloud', name: 'Nextcloud', desc: 'Sovereign Collaboration.' },
                  { id: 'gitlab', name: 'GitLab CE', desc: 'DevOps Platform.' },
                  { id: 'keycloak', name: 'Keycloak', desc: 'Identity Provider.' },
                  { id: 'erpnext', name: 'ERPNext', desc: 'Business Management.' }
                ].map(app => (
                  <label key={app.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px', border: '1px solid', borderColor: appType === app.id ? 'var(--accent-primary)' : 'var(--panel-border)', background: appType === app.id ? 'rgba(59, 130, 246, 0.05)' : 'var(--bg-color)', cursor: 'pointer', borderRadius: '2px' }}>
                    <input type="radio" name="app" value={app.id} checked={appType === app.id} onChange={() => setAppType(app.id)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{app.name}</span>
                      <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{app.id}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontSize: '1rem', border: 'none', marginBottom: '4px' }}>Target Platform</h2>
              <p style={{ marginBottom: '24px', fontSize: '0.8125rem' }}>Define compute destination.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {appType === 'rant' ? (
                  <>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: '1px solid var(--accent-primary)', background: 'rgba(59, 130, 246, 0.05)' }}>
                      <input type="radio" checked readOnly style={{ marginTop: '2px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 500 }}>Cloudflare Edge CDN</span>
                          <span className="tag success">RECOMMENDED</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Deploy directly to global edge workers for purely static assets.</div>
                      </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: '1px solid var(--panel-border)', opacity: 0.5 }}>
                      <input type="radio" disabled />
                      <div><span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Docker Swarm (Local Compute)</span></div>
                    </label>
                  </>
                ) : (
                  <>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: '1px solid var(--accent-primary)', background: 'rgba(59, 130, 246, 0.05)' }}>
                      <input type="radio" checked readOnly style={{ marginTop: '2px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 500 }}>Modulix Standard Swarm</span>
                          <span className="tag success">RECOMMENDED</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Deploy stateful container stacks to the local compute cluster.</div>
                      </div>
                    </label>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ fontSize: '1rem', border: 'none', marginBottom: '4px' }}>Configuration</h2>
              <p style={{ marginBottom: '24px', fontSize: '0.8125rem' }}>Provide dynamic parameters for compilation.</p>
              
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Lock size={12} color="var(--accent-secondary)" /> {appType === 'rant' ? 'Cloudflare API Token' : 'Initial Admin Password'}
                </label>
                <input type="password" className="form-input" placeholder="••••••••••••••••••••••••••••" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label">Subdomain</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" className="form-input" placeholder="app" value={subdomain} onChange={(e) => setSubdomain(e.target.value)} style={{ borderRight: 'none' }} />
                  <div style={{ background: 'var(--panel-bg)', border: '1px solid var(--panel-border)', padding: '8px 12px', color: 'var(--text-secondary)', borderLeft: 'none', fontSize: '0.875rem' }}>
                    .agency.com
                  </div>
                </div>
              </div>
            </div>
          )}

          {step > 0 && (
            <div style={{ borderTop: '1px solid var(--panel-border)', marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-outline" onClick={() => setStep(step > 1 ? step - 1 : 0)}>
                <ArrowLeft size={14} /> Back
              </button>
              
              {step < 3 ? (
                <button type="button" className="btn" onClick={() => setStep(step + 1)}>
                  Next <ArrowRight size={14} />
                </button>
              ) : (
                <button type="button" className="btn" style={{ background: 'var(--success)', color: '#000' }}>
                  <Terminal size={14} /> Compile & Deploy
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Code Preview */}
        <div className="panel" style={{ background: '#000', border: '1px solid #1f2937', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '16px', borderBottom: '1px solid #1f2937', paddingBottom: '8px' }}>
            ./blueprints/target.yaml
          </div>
          {step > 0 ? (
            <pre style={{ color: '#60a5fa', fontSize: '0.8125rem', fontFamily: 'monospace', lineHeight: 1.5 }}>
{`schemaVersion: "1.0"
blueprintId: "bp-${appType}-01"
name: "${appType.toUpperCase()}"

tenant: "agency-prod-01"

platformTargets:
  - "${appType === 'rant' ? 'cloudflare' : 'standard'}"

domains:
  - "${subdomain || 'example'}.agency.com"

secrets:
  store: "vault"
  paths:
    - "/${appType}_secret"
`}
            </pre>
          ) : (
            <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              # Waiting for input...
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
