"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Application {
  id: string;
  applicationNumber: string;
  status: 'pending_review' | 'approved' | 'denied' | 'needs_info';
  aiRecommendation: 'approve' | 'deny' | 'review';
  aiConfidence: number;
  aiSummary: string;
  applicant: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    age: number;
  };
  planType: 'individual' | 'couple' | 'family';
  monthlyAmount: number;
  memberCount: number;
  submittedAt: string;
  flags: Array<{
    type: 'info' | 'warning' | 'critical';
    message: string;
  }>;
}

// Mock data - in production this would come from MCO Advantage API
const mockApplications: Application[] = [
  {
    id: '1',
    applicationNumber: 'UR-2026-0847',
    status: 'pending_review',
    aiRecommendation: 'review',
    aiConfidence: 72,
    aiSummary: 'Applicant has Type 2 Diabetes (controlled with medication). No other significant health concerns. Previous insurance coverage with Anthem ended January 31, 2026. Coverage gap of 28 days is within acceptable limits. Recommend manual review due to pre-existing condition.',
    applicant: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@email.com',
      phone: '(614) 555-0123',
      dob: '1985-03-15',
      age: 40,
    },
    planType: 'family',
    monthlyAmount: 549,
    memberCount: 4,
    submittedAt: '2026-02-26T14:30:00Z',
    flags: [
      { type: 'warning', message: 'Pre-existing: Type 2 Diabetes (controlled)' },
    ],
  },
  {
    id: '2',
    applicationNumber: 'UR-2026-0846',
    status: 'pending_review',
    aiRecommendation: 'approve',
    aiConfidence: 94,
    aiSummary: 'Healthy applicant with no pre-existing conditions. Previous coverage through employer ended 2 weeks ago. No tobacco use, healthy BMI. Meets all eligibility criteria. Recommend auto-approval.',
    applicant: {
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'mchen@gmail.com',
      phone: '(216) 555-0456',
      dob: '1990-07-22',
      age: 35,
    },
    planType: 'individual',
    monthlyAmount: 195,
    memberCount: 1,
    submittedAt: '2026-02-26T13:15:00Z',
    flags: [],
  },
  {
    id: '3',
    applicationNumber: 'UR-2026-0845',
    status: 'pending_review',
    aiRecommendation: 'deny',
    aiConfidence: 89,
    aiSummary: 'Applicant currently undergoing chemotherapy for breast cancer (Stage 2). Active cancer treatment is outside our sharing guidelines. Recommend denial with information about alternative coverage options.',
    applicant: {
      firstName: 'Patricia',
      lastName: 'Williams',
      email: 'pwilliams@email.com',
      phone: '(440) 555-0789',
      dob: '1975-11-08',
      age: 50,
    },
    planType: 'couple',
    monthlyAmount: 425,
    memberCount: 2,
    submittedAt: '2026-02-26T11:00:00Z',
    flags: [
      { type: 'critical', message: 'Active cancer treatment' },
    ],
  },
  {
    id: '4',
    applicationNumber: 'UR-2026-0844',
    status: 'approved',
    aiRecommendation: 'approve',
    aiConfidence: 96,
    aiSummary: 'Family application, all members healthy. Primary applicant has mild asthma (controlled with inhaler). Meets all eligibility criteria.',
    applicant: {
      firstName: 'David',
      lastName: 'Martinez',
      email: 'dmartinez@email.com',
      phone: '(330) 555-0234',
      dob: '1982-04-12',
      age: 43,
    },
    planType: 'family',
    monthlyAmount: 549,
    memberCount: 5,
    submittedAt: '2026-02-25T16:45:00Z',
    flags: [],
  },
  {
    id: '5',
    applicationNumber: 'UR-2026-0843',
    status: 'denied',
    aiRecommendation: 'deny',
    aiConfidence: 92,
    aiSummary: 'Applicant did not accept Statement of Beliefs. This is a required eligibility criterion.',
    applicant: {
      firstName: 'Robert',
      lastName: 'Thompson',
      email: 'rthompson@email.com',
      phone: '(419) 555-0567',
      dob: '1988-09-30',
      age: 37,
    },
    planType: 'individual',
    monthlyAmount: 195,
    memberCount: 1,
    submittedAt: '2026-02-25T10:20:00Z',
    flags: [
      { type: 'critical', message: 'Statement of Beliefs not accepted' },
    ],
  },
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [filter, setFilter] = useState<'all' | 'pending_review' | 'approved' | 'denied'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = applications.filter(app => {
    const matchesFilter = filter === 'all' || app.status === filter;
    const matchesSearch = searchQuery === '' || 
      app.applicant.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicant.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusCounts = {
    all: applications.length,
    pending_review: applications.filter(a => a.status === 'pending_review').length,
    approved: applications.filter(a => a.status === 'approved').length,
    denied: applications.filter(a => a.status === 'denied').length,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending_review':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending Review' };
      case 'approved':
        return { bg: 'bg-green-100', text: 'text-green-800', label: 'Approved' };
      case 'denied':
        return { bg: 'bg-red-100', text: 'text-red-800', label: 'Denied' };
      case 'needs_info':
        return { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Needs Info' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', label: status };
    }
  };

  const getAIBadge = (recommendation: string) => {
    switch (recommendation) {
      case 'approve':
        return { bg: 'bg-emerald-500', text: 'text-white', icon: '✓', label: 'AI: Approve' };
      case 'deny':
        return { bg: 'bg-red-500', text: 'text-white', icon: '✗', label: 'AI: Deny' };
      case 'review':
        return { bg: 'bg-amber-500', text: 'text-white', icon: '?', label: 'AI: Review' };
      default:
        return { bg: 'bg-gray-500', text: 'text-white', icon: '•', label: 'AI: Unknown' };
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Member Applications</h1>
        <p className="mt-2 text-gray-600">
          Review and process membership applications with AI-powered recommendations
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-gray-900">{statusCounts.pending_review}</div>
          <div className="text-sm text-gray-500">Pending Review</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-green-600">{statusCounts.approved}</div>
          <div className="text-sm text-gray-500">Approved</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-red-600">{statusCounts.denied}</div>
          <div className="text-sm text-gray-500">Denied</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-gray-900">{statusCounts.all}</div>
          <div className="text-sm text-gray-500">Total Applications</div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="p-4 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {(['all', 'pending_review', 'approved', 'denied'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? 'All' : 
                 status === 'pending_review' ? `Pending (${statusCounts.pending_review})` :
                 status === 'approved' ? 'Approved' : 'Denied'}
              </button>
            ))}
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="divide-y divide-gray-200">
          {filteredApplications.map((application) => {
            const statusBadge = getStatusBadge(application.status);
            const aiBadge = getAIBadge(application.aiRecommendation);
            
            return (
              <Link 
                key={application.id}
                href={`/admin/applications/${application.id}`}
                className="block p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {application.applicant.firstName} {application.applicant.lastName}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.text}`}>
                        {statusBadge.label}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${aiBadge.bg} ${aiBadge.text} flex items-center gap-1`}>
                        <span>{aiBadge.icon}</span>
                        {aiBadge.label} ({application.aiConfidence}%)
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{application.applicationNumber}</span>
                      <span>•</span>
                      <span className="capitalize">{application.planType} Plan</span>
                      <span>•</span>
                      <span>{application.memberCount} {application.memberCount === 1 ? 'member' : 'members'}</span>
                      <span>•</span>
                      <span>${application.monthlyAmount}/mo</span>
                      <span>•</span>
                      <span>{formatDate(application.submittedAt)}</span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {application.aiSummary}
                    </p>

                    {application.flags.length > 0 && (
                      <div className="flex gap-2">
                        {application.flags.map((flag, idx) => (
                          <span 
                            key={idx}
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              flag.type === 'critical' ? 'bg-red-100 text-red-700' :
                              flag.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {flag.type === 'critical' && '⚠️ '}
                            {flag.type === 'warning' && '⚡ '}
                            {flag.message}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredApplications.length === 0 && (
            <div className="p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No applications found</h3>
              <p className="mt-2 text-gray-500">
                {searchQuery ? 'Try adjusting your search query.' : 'No applications match the selected filter.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
