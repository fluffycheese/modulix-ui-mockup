"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, Server, Globe } from 'lucide-react';

export default function CostsPage() {
  const pieColors = ['var(--accent-primary)', 'var(--accent-secondary)', 'var(--warning)'];
  
  const costBreakdown = [
    { name: 'Compute (Swarm)', value: 240 },
    { name: 'Proxy (NixOS)', value: 40 },
    { name: 'Storage / Backups', value: 85 }
  ];

  const monthlyHistory = [
    { month: 'May', cost: 310 }, { month: 'Jun', cost: 315 },
    { month: 'Jul', cost: 320 }, { month: 'Aug', cost: 345 },
    { month: 'Sep', cost: 365 }, { month: 'Oct', cost: 365 },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1>Resource Costs</h1>
        <p>Estimated monthly cloud economics and resource footprint burn rate.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="panel kpi-block">
          <div className="kpi-label">Current Monthly Run Rate</div>
          <div className="kpi-value font-mono" style={{ color: 'var(--danger)' }}>$365.00</div>
        </div>
        <div className="panel kpi-block">
          <div className="kpi-label">Cloudflare Edge Costs</div>
          <div className="kpi-value font-mono" style={{ color: 'var(--success)' }}>$0.00</div>
        </div>
        <div className="panel kpi-block">
          <div className="kpi-label">Avg Cost per Capability</div>
          <div className="kpi-value font-mono">$45.62</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="panel">
          <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Cost Breakdown by Resource Type</h3>
          <div style={{ width: '100%', height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={costBreakdown} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                  {costBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} formatter={(value) => `$${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel">
          <h3 style={{ fontSize: '0.875rem', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>6-Month Spend History</h3>
          <div style={{ width: '100%', height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                <YAxis stroke="var(--text-secondary)" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid var(--panel-border)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '12px' }} formatter={(value) => `$${value}`} cursor={{fill: 'var(--panel-bg)'}} />
                <Bar dataKey="cost" fill="var(--accent-secondary)" name="Total Cost" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="panel" style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
          <Globe size={16} color="var(--success)" />
          <span style={{ fontSize: '0.875rem' }}>By utilizing Cloudflare Edge CDN for static asset delivery (RANT), this infrastructure has avoided an estimated <strong>$142.00</strong> in egress bandwidth costs this month.</span>
        </div>
      </div>
    </div>
  );
}
