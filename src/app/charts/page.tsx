"use client";

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Server, Globe, Database, Shield, HardDrive, Cloud, FileText, LayoutDashboard, GitMerge, Key } from 'lucide-react';

export default function ChartsPage() {
  const [mainTab, setMainTab] = useState('infrastructure');
  const [subTab, setSubTab] = useState('swarm');

  const handleMainTabChange = (tab: string) => {
    setMainTab(tab);
    setSubTab(tab === 'infrastructure' ? 'swarm' : 'wordpress');
  };

  // --- REUSABLE COLORS ---
  const pieColors = ['var(--accent-primary)', 'var(--accent-secondary)', 'var(--success)', '#f59e0b', '#ec4899', '#06b6d4'];

  // --- MOCK DATA: INFRASTRUCTURE ---
  const swarmData = [
    { time: '00:00', cpu: 30, memory: 45 }, { time: '04:00', cpu: 25, memory: 44 },
    { time: '08:00', cpu: 65, memory: 58 }, { time: '12:00', cpu: 85, memory: 75 },
    { time: '16:00', cpu: 55, memory: 65 }, { time: '20:00', cpu: 40, memory: 55 },
    { time: '24:00', cpu: 35, memory: 50 },
  ];
  const swarmNetwork = [
    { time: '00:00', rx: 120, tx: 80 }, { time: '04:00', rx: 85, tx: 50 },
    { time: '08:00', rx: 420, tx: 310 }, { time: '12:00', rx: 850, tx: 640 },
    { time: '16:00', rx: 610, tx: 420 }, { time: '20:00', rx: 250, tx: 180 },
  ];
  const swarmStatus = [
    { name: 'Running', value: 142 }, { name: 'Stopped', value: 8 }, { name: 'Restarting', value: 2 }
  ];

  const cloudflareData = [
    { time: '00:00', requests: 1200, cached: 1100 }, { time: '04:00', requests: 800, cached: 750 },
    { time: '08:00', requests: 4500, cached: 4100 }, { time: '12:00', requests: 8900, cached: 8500 },
    { time: '16:00', requests: 6200, cached: 5800 }, { time: '20:00', requests: 3500, cached: 3200 },
  ];
  const cfCountries = [
    { name: 'US', value: 45 }, { name: 'UK', value: 25 }, { name: 'DE', value: 15 }, { name: 'Other', value: 15 }
  ];
  const cfLatency = [
    { time: '00:00', ms: 42 }, { time: '04:00', ms: 40 }, { time: '08:00', ms: 55 }, 
    { time: '12:00', ms: 85 }, { time: '16:00', ms: 60 }, { time: '20:00', ms: 45 }
  ];

  const nixosLoad = [
    { time: '00:00', load: 0.5 }, { time: '04:00', load: 0.3 }, { time: '08:00', load: 1.2 }, 
    { time: '12:00', load: 2.8 }, { time: '16:00', load: 1.5 }, { time: '20:00', load: 0.8 }
  ];
  const nixosDisk = [
    { time: '00:00', read: 15, write: 5 }, { time: '04:00', read: 12, write: 4 }, 
    { time: '08:00', read: 85, write: 45 }, { time: '12:00', read: 140, write: 80 }, 
    { time: '16:00', read: 65, write: 30 }, { time: '20:00', read: 25, write: 10 }
  ];

  // --- MOCK DATA: APPLICATIONS ---
  const wpVisitorData = [
    { day: 'Mon', visitors: 1200 }, { day: 'Tue', visitors: 1400 },
    { day: 'Wed', visitors: 2100 }, { day: 'Thu', visitors: 1800 },
    { day: 'Fri', visitors: 2400 }, { day: 'Sat', visitors: 3100 }, { day: 'Sun', visitors: 2800 }
  ];
  const wpReferrers = [
    { name: 'Google', value: 4500 }, { name: 'Direct', value: 2100 },
    { name: 'Twitter', value: 1200 }, { name: 'Other', value: 800 }
  ];

  const gitlabData = [
    { time: 'Mon', pipelines: 42, passed: 38 }, { time: 'Tue', pipelines: 65, passed: 60 },
    { time: 'Wed', pipelines: 85, passed: 72 }, { time: 'Thu', pipelines: 55, passed: 50 },
    { time: 'Fri', pipelines: 90, passed: 85 }
  ];
  const glLangs = [
    { name: 'TypeScript', value: 65 }, { name: 'Go', value: 20 }, { name: 'Python', value: 10 }, { name: 'Rust', value: 5 }
  ];
  const glContribs = [
    { day: '1', users: 12 }, { day: '5', users: 15 }, { day: '10', users: 22 }, 
    { day: '15', users: 18 }, { day: '20', users: 25 }, { day: '25', users: 30 }
  ];

  const ncStorageData = [
    { name: 'Marketing', value: 400 }, { name: 'Engineering', value: 300 },
    { name: 'HR', value: 150 }, { name: 'Executive', value: 80 }
  ];
  const ncSyncData = [
    { time: '00:00', up: 45, down: 120 }, { time: '08:00', up: 210, down: 850 }, 
    { time: '12:00', up: 420, down: 1400 }, { time: '16:00', up: 180, down: 620 }
  ];

  const kcAuthData = [
    { time: '00:00', success: 420, failed: 12 }, { time: '04:00', success: 210, failed: 5 },
    { time: '08:00', success: 1500, failed: 85 }, { time: '12:00', success: 2100, failed: 120 },
    { time: '16:00', success: 1800, failed: 95 }, { time: '20:00', success: 850, failed: 42 },
  ];
  const kcIdps = [
    { name: 'Local DB', value: 45 }, { name: 'Entra ID', value: 35 }, { name: 'GitHub', value: 20 }
  ];

  const erpLatencyData = [
    { time: '09:00', latency: 45 }, { time: '10:00', latency: 60 },
    { time: '11:00', latency: 120 }, { time: '12:00', latency: 85 },
    { time: '13:00', latency: 55 }, { time: '14:00', latency: 48 },
  ];
  const erpModules = [
    { name: 'Accounting', value: 40 }, { name: 'HR', value: 25 }, { name: 'CRM', value: 35 }
  ];

  const ppIndexData = [
    { day: 'Mon', indexed: 1200 }, { day: 'Tue', indexed: 500 },
    { day: 'Wed', indexed: 3500 }, { day: 'Thu', indexed: 1800 },
    { day: 'Fri', indexed: 400 }, { day: 'Sat', indexed: 8500 }, { day: 'Sun', indexed: 2100 }
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Telemetry & Metrics</h1>
        <p>Raw observability data across the infrastructure and applications.</p>
      </header>

      {/* Top Level Navigation */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--panel-border)', paddingBottom: '16px' }}>
        <button onClick={() => handleMainTabChange('infrastructure')} className="btn" style={{ background: mainTab === 'infrastructure' ? 'var(--panel-border)' : 'transparent', color: 'var(--text-primary)', border: '1px solid var(--panel-border)' }}>
          <Server size={14} /> Infrastructure
        </button>
        <button onClick={() => handleMainTabChange('applications')} className="btn" style={{ background: mainTab === 'applications' ? 'var(--panel-border)' : 'transparent', color: 'var(--text-primary)', border: '1px solid var(--panel-border)' }}>
          <LayoutDashboard size={14} /> Applications
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px' }}>
        
        {/* Sub-Navigation Sidebar */}
        <div className="panel" style={{ padding: '12px 8px', height: 'fit-content' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {mainTab === 'infrastructure' ? (
              <>
                <button onClick={() => setSubTab('swarm')} className={`sub-nav-btn ${subTab === 'swarm' ? 'active' : ''}`}><Database size={14} /> Docker Swarm</button>
                <button onClick={() => setSubTab('immutable')} className={`sub-nav-btn ${subTab === 'immutable' ? 'active' : ''}`}><HardDrive size={14} /> Immutable (NixOS)</button>
                <button onClick={() => setSubTab('cloudflare')} className={`sub-nav-btn ${subTab === 'cloudflare' ? 'active' : ''}`}><Shield size={14} /> Cloudflare Edge</button>
              </>
            ) : (
              <>
                <button onClick={() => setSubTab('wordpress')} className={`sub-nav-btn ${subTab === 'wordpress' ? 'active' : ''}`}><Globe size={14} /> RANT (Static)</button>
                <button onClick={() => setSubTab('nextcloud')} className={`sub-nav-btn ${subTab === 'nextcloud' ? 'active' : ''}`}><Cloud size={14} /> Nextcloud</button>
                <button onClick={() => setSubTab('gitlab')} className={`sub-nav-btn ${subTab === 'gitlab' ? 'active' : ''}`}><GitMerge size={14} /> GitLab CE</button>
                <button onClick={() => setSubTab('keycloak')} className={`sub-nav-btn ${subTab === 'keycloak' ? 'active' : ''}`}><Key size={14} /> Keycloak</button>
                <button onClick={() => setSubTab('erpnext')} className={`sub-nav-btn ${subTab === 'erpnext' ? 'active' : ''}`}><Server size={14} /> ERPNext</button>
                <button onClick={() => setSubTab('photoprism')} className={`sub-nav-btn ${subTab === 'photoprism' ? 'active' : ''}`}><FileText size={14} /> PhotoPrism</button>
              </>
            )}
          </div>
        </div>

        {/* Dashboard Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* =========================================
              INFRASTRUCTURE: SWARM
          ========================================= */}
          {mainTab === 'infrastructure' && subTab === 'swarm' && (
            <div>
              <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Active Nodes</div><div className="kpi-value">8</div></div>
                <div className="kpi-block"><div className="kpi-label">Running Containers</div><div className="kpi-value">146</div></div>
                <div className="kpi-block"><div className="kpi-label">Cluster Load Avg</div><div className="kpi-value" style={{color: 'var(--warning)'}}>2.24</div></div>
              </div>

              <div className="panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>CPU & Memory Utilization (Cluster Avg)</h3>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={swarmData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      <Area type="step" dataKey="cpu" stroke="var(--accent-primary)" fillOpacity={0.1} fill="var(--accent-primary)" name="CPU %" />
                      <Area type="step" dataKey="memory" stroke="var(--accent-secondary)" fillOpacity={0.1} fill="var(--accent-secondary)" name="Memory %" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Network I/O (Mbps)</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={swarmNetwork}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                        <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} cursor={{fill: 'var(--panel-bg)'}} />
                        <Bar dataKey="rx" fill="var(--success)" name="Rx (In)" />
                        <Bar dataKey="tx" fill="var(--accent-primary)" name="Tx (Out)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Container Status Distribution</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={swarmStatus} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                          {swarmStatus.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              INFRASTRUCTURE: CLOUDFLARE
          ========================================= */}
          {mainTab === 'infrastructure' && subTab === 'cloudflare' && (
            <div>
              <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Bandwidth Saved</div><div className="kpi-value" style={{color:'var(--success)'}}>84%</div></div>
                <div className="kpi-block"><div className="kpi-label">Total Requests (24h)</div><div className="kpi-value">142k</div></div>
                <div className="kpi-block"><div className="kpi-label">WAF Blocks</div><div className="kpi-value" style={{color:'var(--danger)'}}>184</div></div>
              </div>

              <div className="panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Edge Requests vs Cache Hits</h3>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cloudflareData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} cursor={{fill: 'var(--panel-bg)'}} />
                      <Bar dataKey="requests" fill="var(--panel-border)" name="Total Requests" />
                      <Bar dataKey="cached" fill="var(--success)" name="Served from Cache" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Edge Latency (ms)</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cfLatency}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                        <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                        <Line type="monotone" dataKey="ms" stroke="var(--accent-secondary)" strokeWidth={2} dot={false} name="TTFB (ms)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Traffic by Region</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={cfCountries} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                          {cfCountries.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              INFRASTRUCTURE: NIXOS
          ========================================= */}
          {mainTab === 'infrastructure' && subTab === 'immutable' && (
            <div>
               <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Active Proxies</div><div className="kpi-value">2</div></div>
                <div className="kpi-block"><div className="kpi-label">Systemd Failures</div><div className="kpi-value" style={{color:'var(--success)'}}>0</div></div>
                <div className="kpi-block"><div className="kpi-label">Flake Revision</div><div className="kpi-value font-mono">7e815ab</div></div>
              </div>

              <div className="panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>System Load Avg (15m)</h3>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={nixosLoad}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      <Line type="monotone" dataKey="load" stroke="var(--warning)" strokeWidth={2} dot={false} name="Load" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="panel">
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Disk I/O Operations (MB/s)</h3>
                <div style={{ width: '100%', height: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={nixosDisk}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      <Area type="monotone" dataKey="read" stroke="var(--success)" fillOpacity={0.1} fill="var(--success)" name="Read" />
                      <Area type="monotone" dataKey="write" stroke="var(--danger)" fillOpacity={0.1} fill="var(--danger)" name="Write" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              APPLICATIONS: WORDPRESS / RANT
          ========================================= */}
          {mainTab === 'applications' && subTab === 'wordpress' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Unique Visitors (7 Days)</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={wpVisitorData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                        <XAxis dataKey="day" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                        <Line type="step" dataKey="visitors" stroke="var(--accent-primary)" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Traffic Sources</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={wpReferrers} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                          {wpReferrers.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Page Path</th>
                      <th>Pageviews</th>
                      <th>Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['/', '/services/design', '/about', '/blog/modulix-launch'].map((path, i) => (
                      <tr key={i}>
                        <td className="font-mono" style={{ color: 'var(--accent-primary)' }}>{path}</td>
                        <td className="font-mono">{Math.floor(12000 / (i + 1))}</td>
                        <td className="font-mono">{42 + (i * 5)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =========================================
              APPLICATIONS: GITLAB
          ========================================= */}
          {mainTab === 'applications' && subTab === 'gitlab' && (
            <div>
               <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Active Projects</div><div className="kpi-value">34</div></div>
                <div className="kpi-block"><div className="kpi-label">CI Runners</div><div className="kpi-value">6</div></div>
                <div className="kpi-block"><div className="kpi-label">Storage Consumed</div><div className="kpi-value font-mono">1.2 TB</div></div>
              </div>

              <div className="panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>CI/CD Pipeline Executions</h3>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gitlabData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} cursor={{fill: 'var(--panel-bg)'}} />
                      <Bar dataKey="pipelines" fill="var(--panel-border)" name="Total Pipelines" />
                      <Bar dataKey="passed" fill="var(--accent-primary)" name="Passed" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Repository Languages</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={glLangs} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                          {glLangs.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Active Contributors</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={glContribs}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                        <XAxis dataKey="day" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                        <Line type="monotone" dataKey="users" stroke="var(--success)" strokeWidth={2} dot={false} name="Committing Users" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              APPLICATIONS: KEYCLOAK
          ========================================= */}
          {mainTab === 'applications' && subTab === 'keycloak' && (
            <div>
               <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Active Sessions</div><div className="kpi-value">482</div></div>
                <div className="kpi-block"><div className="kpi-label">Registered Users</div><div className="kpi-value">1,405</div></div>
                <div className="kpi-block"><div className="kpi-label">Failed Auth Rate</div><div className="kpi-value font-mono" style={{color:'var(--warning)'}}>2.4%</div></div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Authentication Events (24h)</h3>
                  <div style={{ width: '100%', height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={kcAuthData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                        <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} cursor={{fill: 'var(--panel-bg)'}} />
                        <Bar dataKey="success" fill="var(--success)" stackId="a" name="Successful Logins" />
                        <Bar dataKey="failed" fill="var(--danger)" stackId="a" name="Failed Attempts" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Identity Providers</h3>
                  <div style={{ width: '100%', height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={kcIdps} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                          {kcIdps.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              APPLICATIONS: ERPNEXT
          ========================================= */}
          {mainTab === 'applications' && subTab === 'erpnext' && (
            <div>
               <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Active Users</div><div className="kpi-value">84</div></div>
                <div className="kpi-block"><div className="kpi-label">Background Jobs</div><div className="kpi-value">12</div></div>
                <div className="kpi-block"><div className="kpi-label">Open Invoices</div><div className="kpi-value font-mono" style={{color:'var(--accent-primary)'}}>142</div></div>
              </div>
              
              <div className="panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>API Request Latency (ms)</h3>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={erpLatencyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      <Area type="monotone" dataKey="latency" stroke="var(--accent-secondary)" fillOpacity={0.1} fill="var(--accent-secondary)" name="Latency (ms)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Database QPS</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={erpLatencyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                        <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} cursor={{fill: 'var(--panel-bg)'}} />
                        <Bar dataKey="latency" fill="var(--warning)" name="Queries/sec" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Active ERP Modules</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={erpModules} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                          {erpModules.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              APPLICATIONS: PHOTOPRISM
          ========================================= */}
          {mainTab === 'applications' && subTab === 'photoprism' && (
            <div>
               <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-block"><div className="kpi-label">Indexed Photos</div><div className="kpi-value font-mono">18,402</div></div>
                <div className="kpi-block"><div className="kpi-label">AI Faces Detected</div><div className="kpi-value">4,192</div></div>
                <div className="kpi-block"><div className="kpi-label">Processing Queue</div><div className="kpi-value font-mono" style={{color:'var(--success)'}}>0</div></div>
              </div>
              <div className="panel">
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Indexing Throughput</h3>
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={ppIndexData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="day" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      <Line type="step" dataKey="indexed" stroke="var(--warning)" strokeWidth={2} dot={false} name="Photos Indexed" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              APPLICATIONS: NEXTCLOUD
          ========================================= */}
          {mainTab === 'applications' && subTab === 'nextcloud' && (
            <div>
              
              <div className="panel" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Bandwidth: Uploads vs Downloads (GB)</h3>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ncSyncData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                      <XAxis dataKey="time" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} cursor={{fill: 'var(--panel-bg)'}} />
                      <Bar dataKey="up" fill="var(--warning)" name="Uploads" />
                      <Bar dataKey="down" fill="var(--success)" name="Downloads" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Storage Quotas by Group (GB)</h3>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={ncStorageData} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                          {ncStorageData.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="kpi-grid">
                    <div className="kpi-block" style={{ border: 'none', background: 'transparent', padding: '0' }}>
                      <div className="kpi-label">Total Storage Consumed</div>
                      <div className="kpi-value font-mono">930 GB</div>
                    </div>
                  </div>
                  <div className="kpi-grid" style={{ marginTop: '32px' }}>
                    <div className="kpi-block" style={{ border: 'none', background: 'transparent', padding: '0' }}>
                      <div className="kpi-label">Active Users</div>
                      <div className="kpi-value">18</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Recent File Shares</th>
                      <th>Access Type</th>
                      <th>Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Q3_Financial_Report.pdf', access: 'Public Link', exp: '2026-10-15' },
                      { name: 'Brand_Assets_2026.zip', access: 'Internal Group', exp: 'Never' },
                      { name: 'Client_Onboarding.docx', access: 'Password Protected', exp: '2026-10-10' },
                    ].map((file, i) => (
                      <tr key={i}>
                        <td className="font-mono" style={{ color: 'var(--accent-primary)' }}>{file.name}</td>
                        <td><span className="tag neutral">{file.access}</span></td>
                        <td className="font-mono" style={{ color: file.exp === 'Never' ? 'var(--text-secondary)' : 'var(--warning)' }}>{file.exp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

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
        .sub-nav-btn:hover {
          background: var(--panel-hover);
          color: var(--text-primary);
        }
        .sub-nav-btn.active {
          background: var(--panel-border);
          color: var(--text-primary);
          border-left: 2px solid var(--accent-primary);
        }
      `}</style>
    </div>
  );
}
