// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
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
  AlertCircle
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

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);

  // Fetch account data and transactions
  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoadingData(true);
      setError(null);

      // Fetch account balance and details
      const balanceResponse = await authAPI.getAccountBalance();
      const detailsResponse = await authAPI.getAccountDetails();
      const transactionsResponse = await authAPI.getTransactions({ limit: 5 });

      setAccountData({
        balance: balanceResponse.data.data.balance,
        ...detailsResponse.data.data.account
      });

      setTransactions(transactionsResponse.data.data.transactions || []);
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

      // Refresh account data
      await fetchDashboardData();

      // Show success message
      setError('Transfer completed successfully!');
      setTimeout(() => setError(null), 3000);

    } catch (error) {
      console.error('Transfer error:', error);
      setError(error.response?.data?.message || 'Transfer failed. Please try again.');
    } finally {
      setTransferLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const quickActions = [
    { icon: Send, label: 'Send Money', color: 'bg-blue-500', action: () => setActiveTab('transfer') },
    { icon: ArrowDownLeft, label: 'Receive', color: 'bg-green-500', action: () => {} },
    { icon: Wallet, label: 'Loans', color: 'bg-purple-500', action: () => navigate('/loans') },
    { icon: TrendingUp, label: 'Invest', color: 'bg-orange-500', action: () => {} }
  ];

  const Logo = () => (
    <div className="flex items-center">
      <div className="w-8 h-6 bg-red-600 mr-2 relative rounded-sm">
        <div className="absolute top-0.5 left-0.5 right-0.5 h-1 bg-white rounded-sm"></div>
        <div className="absolute top-3 left-0.5 right-0.5 h-1 bg-white rounded-sm"></div>
      </div>
      <div className="text-gray-800 text-base font-bold leading-tight">
        Emerald<br />
        <span className="text-blue-600 font-normal text-sm">Capital</span>
      </div>
    </div>
  );

  const Sidebar = ({ isMobile = false }) => {
    const menuItems = [
      { icon: Home, label: 'Dashboard', id: 'home' },
      { icon: CreditCard, label: 'Cards', id: 'cards' },
      { icon: Send, label: 'Transfer', id: 'transfer' },
      { icon: User, label: 'Profile', id: 'profile' }
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
      <div className={`${isMobile ? 'w-full' : 'w-64'} bg-white border-r border-gray-200 flex flex-col h-full`}>
        <div className="p-6 border-b border-gray-200">
          <Logo />
        </div>
        
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                activeTab === item.id
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    );
  };

  const Header = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <h1 className="text-xl font-semibold text-gray-800 hidden lg:block">
        Welcome back, {user.firstName}!
      </h1>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
            {user.firstName?.[0]}{user.lastName?.[0]}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-800">{user.firstName} {user.lastName}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const BalanceCard = () => {
    if (loadingData) {
      return (
        <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-red-100 text-sm mb-1">Total Balance</p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-32 bg-red-400 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Loader className="animate-spin" size={24} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-red-100 text-sm mb-1">Total Balance</p>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">
                {showBalance ? `GH₵ ${accountData?.balance?.toFixed(2) || '0.00'}` : '••••••'}
              </h2>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="p-1 hover:bg-red-600 rounded-lg transition-colors"
              >
                {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Wallet size={24} />
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-red-100 text-xs mb-1">Account Number</p>
            <p className="text-white font-semibold">{accountData?.accountNumber || user.accountNumber}</p>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg"></div>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg"></div>
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
          className="bg-white rounded-xl p-4 flex flex-col items-center gap-3 hover:shadow-lg transition-all border border-gray-100"
        >
          <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
            <action.icon size={24} />
          </div>
          <span className="text-sm font-medium text-gray-700">{action.label}</span>
        </button>
      ))}
    </div>
  );

  const RecentTransactions = () => {
    if (loadingData) {
      return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
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
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
          </div>
          <div className="text-center py-8">
            <CreditCard size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">No transactions yet</p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
          <button className="text-red-600 text-sm font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction._id}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    transaction.type === 'credit'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {transaction.type === 'credit' ? (
                    <ArrowDownLeft size={20} />
                  ) : (
                    <ArrowUpRight size={20} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{transaction.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={12} />
                    <span>{new Date(transaction.createdAt).toLocaleDateString()} • {new Date(transaction.createdAt).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-semibold ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {transaction.type === 'credit' ? '+' : '-'}GH₵ {transaction.amount.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">{transaction.reference}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const HomeContent = () => (
    <div className="space-y-6">
      {error && (
        <div className={`p-4 rounded-xl flex items-center gap-3 ${
          error.includes('success') 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          <AlertCircle size={20} />
          <span className="font-medium">{error}</span>
        </div>
      )}
      <BalanceCard />
      <QuickActions />
      <RecentTransactions />
    </div>
  );

  const CardsContent = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
      <CreditCard size={64} className="mx-auto mb-4 text-gray-400" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Cards Management</h3>
      <p className="text-gray-500 mb-6">Manage your debit and credit cards</p>
      <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors">
        Request New Card
      </button>
    </div>
  );

  const TransferContent = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Money</h3>
      
      {error && (
        <div className={`p-4 rounded-xl flex items-center gap-3 mb-6 ${
          error.includes('success') 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          <AlertCircle size={20} />
          <span className="font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Account Number *
          </label>
          <input
            type="text"
            placeholder="Enter account number"
            value={transferData.recipientAccountNumber}
            onChange={(e) => setTransferData(prev => ({
              ...prev,
              recipientAccountNumber: e.target.value
            }))}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
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
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            placeholder="What's this for?"
            value={transferData.description}
            onChange={(e) => setTransferData(prev => ({
              ...prev,
              description: e.target.value
            }))}
            className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:ring-3 focus:ring-red-100 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={transferLoading}
          className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {transferLoading ? (
            <>
              <Loader className="animate-spin" size={20} />
              Processing...
            </>
          ) : (
            'Send Money'
          )}
        </button>
      </form>
    </div>
  );

  const ProfileContent = () => (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Profile Information</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            {user.firstName?.[0]}{user.lastName?.[0]}
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {user.firstName} {user.middleName} {user.lastName}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-sm font-medium text-gray-500">Phone Number</label>
            <p className="text-gray-800 font-medium">{user.phone}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Account Number</label>
            <p className="text-gray-800 font-medium">{accountData?.accountNumber || user.accountNumber}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Ghana Card</label>
            <p className="text-gray-800 font-medium">{user.ghanaCardNumber}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Region</label>
            <p className="text-gray-800 font-medium">{user.region}</p>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-500">Home Address</label>
            <p className="text-gray-800 font-medium">{user.homeAddress}</p>
          </div>
        </div>

        <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors mt-6">
          Edit Profile
        </button>
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-64 h-full" onClick={(e) => e.stopPropagation()}>
            <Sidebar isMobile={true} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;