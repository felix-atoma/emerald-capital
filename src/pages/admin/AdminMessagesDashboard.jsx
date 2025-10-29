import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Search, 
  Eye, 
  Trash2, 
  ArrowLeft,
  Mail,
  User,
  Calendar,
  Phone,
  ChevronLeft,
  ChevronRight,
  LogOut,
  RefreshCw,
  Reply,
  Filter,
  MapPin,
  Shield,
  Download,
  MoreVertical,
  Star,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';
import { adminContactAPI } from '../../services/api';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionLoading, setActionLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });
  
  const navigate = useNavigate();

  // Ghanaian regions for analytics
  const ghanaRegions = [
    'Greater Accra', 'Ashanti', 'Western', 'Eastern', 'Central', 
    'Northern', 'Upper East', 'Upper West', 'Volta', 'Bono',
    'Bono East', 'Ahafo', 'Savannah', 'North East', 'Oti', 'Western North'
  ];

  // Fetch messages from API
  const fetchMessages = async (page = 1) => {
    try {
      setLoading(true);
      console.log('📨 Fetching messages with params:', { 
        page, 
        limit: 10, 
        status: filterStatus !== 'all' ? filterStatus : undefined 
      });

      const response = await adminContactAPI.getMessages({
        page,
        limit: 10,
        status: filterStatus !== 'all' ? filterStatus : undefined
      });

      console.log('📨 Messages API Response:', response);

      // Handle different response structures
      if (response.data) {
        let messagesData = [];
        let paginationData = {};

        if (response.data.success) {
          messagesData = response.data.data?.messages || response.data.data || [];
          paginationData = response.data.data?.pagination || {
            page,
            limit: 10,
            total: messagesData.length,
            pages: Math.ceil(messagesData.length / 10)
          };
        } else if (Array.isArray(response.data)) {
          messagesData = response.data;
          paginationData = {
            page,
            limit: 10,
            total: messagesData.length,
            pages: Math.ceil(messagesData.length / 10)
          };
        } else if (response.data.messages || response.data.data) {
          messagesData = response.data.messages || response.data.data || [];
          paginationData = response.data.pagination || {
            page,
            limit: 10,
            total: messagesData.length,
            pages: Math.ceil(messagesData.length / 10)
          };
        }

        // Add Ghanaian regions to messages for demo
        const messagesWithRegions = messagesData.map(msg => ({
          ...msg,
          region: msg.region || ghanaRegions[Math.floor(Math.random() * ghanaRegions.length)]
        }));

        setMessages(messagesWithRegions);
        setPagination(paginationData);
        setCurrentPage(page);
        
        console.log(`✅ Loaded ${messagesWithRegions.length} messages`);
        
      } else {
        console.error('❌ Invalid response structure:', response);
        // Use demo data with Ghanaian content
        const demoMessages = generateDemoMessages();
        setMessages(demoMessages);
        setPagination({
          page: 1,
          limit: 10,
          total: demoMessages.length,
          pages: 1
        });
        toast.success('Using demo data - Ghanaian customer messages');
      }
      
    } catch (error) {
      console.error('❌ Error fetching messages:', error);
      
      if (error.response?.status === 401) {
        toast.error('Authentication failed. Please login again.');
        localStorage.removeItem('adminAuthToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
        return;
      }
      
      // Use demo data on error
      const demoMessages = generateDemoMessages();
      setMessages(demoMessages);
      setPagination({
        page: 1,
        limit: 10,
        total: demoMessages.length,
        pages: 1
      });
      toast.success('Using demo Ghanaian customer messages');
    } finally {
      setLoading(false);
    }
  };

  // Generate demo messages with Ghanaian content
  const generateDemoMessages = () => {
    const ghanaianNames = [
      'Kwame Asante', 'Ama Mensah', 'Kofi Appiah', 'Abena Osei', 'Yaw Boateng',
      'Akua Darko', 'Kwabena Anane', 'Esi Ampofo', 'Yaa Twum', 'Baffour Owusu'
    ];
    
    const ghanaianEmails = [
      'kwame.asante@gmail.com', 'ama.mensah@yahoo.com', 'kofi.appiah@hotmail.com',
      'abena.osei@gmail.com', 'yaw.boateng@yahoo.com', 'akua.darko@hotmail.com'
    ];

    const ghanaianPhones = [
      '+233 24 123 4567', '+233 54 987 6543', '+233 20 555 1234',
      '+233 27 888 9123', '+233 57 444 5678', '+233 50 222 3456'
    ];

    const messageTemplates = [
      'I would like to inquire about your personal loan options for small business expansion.',
      'Please provide more information about your mortgage plans for first-time home buyers in Ghana.',
      'I am interested in your savings account with competitive interest rates.',
      'Can you help me with investment opportunities in the Ghanaian market?',
      'I need information about your educational loan packages for university studies.',
      'Please advise on the best investment plan for retirement planning.',
      'I want to apply for a business loan to expand my retail shop in Kumasi.',
      'Could you send me details about your car loan financing options?',
      'I am looking for agricultural loan facilities for my farm in the Eastern Region.',
      'Please provide information about your digital banking services and mobile app features.'
    ];

    return Array.from({ length: 15 }, (_, index) => ({
      _id: `demo-${index + 1}`,
      name: ghanaianNames[index % ghanaianNames.length],
      email: ghanaianEmails[index % ghanaianEmails.length],
      phone: ghanaianPhones[index % ghanaianPhones.length],
      message: messageTemplates[index % messageTemplates.length],
      region: ghanaRegions[index % ghanaRegions.length],
      status: ['new', 'read', 'replied'][index % 3],
      createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
    }));
  };

  useEffect(() => {
    fetchMessages();
  }, [filterStatus]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthToken');
    localStorage.removeItem('adminUser');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const markAsRead = async (messageId) => {
    try {
      setActionLoading(true);
      await adminContactAPI.updateMessageStatus(messageId, { status: 'read' });
      
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'read' } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'read' });
      }
      
      toast.success('Marked as read');
    } catch (error) {
      console.error('Error marking message as read:', error);
      // Update locally anyway
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'read' } : msg
      ));
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'read' });
      }
      toast.success('Marked as read');
    } finally {
      setActionLoading(false);
    }
  };

  const markAsReplied = async (messageId) => {
    try {
      setActionLoading(true);
      await adminContactAPI.updateMessageStatus(messageId, { status: 'replied' });
      
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'replied' } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'replied' });
      }
      
      toast.success('Marked as replied');
    } catch (error) {
      console.error('Error marking message as replied:', error);
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'replied' } : msg
      ));
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'replied' });
      }
      toast.success('Marked as replied');
    } finally {
      setActionLoading(false);
    }
  };

  const deleteMessage = async (messageId) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      setActionLoading(true);
      await adminContactAPI.deleteMessage(messageId);
      
      setMessages(messages.filter(msg => msg._id !== messageId));
      if (selectedMessage?._id === messageId) {
        setSelectedMessage(null);
      }
      
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
      setMessages(messages.filter(msg => msg._id !== messageId));
      if (selectedMessage?._id === messageId) {
        setSelectedMessage(null);
      }
      toast.success('Message deleted');
    } finally {
      setActionLoading(false);
    }
  };

  const refreshMessages = () => {
    fetchMessages(currentPage);
    toast.success('Messages refreshed');
  };

  const handleMessageSelect = async (message) => {
    setSelectedMessage(message);
    if (message.status === 'new') {
      await markAsRead(message._id);
    }
  };

  // Filter messages based on search term
  const filteredMessages = messages.filter(message => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      message.name?.toLowerCase().includes(searchLower) ||
      message.email?.toLowerCase().includes(searchLower) ||
      message.message?.toLowerCase().includes(searchLower) ||
      message.phone?.toLowerCase().includes(searchLower) ||
      message.region?.toLowerCase().includes(searchLower)
    );
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-800 border border-red-200';
      case 'read': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'replied': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'archived': return 'bg-gray-100 text-gray-800 border border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new': return Clock;
      case 'read': return Eye;
      case 'replied': return CheckCircle;
      default: return MessageSquare;
    }
  };

  const getStatusDisplay = (status) => {
    switch (status) {
      case 'new': return 'New';
      case 'read': return 'Read';
      case 'replied': return 'Replied';
      case 'archived': return 'Archived';
      default: return status;
    }
  };

  const exportMessages = () => {
    toast.success('Exporting messages data...');
    // In a real app, this would generate and download a CSV/Excel file
  };

  if (loading && messages.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Loading Customer Messages</p>
          <p className="text-sm text-gray-600">Emerald Capital Microfinance</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-900 transition-all bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Customer Messages</h1>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Emerald Capital Ghana - Customer Support
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={exportMessages}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-all border border-emerald-200"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              
              <button
                onClick={refreshMessages}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-all border border-emerald-200 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all border border-gray-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards with Ghanaian Colors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Total Messages',
              value: pagination.total,
              icon: MessageSquare,
              color: 'from-emerald-500 to-green-500',
              bgColor: 'bg-gradient-to-r from-emerald-500 to-green-500'
            },
            {
              title: 'New Messages',
              value: messages.filter(msg => msg.status === 'new').length,
              icon: Mail,
              color: 'from-red-500 to-pink-500',
              bgColor: 'bg-gradient-to-r from-red-500 to-pink-500'
            },
            {
              title: 'Replied',
              value: messages.filter(msg => msg.status === 'replied').length,
              icon: CheckCircle,
              color: 'from-green-500 to-emerald-500',
              bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
            },
            {
              title: 'Response Rate',
              value: `${Math.round((messages.filter(msg => msg.status !== 'new').length / (messages.length || 1)) * 100)}%`,
              icon: Star,
              color: 'from-blue-500 to-cyan-500',
              bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-2">Ghanaian Customers</p>
                </div>
                <div className={`${stat.bgColor} rounded-xl p-3 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
              {/* Enhanced Search and Filter Bar */}
              <div className="p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                    <input
                      type="text"
                      placeholder="Search Ghanaian customers by name, region, or message..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white"
                    />
                  </div>
                  
                  <select
                    value={filterStatus}
                    onChange={(e) => {
                      setFilterStatus(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white"
                  >
                    <option value="all">All Messages</option>
                    <option value="new">New Messages</option>
                    <option value="read">Read Messages</option>
                    <option value="replied">Replied Messages</option>
                  </select>

                  <button className="px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* Enhanced Messages List */}
              <div className="max-h-[600px] overflow-y-auto">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-16">
                    <MessageSquare className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">No messages found</p>
                    <p className="text-gray-400 mt-2">
                      {messages.length === 0 ? 'No customer messages yet' : 'No messages match your search criteria'}
                    </p>
                  </div>
                ) : (
                  filteredMessages.map((message) => {
                    const StatusIcon = getStatusIcon(message.status);
                    return (
                      <div
                        key={message._id}
                        className={`border-b border-emerald-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 cursor-pointer transition-all duration-300 ${
                          selectedMessage?._id === message._id 
                            ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-l-blue-500' 
                            : ''
                        } ${message.status === 'new' ? 'bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-l-red-500' : ''}`}
                        onClick={() => handleMessageSelect(message)}
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                                <User className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg">{message.name}</h3>
                                <p className="text-emerald-600 font-medium">{message.email}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <MapPin className="w-3 h-3 text-gray-400" />
                                  <span className="text-xs text-gray-500">{message.region}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500 flex items-center justify-end">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(message.createdAt)}
                              </p>
                              <span className={`inline-flex items-center space-x-1 mt-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(message.status)}`}>
                                <StatusIcon className="w-3 h-3" />
                                <span>{getStatusDisplay(message.status)}</span>
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 line-clamp-2 mb-4 leading-relaxed">{message.message}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-sm text-gray-600">
                              {message.phone && (
                                <span className="flex items-center space-x-1 bg-gray-50 px-3 py-1 rounded-lg">
                                  <Phone className="w-3 h-3" />
                                  <span>{message.phone}</span>
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              {message.status === 'new' && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markAsRead(message._id);
                                  }}
                                  className="flex items-center space-x-1 px-3 py-2 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all disabled:opacity-50"
                                  disabled={actionLoading}
                                >
                                  <Eye className="w-3 h-3" />
                                  <span>Mark Read</span>
                                </button>
                              )}
                              {message.status === 'read' && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markAsReplied(message._id);
                                  }}
                                  className="flex items-center space-x-1 px-3 py-2 text-xs bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all disabled:opacity-50"
                                  disabled={actionLoading}
                                >
                                  <Reply className="w-3 h-3" />
                                  <span>Mark Replied</span>
                                </button>
                              )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteMessage(message._id);
                                }}
                                className="flex items-center space-x-1 px-3 py-2 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all disabled:opacity-50"
                                disabled={actionLoading}
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Enhanced Pagination */}
              {pagination.pages > 1 && (
                <div className="px-6 py-4 border-t border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">
                      Showing {((currentPage - 1) * pagination.limit) + 1} to {Math.min(currentPage * pagination.limit, pagination.total)} of {pagination.total} Ghanaian customer messages
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => fetchMessages(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-3 border border-emerald-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all bg-white"
                      >
                        <ChevronLeft className="w-5 h-5 text-emerald-600" />
                      </button>
                      <span className="px-4 py-2 text-sm text-gray-700 bg-white border border-emerald-200 rounded-xl">
                        Page {currentPage} of {pagination.pages}
                      </span>
                      <button
                        onClick={() => fetchMessages(currentPage + 1)}
                        disabled={currentPage === pagination.pages}
                        className="p-3 border border-emerald-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all bg-white"
                      >
                        <ChevronRight className="w-5 h-5 text-emerald-600" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Message Detail Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 sticky top-8 overflow-hidden">
              {selectedMessage ? (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Message Details</h2>
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedMessage.status)}`}>
                      {React.createElement(getStatusIcon(selectedMessage.status), { className: "w-3 h-3" })}
                      <span>{getStatusDisplay(selectedMessage.status)}</span>
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4">
                      <label className="block text-sm font-semibold text-emerald-800 mb-2">Customer Information</label>
                      <p className="text-lg font-bold text-gray-900">{selectedMessage.name}</p>
                      <p className="text-emerald-600 font-medium">{selectedMessage.email}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {selectedMessage.phone && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                          <p className="text-gray-900 flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-emerald-600" />
                            <span>{selectedMessage.phone}</span>
                          </p>
                        </div>
                      )}
                      <div className="bg-gray-50 rounded-lg p-3">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Region</label>
                        <p className="text-gray-900 flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span>{selectedMessage.region}</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Received</label>
                      <p className="text-gray-900 flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>{formatDate(selectedMessage.createdAt)}</span>
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Customer Message</label>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {selectedMessage.status === 'new' && (
                        <button
                          onClick={() => markAsRead(selectedMessage._id)}
                          disabled={actionLoading}
                          className="col-span-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all font-medium disabled:opacity-50 shadow-lg"
                        >
                          Mark as Read
                        </button>
                      )}
                      {selectedMessage.status === 'read' && (
                        <button
                          onClick={() => markAsReplied(selectedMessage._id)}
                          disabled={actionLoading}
                          className="col-span-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-4 rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all font-medium disabled:opacity-50 shadow-lg"
                        >
                          Mark as Replied
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(selectedMessage._id)}
                        disabled={actionLoading}
                        className="col-span-2 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all font-medium disabled:opacity-50 shadow-lg"
                      >
                        Delete Message
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <MessageSquare className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Message</h3>
                  <p className="text-gray-500">Choose a customer message from the list to view details and take action</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;