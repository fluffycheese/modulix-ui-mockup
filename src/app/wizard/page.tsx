"use client";

import { useState } from 'react';
import { FileJson, Play, ArrowRight, ArrowLeft, CheckCircle2, Lock, HelpCircle, Layers, Server, Edit3 } from 'lucide-react';

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
      <header style={{ marginBottom: '40px' }}>
        <h1>Blueprint Wizard</h1>
        <p>Interactive setup wizard to compile target infrastructure blueprints.</p>
      </header>

      {step > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '16px', animation: 'fadeIn 0.3s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: step >= 1 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step >= 1 ? 'var(--accent-primary)' : 'var(--panel-border)', color: step >= 1 ? 'white' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>1</div>
            <span style={{ fontWeight: 500 }}>Application</span>
          </div>
          <div style={{ height: '2px', width: '40px', background: step >= 2 ? 'var(--accent-primary)' : 'var(--panel-border)' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: step >= 2 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step >= 2 ? 'var(--accent-primary)' : 'var(--panel-border)', color: step >= 2 ? 'white' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>2</div>
            <span style={{ fontWeight: 500 }}>Target</span>
          </div>
          <div style={{ height: '2px', width: '40px', background: step >= 3 ? 'var(--accent-primary)' : 'var(--panel-border)' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: step >= 3 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step >= 3 ? 'var(--accent-primary)' : 'var(--panel-border)', color: step >= 3 ? 'white' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>3</div>
            <span style={{ fontWeight: 500 }}>Configuration</span>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '32px' }}>
        
        {/* Left Side: The Wizard Form */}
        <div className="glass-panel" style={{ flex: '2', minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
          
          {step === 0 && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2>What would you like to do?</h2>
              <p style={{ marginBottom: '24px' }}>Select an action to launch the appropriate configuration flow.</p>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                <button 
                  onClick={() => handleIntent('new_app')}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', border: '1px solid var(--panel-border)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease', color: 'inherit' }}
                  className="intent-btn"
                >
                  <div style={{ padding: '12px', background: 'var(--accent-primary)', borderRadius: '8px' }}>
                    <Layers size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Deploy New Application</h3>
                    <p style={{ fontSize: '0.875rem', marginTop: '4px', color: 'var(--text-secondary)' }}>Launch a new capability like GitLab, Nextcloud, or ERPNext.</p>
                  </div>
                </button>

                <button 
                  onClick={() => handleIntent('new_node')}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', border: '1px solid var(--panel-border)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease', color: 'inherit' }}
                  className="intent-btn"
                >
                  <div style={{ padding: '12px', background: 'var(--accent-secondary)', borderRadius: '8px' }}>
                    <Server size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Deploy New Infrastructure Node</h3>
                    <p style={{ fontSize: '0.875rem', marginTop: '4px', color: 'var(--text-secondary)' }}>Provision a new Debian Swarm VM or an Immutable NixOS instance.</p>
                  </div>
                </button>

                <button 
                  onClick={() => handleIntent('edit_app')}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', border: '1px solid var(--panel-border)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease', color: 'inherit' }}
                  className="intent-btn"
                >
                  <div style={{ padding: '12px', background: '#f59e0b', borderRadius: '8px' }}>
                    <Edit3 size={24} color="white" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Edit Existing Capability</h3>
                    <p style={{ fontSize: '0.875rem', marginTop: '4px', color: 'var(--text-secondary)' }}>Modify domains, secrets, or configuration for a deployed capability.</p>
                  </div>
                </button>
              </div>
              <style jsx>{`
                .intent-btn:hover {
                  border-color: var(--text-secondary) !important;
                  background: rgba(255,255,255,0.05) !important;
                  transform: translateY(-2px);
                }
              `}</style>
            </div>
          )}

          {step === -1 && (
            <div style={{ animation: 'fadeIn 0.3s ease', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                <Server size={48} />
              </div>
              <h2>Wizard Flow in Progress</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>This section of the wizard (Node Provisioning / App Editing) is currently a mockup placeholder.</p>
              <button className="btn btn-outline" style={{ marginTop: '24px' }} onClick={() => setStep(0)}>
                <ArrowLeft size={16} /> Back to Intents
              </button>
            </div>
          )}

          {step === 1 && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2>Select Application Capability</h2>
              <p style={{ marginBottom: '24px' }}>Choose the service you wish to deploy for this tenant.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { id: 'rant', name: 'RANT Static Site', desc: 'Astro-powered static platform.' },
                  { id: 'nextcloud', name: 'Nextcloud', desc: 'Sovereign Collaboration platform.' },
                  { id: 'gitlab', name: 'GitLab CE', desc: 'Complete DevOps platform.' },
                  { id: 'keycloak', name: 'Keycloak', desc: 'Open Source Identity and Access Management.' },
                  { id: 'erpnext', name: 'ERPNext', desc: 'Comprehensive Business Management.' },
                  { id: 'photoprism', name: 'PhotoPrism', desc: 'AI-powered photo management.' }
                ].map(app => (
                  <label key={app.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: appType === app.id ? '2px solid var(--accent-primary)' : '1px solid var(--panel-border)', background: appType === app.id ? 'rgba(59, 130, 246, 0.05)' : 'transparent', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                    <input type="radio" name="app" value={app.id} checked={appType === app.id} onChange={() => setAppType(app.id)} style={{ marginTop: '4px' }} />
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1rem' }}>{app.name}</h3>
                      <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>{app.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2>Deployment Target</h2>
              <p style={{ marginBottom: '24px' }}>Where should this capability be deployed?</p>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                {appType === 'rant' ? (
                  <>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', border: '2px solid var(--accent-primary)', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '12px', cursor: 'pointer' }}>
                      <input type="radio" name="platform" value="cloudflare" checked={platform === 'cloudflare'} onChange={() => setPlatform('cloudflare')} style={{ marginTop: '4px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Cloudflare Pages / CDN</h3>
                          <span className="badge active"><CheckCircle2 size={12} /> Recommended</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', marginTop: '6px', color: 'var(--text-primary)' }}>Best for static Astro apps like RANT.</p>
                      </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', cursor: 'not-allowed', opacity: 0.5 }}>
                      <input type="radio" name="platform" disabled style={{ marginTop: '4px' }} />
                      <div><h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--text-secondary)' }}>Docker Swarm</h3></div>
                    </label>
                  </>
                ) : (
                  <>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', border: '2px solid var(--accent-primary)', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '12px', cursor: 'pointer' }}>
                      <input type="radio" name="platform" value="swarm" checked={true} onChange={() => {}} style={{ marginTop: '4px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Modulix Standard (Docker Swarm)</h3>
                          <span className="badge active"><CheckCircle2 size={12} /> Recommended</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', marginTop: '6px', color: 'var(--text-primary)' }}>Deploys to the 8-node compute cluster.</p>
                      </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', cursor: 'not-allowed', opacity: 0.5 }}>
                      <input type="radio" name="platform" disabled style={{ marginTop: '4px' }} />
                      <div><h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--text-secondary)' }}>Cloudflare CDN</h3></div>
                    </label>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2>Configuration Parameters</h2>
              <p style={{ marginBottom: '24px' }}>Provide the final credentials and variables required to compile this deployment.</p>
              
              {appType === 'rant' ? (
                <div className="form-group" style={{ position: 'relative' }}>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Lock size={14} color="var(--accent-secondary)" /> Cloudflare API Token
                  </label>
                  <input type="password" className="form-input" placeholder="••••••••••••••••••••••••••••••••••••" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                </div>
              ) : (
                <div className="form-group" style={{ position: 'relative' }}>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Lock size={14} color="var(--accent-secondary)" /> Initial Admin Password
                  </label>
                  <input type="password" className="form-input" placeholder="Leave blank to auto-generate" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Subdomain to Use</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" className="form-input" placeholder="e.g. app" value={subdomain} onChange={(e) => setSubdomain(e.target.value)} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 'none' }} />
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--panel-border)', padding: '12px 16px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', color: 'var(--text-secondary)', borderLeft: 'none' }}>
                    .agency.com
                  </div>
                </div>
              </div>
            </div>
          )}

          {step > 0 && (
            <div style={{ borderTop: '1px solid var(--panel-border)', marginTop: 'auto', paddingTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-outline" onClick={() => setStep(step > 1 ? step - 1 : 0)}>
                <ArrowLeft size={16} /> Back
              </button>
              
              {step < 3 ? (
                <button type="button" className="btn" onClick={() => setStep(step + 1)}>
                  Next Step <ArrowRight size={16} />
                </button>
              ) : (
                <button type="button" className="btn">
                  <Play size={16} fill="currentColor" />
                  Compile & Deploy
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Side: The Code Preview */}
        <div className="glass-panel" style={{ flex: '1', background: '#0f172a', transition: 'all 0.3s ease', opacity: step > 0 ? 1 : 0.5, filter: step > 0 ? 'none' : 'grayscale(100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <FileJson size={16} color="var(--accent-secondary)" />
            <h3 style={{ fontSize: '1rem', margin: 0 }}>Generated Blueprint</h3>
          </div>
          {step > 0 ? (
            <pre style={{ color: '#38bdf8', fontSize: '0.85rem', overflowX: 'auto', fontFamily: 'monospace', lineHeight: 1.6 }}>
{`schemaVersion: "1.0"
blueprintId: "bp-${appType}-01"
name: "${appType.toUpperCase()} Prod"
maintainerTeam: "core"
lifecycleStatus: "active"

tenant: "agency-prod-01"
environment: "production"

platformTargets:
  - "${appType === 'rant' ? 'cloudflare' : 'standard'}"

domains:
  - "${subdomain || 'example'}.agency.com"

secrets:
  store: "vault"
  paths:
    - "/tenants/agency/${appType}_secret"
`}
            </pre>
          ) : (
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontStyle: 'italic' }}>
              Select an intent to begin blueprint generation.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
