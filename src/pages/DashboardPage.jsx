import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  CreditCard, 
  Send, 
  User, 
  LogOut, 
  Eye, 
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Menu,
  X,
  Wallet,
  TrendingUp,
  Clock,
  Loader,
  AlertCircle,
  Settings,
  Bell,
  ChevronRight,
  Download,
  Filter,
  Search,
  BarChart3,
  Shield,
  Smartphone,
  HelpCircle,
  Building,
  Globe,
  Receipt,
  Calendar,
  Target,
  PieChart,
  TrendingDown,
  Users,
  Package,
  FileText,
  CreditCard as Card,
  Smartphone as Mobile,
  Laptop,
  Gift,
  Zap,
  Sparkles,
  Crown
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const DashboardPage = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  
  const [showBalance, setShowBalance] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [accountData, setAccountData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [transferData, setTransferData] = useState({
    recipientAccountNumber: '',
    amount: '',
    description: ''
  });
  const [transferLoading, setTransferLoading] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setIsScrolled(mainRef.current.scrollTop > 20);
      }
    };

    const currentRef = mainRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoadingData(true);
      setError(null);

      // Simulated data - replace with actual API calls
      const mockAccountData = {
        balance: 12450.75,
        accountNumber: '0244187654321',
        availableBalance: 12450.75,
        totalDeposits: 25000,
        totalWithdrawals: 12549.25,
        lastUpdated: new Date().toISOString()
      };

      const mockTransactions = [
        { _id: '1', type: 'credit', amount: 5000, description: 'Salary Deposit', reference: 'SAL-2024-03', createdAt: new Date('2024-03-15'), status: 'completed' },
        { _id: '2', type: 'debit', amount: 1250, description: 'Utility Bill Payment', reference: 'UTIL-2024-03', createdAt: new Date('2024-03-14'), status: 'completed' },
        { _id: '3', type: 'debit', amount: 299.99, description: 'Online Shopping', reference: 'AMZN-2024-03', createdAt: new Date('2024-03-13'), status: 'completed' },
        { _id: '4', type: 'credit', amount: 2000, description: 'Freelance Payment', reference: 'FLNC-2024-03', createdAt: new Date('2024-03-12'), status: 'completed' },
        { _id: '5', type: 'debit', amount: 750, description: 'Mobile Money Transfer', reference: 'MM-2024-03', createdAt: new Date('2024-03-11'), status: 'completed' }
      ];

      setAccountData(mockAccountData);
      setTransactions(mockTransactions);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoadingData(false);
    }
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    
    if (!transferData.recipientAccountNumber || !transferData.amount) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setTransferLoading(true);
      setError(null);

      const response = await authAPI.transferFunds(transferData);
      
      // Reset form
      setTransferData({
        recipientAccountNumber: '',
        amount: '',
        description: ''
      });

      // Show success message
      setError('Transfer completed successfully!');
      setTimeout(() => setError(null), 3000);

      // Refresh data
      await fetchDashboardData();

    } catch (error) {
      console.error('Transfer error:', error);
      setError(error.response?.data?.message || 'Transfer failed. Please try again.');
    } finally {
      setTransferLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                <div className="text-white font-bold text-lg">EC</div>
              </div>
            </div>
            <div className="absolute inset-0">
              <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray="220" strokeDashoffset="50" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-gray-700 font-medium">Preparing your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const quickActions = [
    { icon: Send, label: 'Send Money', color: 'from-emerald-500 to-teal-500', action: () => setActiveTab('transfer') },
    { icon: ArrowDownLeft, label: 'Receive', color: 'from-blue-500 to-cyan-500', action: () => {} },
    { icon: TrendingUp, label: 'Invest', color: 'from-purple-500 to-pink-500', action: () => {} },
    { icon: Package, label: 'Loans', color: 'from-orange-500 to-amber-500', action: () => navigate('/loans') }
  ];

  const stats = [
    { label: 'Total Deposits', value: '₵25,000', change: '+12%', icon: ArrowUpRight, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Monthly Spend', value: '₵5,249', change: '-5%', icon: TrendingDown, color: 'text-red-600', bg: 'bg-red-100' },
    { label: 'Invested', value: '₵8,500', change: '+8%', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Savings Goal', value: '72%', change: '+15%', icon: Target, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const services = [
    { icon: Mobile, label: 'Mobile Banking', color: 'from-emerald-400 to-teal-400' },
    { icon: Card, label: 'Virtual Cards', color: 'from-blue-400 to-cyan-400' },
    { icon: Laptop, label: 'Online Portal', color: 'from-purple-400 to-pink-400' },
    { icon: Shield, label: 'Security', color: 'from-orange-400 to-amber-400' },
    { icon: Gift, label: 'Rewards', color: 'from-rose-400 to-red-400' },
    { icon: Users, label: 'Family Banking', color: 'from-indigo-400 to-purple-400' }
  ];

  const Logo = () => (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl mr-3 relative flex items-center justify-center shadow-lg">
        <div className="text-white font-bold text-lg">EC</div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
      </div>
      <div className="text-gray-800 text-lg font-bold leading-tight">
        Emerald<br />
        <span className="text-emerald-600 font-semibold text-sm">Capital</span>
      </div>
    </div>
  );

  const Sidebar = ({ isMobile = false }) => {
    const menuItems = [
      { icon: Home, label: 'Dashboard', id: 'home', badge: null },
      { icon: CreditCard, label: 'Cards', id: 'cards', badge: 2 },
      { icon: Send, label: 'Transfer', id: 'transfer', badge: null },
      { icon: BarChart3, label: 'Analytics', id: 'analytics', badge: 'New' },
      { icon: Receipt, label: 'Statements', id: 'statements', badge: null },
      { icon: User, label: 'Profile', id: 'profile', badge: null },
      { icon: Settings, label: 'Settings', id: 'settings', badge: null }
    ];

    const handleMenuClick = (id) => {
      setActiveTab(id);
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleLogout = () => {
      logout();
      navigate('/login', { replace: true });
    };

    return (
      <div className={`${isMobile ? 'w-full' : 'w-64'} bg-gradient-to-b from-white to-gray-50 border-r border-gray-100 flex flex-col h-full shadow-lg`}>
        <div className="p-6 border-b border-gray-100">
          <Logo />
        </div>
        
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl mb-2 transition-all duration-300 group ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 border-l-4 border-emerald-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={activeTab === item.id ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-500'} />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  typeof item.badge === 'number' 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
            <div className="flex items-center gap-3 mb-2">
              <Crown className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-gray-800">Premium Member</span>
            </div>
            <p className="text-xs text-gray-600">Enhanced benefits & support</p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group"
          >
            <LogOut size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    );
  };

  const Header = () => (
    <div className={`sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {activeTab === 'home' ? 'Dashboard' : 
             activeTab === 'cards' ? 'Cards Management' :
             activeTab === 'transfer' ? 'Money Transfer' :
             activeTab === 'profile' ? 'Profile' : 
             activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <p className="text-sm text-gray-500">
            {activeTab === 'home' ? `Welcome back, ${user.firstName}!` : 
             'Manage your finances with ease'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
          <Bell size={22} className="text-gray-600" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {notifications}
            </span>
          )}
        </button>

        <div className="hidden md:flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
            {user.firstName?.[0]}{user.lastName?.[0]}
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-gray-900">{user.firstName} {user.lastName}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Shield className="w-3 h-3 text-emerald-500" />
              Verified Account
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );

  const BalanceCard = () => {
    if (loadingData) {
      return (
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-2xl shadow-emerald-500/20">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <div className="h-4 w-32 bg-emerald-400/50 rounded animate-pulse"></div>
              <div className="h-8 w-48 bg-emerald-400/50 rounded animate-pulse"></div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Loader className="animate-spin" size={24} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-700 rounded-2xl p-6 text-white shadow-2xl shadow-emerald-500/30">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-emerald-100 text-sm mb-1 font-medium">Total Balance</p>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-bold tracking-tight">
                  {showBalance ? `GH₵ ${accountData?.balance?.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0.00'}` : '••••••••'}
                </h2>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm"
                >
                  {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
              <Wallet size={28} />
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-emerald-100 text-xs mb-1 font-medium">Account Number</p>
              <div className="flex items-center gap-3">
                <p className="text-white font-bold text-lg">{accountData?.accountNumber || '••••••••••••'}</p>
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                  <Sparkles size={12} />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Zap size={18} />
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Shield size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const QuickActions = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {quickActions.map((action, index) => (
        <button
          key={index}
          onClick={action.action}
          className="group relative overflow-hidden bg-white rounded-2xl p-5 flex flex-col items-center gap-4 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-1"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <action.icon size={26} />
          </div>
          <span className="font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">{action.label}</span>
        </button>
      ))}
    </div>
  );

  const StatsGrid = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <Icon size={16} className={stat.color} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className={`text-xs font-medium ${stat.color}`}>{stat.change} this month</p>
          </div>
        );
      })}
    </div>
  );

  const RecentTransactions = () => {
    if (loadingData) {
      return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (transactions.length === 0) {
      return (
        <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
          <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">No Transactions Yet</h4>
          <p className="text-gray-500">Start using your account to see transactions here</p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <p className="text-sm text-gray-500">Your last 5 transactions</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter size={18} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Download size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction._id}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                    transaction.type === 'credit'
                      ? 'bg-gradient-to-br from-green-100 to-emerald-100 text-emerald-600'
                      : 'bg-gradient-to-br from-red-100 to-rose-100 text-rose-600'
                  }`}
                >
                  {transaction.type === 'credit' ? (
                    <ArrowDownLeft size={22} />
                  ) : (
                    <ArrowUpRight size={22} />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{transaction.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{new Date(transaction.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{transaction.reference}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg font-bold ${
                    transaction.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                >
                  {transaction.type === 'credit' ? '+' : '-'}GH₵ {transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <div className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                  transaction.status === 'completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    transaction.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-xl transition-colors flex items-center justify-center gap-2">
          View All Transactions
          <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  const ServicesGrid = () => (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Banking Services</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <button
            key={index}
            className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <service.icon size={24} />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const HomeContent = () => (
    <div className="space-y-8">
      {error && (
        <div className={`p-4 rounded-xl flex items-center gap-3 ${
          error.includes('success') 
            ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200' 
            : 'bg-gradient-to-r from-red-50 to-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {error.includes('success') ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{error}</span>
        </div>
      )}
      
      <BalanceCard />
      <QuickActions />
      <StatsGrid />
      <div className="grid lg:grid-cols-2 gap-8">
        <RecentTransactions />
        <ServicesGrid />
      </div>
    </div>
  );

  const CardsContent = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Platinum Card</h3>
            <p className="text-gray-300">•••• •••• •••• 4589</p>
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <CreditCard size={28} />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-gray-400 text-sm mb-1">Card Holder</p>
            <p className="font-bold">{user.firstName} {user.lastName}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-1">Valid Thru</p>
            <p className="font-bold">08/26</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Card Controls</h4>
          <div className="space-y-3">
            {['Freeze Card', 'Set Spending Limit', 'International Usage', 'ATM Withdrawals'].map((control, index) => (
              <label key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span className="text-gray-700">{control}</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition"></div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Recent Card Transactions</h4>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <ShoppingBag size={20} className="text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Amazon Purchase</p>
                  <p className="text-sm text-gray-500">Mar 15 • 10:42 AM</p>
                </div>
                <span className="font-bold text-gray-900">-₵299.99</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TransferContent = () => (
    <div className="space-y-8">
      {error && (
        <div className={`p-4 rounded-xl flex items-center gap-3 ${
          error.includes('success') 
            ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200' 
            : 'bg-gradient-to-r from-red-50 to-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {error.includes('success') ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{error}</span>
        </div>
      )}

      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Send size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Send Money</h3>
            <p className="text-gray-500">Transfer funds to any bank account</p>
          </div>
        </div>

        <form onSubmit={handleTransfer} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Account Number *
              </label>
              <input
                type="text"
                placeholder="Enter 10-digit account number"
                value={transferData.recipientAccountNumber}
                onChange={(e) => setTransferData(prev => ({
                  ...prev,
                  recipientAccountNumber: e.target.value
                }))}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (GH₵) *
              </label>
              <input
                type="number"
                placeholder="0.00"
                min="0.01"
                step="0.01"
                value={transferData.amount}
                onChange={(e) => setTransferData(prev => ({
                  ...prev,
                  amount: e.target.value
                }))}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              placeholder="Add a note (optional)"
              value={transferData.description}
              onChange={(e) => setTransferData(prev => ({
                ...prev,
                description: e.target.value
              }))}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={transferLoading}
            className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 active:translate-y-0"
          >
            {transferLoading ? (
              <>
                <Loader className="animate-spin" size={20} />
                Processing Transfer...
              </>
            ) : (
              'Send Money Now'
            )}
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
        <h4 className="font-semibold text-gray-900 mb-4">💡 Transfer Tips</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            Transfers are processed instantly within Emerald Capital
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            No fees for transfers to other Emerald Capital accounts
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            Daily transfer limit: GH₵ 50,000
          </li>
        </ul>
      </div>
    </div>
  );

  const ProfileContent = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-100 rounded-xl border-4 border-white flex items-center justify-center">
              <CheckCircle size={16} className="text-emerald-600" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {user.firstName} {user.middleName} {user.lastName}
            </h3>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Verified</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Premium</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Active</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Personal Information</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Phone Number</label>
                <p className="font-medium text-gray-900">{user.phone}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Ghana Card</label>
                <p className="font-medium text-gray-900">{user.ghanaCardNumber}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date of Birth</label>
                <p className="font-medium text-gray-900">{user.dateOfBirth}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Account Details</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Account Number</label>
                <p className="font-medium text-gray-900">{accountData?.accountNumber || '••••••••••••'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Account Type</label>
                <p className="font-medium text-gray-900">Premium Savings</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Member Since</label>
                <p className="font-medium text-gray-900">January 2023</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Region</label>
                <p className="font-medium text-gray-900">{user.region}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Home Address</label>
                <p className="font-medium text-gray-900">{user.homeAddress}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Emergency Contact</label>
                <p className="font-medium text-gray-900">{user.nextOfKinPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Security Settings</h4>
          <div className="space-y-3">
            {['Two-Factor Authentication', 'Biometric Login', 'Transaction PIN', 'Login Alerts'].map((setting, index) => (
              <label key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span className="text-gray-700">{setting}</span>
                <div className="relative">
                  <input type="checkbox" defaultChecked={index < 2} className="sr-only" />
                  <div className="w-10 h-6 bg-emerald-500 rounded-full"></div>
                  <div className="dot absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition"></div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-4">Account Preferences</h4>
          <div className="space-y-4">
            {['Email Notifications', 'SMS Alerts', 'Monthly Statements', 'Marketing Updates'].map((pref, index) => (
              <label key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <input type="checkbox" defaultChecked={index < 2} className="w-5 h-5 text-emerald-600 rounded" />
                <span className="text-gray-700">{pref}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent />;
      case 'cards':
        return <CardsContent />;
      case 'transfer':
        return <TransferContent />;
      case 'profile':
        return <ProfileContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-emerald-50/30 flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-64 h-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Sidebar isMobile={true} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        <main 
          ref={mainRef}
          className="flex-1 p-6 lg:p-8 overflow-auto"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="max-w-7xl mx-auto">
            {renderContent()}
            
            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>© 2024 Emerald Capital. All rights reserved.</span>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-emerald-600">Privacy Policy</a>
                    <a href="#" className="hover:text-emerald-600">Terms of Service</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>System Status: All services operational</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Missing icon component for CardsContent
const ShoppingBag = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

// CheckCircle icon component
const CheckCircle = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default DashboardPage;