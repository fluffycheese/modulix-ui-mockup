"use client";

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Server, Globe, Database, Shield, Users, Activity, HardDrive, Cloud, FileText, LayoutDashboard, GitMerge, Key, Lock } from 'lucide-react';

export default function ChartsPage() {
  const [mainTab, setMainTab] = useState('infrastructure');
  const [subTab, setSubTab] = useState('swarm');

  // Switch subtab safely when main tab changes
  const handleMainTabChange = (tab: string) => {
    setMainTab(tab);
    setSubTab(tab === 'infrastructure' ? 'swarm' : 'wordpress');
  };

  // --- MOCK DATA ---
  const swarmData = [
    { time: '00:00', cpu: 30, memory: 45, containers: 142 },
    { time: '04:00', cpu: 25, memory: 44, containers: 142 },
    { time: '08:00', cpu: 65, memory: 58, containers: 145 },
    { time: '12:00', cpu: 85, memory: 75, containers: 148 },
    { time: '16:00', cpu: 55, memory: 65, containers: 146 },
    { time: '20:00', cpu: 40, memory: 55, containers: 142 },
    { time: '24:00', cpu: 35, memory: 50, containers: 142 },
  ];

  const cloudflareData = [
    { time: '00:00', requests: 1200, cached: 1100, threats: 5 },
    { time: '04:00', requests: 800, cached: 750, threats: 2 },
    { time: '08:00', requests: 4500, cached: 4100, threats: 15 },
    { time: '12:00', requests: 8900, cached: 8500, threats: 45 },
    { time: '16:00', requests: 6200, cached: 5800, threats: 20 },
    { time: '20:00', requests: 3500, cached: 3200, threats: 8 },
  ];

  const gitlabData = [
    { time: 'Mon', pipelines: 42, passed: 38 },
    { time: 'Tue', pipelines: 65, passed: 60 },
    { time: 'Wed', pipelines: 85, passed: 72 },
    { time: 'Thu', pipelines: 55, passed: 50 },
    { time: 'Fri', pipelines: 90, passed: 85 }
  ];

  const wpVisitorData = [
    { day: 'Mon', visitors: 1200 }, { day: 'Tue', visitors: 1400 },
    { day: 'Wed', visitors: 2100 }, { day: 'Thu', visitors: 1800 },
    { day: 'Fri', visitors: 2400 }, { day: 'Sat', visitors: 3100 }, { day: 'Sun', visitors: 2800 }
  ];

  const pieColors = ['var(--accent-primary)', 'var(--accent-secondary)', 'var(--success)', '#f59e0b'];
  const wpReferrers = [
    { name: 'Google', value: 4500 }, { name: 'Direct', value: 2100 },
    { name: 'Twitter', value: 1200 }, { name: 'Other', value: 800 }
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Metrics & Telemetry</h1>
        <p>Real-time analytics for your infrastructure layer and deployed applications.</p>
      </header>

      {/* Top Level Navigation */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px' }}>
        <button 
          onClick={() => handleMainTabChange('infrastructure')}
          className="btn" 
          style={{ background: mainTab === 'infrastructure' ? 'linear-gradient(135deg, var(--accent-primary), #2563eb)' : 'rgba(255,255,255,0.05)', color: mainTab === 'infrastructure' ? 'white' : 'var(--text-secondary)' }}
        >
          <Server size={16} /> Infrastructure
        </button>
        <button 
          onClick={() => handleMainTabChange('applications')}
          className="btn" 
          style={{ background: mainTab === 'applications' ? 'linear-gradient(135deg, var(--accent-secondary), #6d28d9)' : 'rgba(255,255,255,0.05)', color: mainTab === 'applications' ? 'white' : 'var(--text-secondary)' }}
        >
          <LayoutDashboard size={16} /> Applications
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '32px' }}>
        
        {/* Sub-Navigation Sidebar */}
        <div className="glass-panel" style={{ height: 'fit-content', padding: '16px' }}>
          <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '16px', paddingLeft: '12px' }}>
            {mainTab === 'infrastructure' ? 'Environments' : 'Capabilities'}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {mainTab === 'infrastructure' ? (
              <>
                <button onClick={() => setSubTab('swarm')} className={`sub-nav-btn ${subTab === 'swarm' ? 'active' : ''}`}>
                  <Database size={16} /> Docker Swarm
                </button>
                <button onClick={() => setSubTab('immutable')} className={`sub-nav-btn ${subTab === 'immutable' ? 'active' : ''}`}>
                  <HardDrive size={16} /> Immutable (NixOS)
                </button>
                <button onClick={() => setSubTab('cloudflare')} className={`sub-nav-btn ${subTab === 'cloudflare' ? 'active' : ''}`}>
                  <Shield size={16} /> Cloudflare CDN
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setSubTab('wordpress')} className={`sub-nav-btn ${subTab === 'wordpress' ? 'active' : ''}`}>
                  <Globe size={16} /> WordPress (RANT)
                </button>
                <button onClick={() => setSubTab('nextcloud')} className={`sub-nav-btn ${subTab === 'nextcloud' ? 'active' : ''}`}>
                  <Cloud size={16} /> Nextcloud
                </button>
                <button onClick={() => setSubTab('gitlab')} className={`sub-nav-btn ${subTab === 'gitlab' ? 'active' : ''}`}>
                  <GitMerge size={16} /> GitLab CE
                </button>
                <button onClick={() => setSubTab('keycloak')} className={`sub-nav-btn ${subTab === 'keycloak' ? 'active' : ''}`}>
                  <Key size={16} /> Keycloak
                </button>
                <button onClick={() => setSubTab('erpnext')} className={`sub-nav-btn ${subTab === 'erpnext' ? 'active' : ''}`}>
                  <Server size={16} /> ERPNext
                </button>
                <button onClick={() => setSubTab('photoprism')} className={`sub-nav-btn ${subTab === 'photoprism' ? 'active' : ''}`}>
                  <FileText size={16} /> PhotoPrism
                </button>
              </>
            )}
          </div>
        </div>

        {/* Dashboard Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* --- INFRASTRUCTURE: DOCKER SWARM --- */}
          {mainTab === 'infrastructure' && subTab === 'swarm' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Active Nodes</p><h2 style={{ margin: 0, color: 'var(--success)' }}>8</h2></div>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Running Containers</p><h2 style={{ margin: 0 }}>146</h2></div>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Avg Load</p><h2 style={{ margin: 0, color: 'var(--warning)' }}>2.24</h2></div>
              </div>

              <div className="glass-panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '24px' }}>CPU & Memory Utilization (Cluster Avg)</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={swarmData}>
                      <defs>
                        <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.5}/><stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/></linearGradient>
                        <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--accent-secondary)" stopOpacity={0.5}/><stop offset="95%" stopColor="var(--accent-secondary)" stopOpacity={0}/></linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid var(--panel-border)', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="cpu" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorCpu)" name="CPU %" />
                      <Area type="monotone" dataKey="memory" stroke="var(--accent-secondary)" fillOpacity={1} fill="url(#colorMem)" name="Memory %" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* --- INFRASTRUCTURE: CLOUDFLARE --- */}
          {mainTab === 'infrastructure' && subTab === 'cloudflare' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Bandwidth Saved</p><h2 style={{ margin: 0, color: 'var(--success)' }}>84%</h2></div>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Total Requests (24h)</p><h2 style={{ margin: 0 }}>142k</h2></div>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>WAF Threats Blocked</p><h2 style={{ margin: 0, color: 'var(--danger)' }}>184</h2></div>
              </div>

              <div className="glass-panel">
                <h3 style={{ marginBottom: '24px' }}>Edge Requests vs Cache Hits</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cloudflareData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid var(--panel-border)', borderRadius: '8px' }} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                      <Bar dataKey="requests" fill="var(--panel-border)" name="Total Requests" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="cached" fill="var(--success)" name="Served from Cache" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* --- APPLICATIONS: WORDPRESS --- */}
          {mainTab === 'applications' && subTab === 'wordpress' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="glass-panel">
                  <h3 style={{ marginBottom: '24px' }}>Unique Visitors (7 Days)</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={wpVisitorData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="day" stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                        <Line type="monotone" dataKey="visitors" stroke="var(--accent-primary)" strokeWidth={3} dot={{r: 4}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="glass-panel">
                  <h3 style={{ marginBottom: '24px' }}>Traffic Sources</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={wpReferrers} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {wpReferrers.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {wpReferrers.map((ref, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: pieColors[i] }}></div>
                        {ref.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-panel">
                <h3 style={{ marginBottom: '16px' }}>Top Performing Pages</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--panel-border)', color: 'var(--text-secondary)' }}>
                      <th style={{ padding: '12px 8px', fontWeight: 500 }}>Page Path</th>
                      <th style={{ padding: '12px 8px', fontWeight: 500 }}>Pageviews</th>
                      <th style={{ padding: '12px 8px', fontWeight: 500 }}>Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['/', '/services/design', '/about', '/blog/modulix-launch'].map((path, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <td style={{ padding: '12px 8px', color: 'var(--accent-primary)' }}>{path}</td>
                        <td style={{ padding: '12px 8px' }}>{Math.floor(12000 / (i + 1))}</td>
                        <td style={{ padding: '12px 8px' }}>{42 + (i * 5)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- APPLICATIONS: GITLAB --- */}
          {mainTab === 'applications' && subTab === 'gitlab' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Active Projects</p><h2 style={{ margin: 0, color: 'var(--accent-primary)' }}>34</h2></div>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>CI Runners</p><h2 style={{ margin: 0 }}>6</h2></div>
                <div className="glass-panel"><p style={{ fontSize: '0.875rem' }}>Storage Consumed</p><h2 style={{ margin: 0, color: 'var(--success)' }}>1.2 TB</h2></div>
              </div>
              <div className="glass-panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '24px' }}>CI/CD Pipeline Executions</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gitlabData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 12}} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid var(--panel-border)', borderRadius: '8px' }} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                      <Bar dataKey="pipelines" fill="var(--panel-border)" name="Total Pipelines" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="passed" fill="var(--accent-primary)" name="Passed" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Fallback for stubs */}
          {!['swarm', 'cloudflare', 'wordpress', 'gitlab'].includes(subTab) && (
            <div className="glass-panel" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ textAlign: 'center' }}>
                <Activity size={48} style={{ marginBottom: '16px', opacity: 0.5, margin: '0 auto' }} />
                <h3>Metrics Dashboard Stub</h3>
                <p>Specific data visualizations for {subTab.toUpperCase()} would render here.</p>
              </div>
            </div>
          )}

        </div>
      </div>
      
      <style jsx>{`
        .sub-nav-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
          text-align: left;
        }
        .sub-nav-btn:hover {
          background: rgba(255,255,255,0.05);
          color: var(--text-primary);
        }
        .sub-nav-btn.active {
          background: rgba(255,255,255,0.1);
          color: var(--text-primary);
          box-shadow: inset 3px 0 0 var(--accent-primary);
        }
      `}</style>
    </div>
  );
}
