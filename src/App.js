import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  FileText, 
  Presentation, 
  Bot, 
  LayoutDashboard,
  Settings,
  Search,
  Filter,
  Edit3,
  Trash2,
  Save,
  Download,
  Upload,
  Calendar,
  Clock,
  User,
  Tag,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Star,
  Copy,
  Brain,
  Zap,
  Eye,
  Sparkles
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Customer Service Chatbot',
      status: 'In Progress',
      dueDate: '2025-07-15',
      progress: 75,
      priority: 'High',
      description: 'AI-powered customer service automation',
      prompts: 3,
      reports: 2,
      presentations: 1
    },
    {
      id: 2,
      name: 'Content Generation System',
      status: 'Planning',
      dueDate: '2025-08-01',
      progress: 25,
      priority: 'Medium',
      description: 'Automated content creation pipeline',
      prompts: 1,
      reports: 0,
      presentations: 0
    }
  ]);

  const [prompts, setPrompts] = useState([
    {
      id: 1,
      projectId: 1,
      title: 'Customer Query Classification',
      content: 'You are a customer service AI assistant. Classify the following customer query into one of these categories: Technical Support, Billing, General Inquiry, Complaint. Provide a brief explanation for your classification.\\n\\nQuery: {user_query}',
      tags: ['classification', 'customer-service'],
      createdDate: '2025-07-01',
      lastModified: '2025-07-02',
      performance: 'Excellent',
      version: '1.2'
    },
    {
      id: 2,
      projectId: 1,
      title: 'Response Generation',
      content: 'Generate a helpful and professional response to the following customer query. Keep the tone friendly and solution-oriented.\\n\\nQuery: {user_query}\\nContext: {previous_conversation}',
      tags: ['response-generation', 'customer-service'],
      createdDate: '2025-06-28',
      lastModified: '2025-07-01',
      performance: 'Good',
      version: '1.0'
    }
  ]);

  const [reports, setReports] = useState([
    {
      id: 1,
      projectId: 1,
      title: 'Customer Chatbot Performance Analysis',
      type: 'Performance Report',
      content: 'Monthly analysis of AI chatbot effectiveness showing 85% customer satisfaction rate and 40% reduction in response time.',
      createdDate: '2025-07-01',
      status: 'Completed',
      insights: ['Response time improved by 40%', 'Customer satisfaction at 85%', 'Cost reduction of 30%']
    }
  ]);

  const [presentations, setPresentations] = useState([
    {
      id: 1,
      projectId: 1,
      title: 'AI Implementation Strategy',
      slides: 12,
      createdDate: '2025-06-30',
      lastModified: '2025-07-01',
      status: 'Draft',
      audience: 'Executive Team'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <PlusCircle size={20} />
          New Project
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Active Projects</p>
              <p className="text-3xl font-bold">{projects.length}</p>
            </div>
            <LayoutDashboard size={32} className="text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Total Prompts</p>
              <p className="text-3xl font-bold">{prompts.length}</p>
            </div>
            <Bot size={32} className="text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Reports</p>
              <p className="text-3xl font-bold">{reports.length}</p>
            </div>
            <FileText size={32} className="text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Presentations</p>
              <p className="text-3xl font-bold">{presentations.length}</p>
            </div>
            <Presentation size={32} className="text-orange-200" />
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">{project.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      Due: {project.dueDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bot size={16} />
                      {project.prompts} prompts
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText size={16} />
                      {project.reports} reports
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {project.status}
                  </span>
                  <div className="mt-2">
                    <div className="text-sm text-gray-600">{project.progress}% complete</div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Prompt Engineering Component
  const PromptEngineering = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Prompt Engineering</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <PlusCircle size={20} />
          New Prompt
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search prompts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Projects</option>
            {projects.map(project => (
              <option key={project.id} value={project.name}>{project.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {prompts.map(prompt => (
          <div key={prompt.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{prompt.title}</h3>
                <p className="text-sm text-gray-500">Version {prompt.version}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Copy size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Edit3 size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="bg-gray-50 rounded-lg p-3 text-sm font-mono text-gray-700 max-h-32 overflow-y-auto">
                {prompt.content}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {prompt.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Modified: {prompt.lastModified}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                prompt.performance === 'Excellent' ? 'bg-green-100 text-green-800' :
                prompt.performance === 'Good' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {prompt.performance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Reports Component
  const Reports = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Reports & Analytics</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <PlusCircle size={20} />
          Generate Report
        </button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 gap-6">
        {reports.map(report => (
          <div key={report.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{report.type}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Download size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Edit3 size={16} />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{report.content}</p>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Key Insights:</h4>
              <ul className="space-y-1">
                {report.insights.map((insight, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t">
              <span>Created: {report.createdDate}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {report.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Presentations Component
  const Presentations = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Presentations</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <PlusCircle size={20} />
          New Presentation
        </button>
      </div>

      {/* Presentations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {presentations.map(presentation => (
          <div key={presentation.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <Presentation size={32} className="text-blue-500" />
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Edit3 size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Download size={16} />
                </button>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{presentation.title}</h3>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <FileText size={14} />
                {presentation.slides} slides
              </div>
              <div className="flex items-center gap-2">
                <User size={14} />
                {presentation.audience}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                Modified: {presentation.lastModified}
              </div>
            </div>

            <span className={`px-2 py-1 rounded-full text-xs ${
              presentation.status === 'Completed' ? 'bg-green-100 text-green-800' :
              presentation.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {presentation.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Eye className="text-white" size={28} />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Visionary PM</h1>
                <p className="text-xs text-gray-500">by CJ Hartley-Cisco</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'prompts', label: 'Prompt Engineering', icon: Bot },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'presentations', label: 'Presentations', icon: Presentation }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'prompts' && <PromptEngineering />}
          {activeTab === 'reports' && <Reports />}
          {activeTab === 'presentations' && <Presentations />}
        </main>
      </div>
    </div>
  );
};

export default App;
