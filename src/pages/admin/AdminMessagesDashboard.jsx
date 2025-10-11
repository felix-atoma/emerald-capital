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
  Reply
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
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });
  
  const navigate = useNavigate();

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
      if (response.data && response.data.success) {
        const { data: responseData } = response.data;
        
        // Extract messages and pagination from various possible structures
        const messagesData = responseData.contactMessages || responseData.messages || responseData.data || [];
        const paginationData = responseData.pagination || {
          page,
          limit: 10,
          total: messagesData.length,
          pages: Math.ceil(messagesData.length / 10)
        };

        setMessages(messagesData);
        setPagination(paginationData);
        setCurrentPage(page);
        
        console.log(`✅ Loaded ${messagesData.length} messages`);
        
      } else {
        console.error('❌ Invalid response structure:', response.data);
        toast.error('Failed to load messages: Invalid response format');
      }
      
    } catch (error) {
      console.error('❌ Error fetching messages:', error);
      
      // Handle specific error cases
      if (error.response?.status === 401) {
        toast.error('Authentication failed. Please login again.');
        localStorage.removeItem('adminAuthToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
        return;
      }
      
      if (error.response?.status === 404) {
        toast.error('Messages endpoint not found. Please check backend configuration.');
        return;
      }
      
      toast.error('Failed to load messages: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
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
      
      // Update local state
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'read' } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'read' });
      }
      
      toast.success('Marked as read');
    } catch (error) {
      console.error('Error marking message as read:', error);
      toast.error('Failed to update message: ' + (error.response?.data?.message || error.message));
    } finally {
      setActionLoading(false);
    }
  };

  const markAsNew = async (messageId) => {
    try {
      setActionLoading(true);
      await adminContactAPI.updateMessageStatus(messageId, { status: 'new' });
      
      // Update local state
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'new' } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'new' });
      }
      
      toast.success('Marked as new');
    } catch (error) {
      console.error('Error marking message as new:', error);
      toast.error('Failed to update message: ' + (error.response?.data?.message || error.message));
    } finally {
      setActionLoading(false);
    }
  };

  const markAsReplied = async (messageId) => {
    try {
      setActionLoading(true);
      await adminContactAPI.updateMessageStatus(messageId, { status: 'replied' });
      
      // Update local state
      setMessages(messages.map(msg => 
        msg._id === messageId ? { ...msg, status: 'replied' } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage({ ...selectedMessage, status: 'replied' });
      }
      
      toast.success('Marked as replied');
    } catch (error) {
      console.error('Error marking message as replied:', error);
      toast.error('Failed to update message: ' + (error.response?.data?.message || error.message));
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
      
      // Update local state
      setMessages(messages.filter(msg => msg._id !== messageId));
      if (selectedMessage?._id === messageId) {
        setSelectedMessage(null);
      }
      
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message: ' + (error.response?.data?.message || error.message));
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
    // Auto-mark as read when selected if it's new
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
      message.subject?.toLowerCase().includes(searchLower) ||
      message.message?.toLowerCase().includes(searchLower) ||
      message.phone?.toLowerCase().includes(searchLower)
    );
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
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

  if (loading && messages.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Site
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Message Dashboard</h1>
                  <p className="text-sm text-gray-600">Emerald Capital Admin</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={refreshMessages}
                disabled={loading}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold text-gray-900">{pagination.total}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Messages</p>
                <p className="text-2xl font-bold text-gray-900">
                  {messages.filter(msg => msg.status === 'new').length}
                </p>
              </div>
              <Mail className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Replied</p>
                <p className="text-2xl font-bold text-gray-900">
                  {messages.filter(msg => msg.status === 'replied').length}
                </p>
              </div>
              <Reply className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Response Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round((messages.filter(msg => msg.status !== 'new').length / (messages.length || 1)) * 100)}%
                </p>
              </div>
              <User className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Search and Filter Bar */}
              <div className="p-6 border-b">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search messages by name, email, or content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    />
                  </div>
                  
                  <select
                    value={filterStatus}
                    onChange={(e) => {
                      setFilterStatus(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  >
                    <option value="all">All Messages</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Messages List */}
              <div className="max-h-[600px] overflow-y-auto">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      {messages.length === 0 ? 'No messages yet' : 'No messages match your search'}
                    </p>
                  </div>
                ) : (
                  filteredMessages.map((message) => (
                    <div
                      key={message._id}
                      className={`border-b hover:bg-gray-50 cursor-pointer transition ${
                        selectedMessage?._id === message._id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      } ${message.status === 'new' ? 'bg-red-50 border-l-4 border-l-red-500' : ''}`}
                      onClick={() => handleMessageSelect(message)}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{message.name}</h3>
                              <p className="text-sm text-gray-600">{message.email}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{formatDate(message.createdAt)}</p>
                            <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${getStatusColor(message.status)}`}>
                              {getStatusDisplay(message.status)}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{message.message}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            {message.phone && (
                              <span className="flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {message.phone}
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
                                className="text-xs text-blue-600 hover:text-blue-800 transition disabled:opacity-50"
                                disabled={actionLoading}
                              >
                                Mark Read
                              </button>
                            )}
                            {message.status === 'read' && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markAsReplied(message._id);
                                }}
                                className="text-xs text-green-600 hover:text-green-800 transition disabled:opacity-50"
                                disabled={actionLoading}
                              >
                                Mark Replied
                              </button>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteMessage(message._id);
                              }}
                              className="text-xs text-red-600 hover:text-red-800 transition disabled:opacity-50"
                              disabled={actionLoading}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="px-6 py-4 border-t">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">
                      Showing {((currentPage - 1) * pagination.limit) + 1} to {Math.min(currentPage * pagination.limit, pagination.total)} of {pagination.total} results
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => fetchMessages(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="px-3 py-2 text-sm text-gray-700">
                        Page {currentPage} of {pagination.pages}
                      </span>
                      <button
                        onClick={() => fetchMessages(currentPage + 1)}
                        disabled={currentPage === pagination.pages}
                        className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-8">
              {selectedMessage ? (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Message Details</h2>
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedMessage.status)}`}>
                      {getStatusDisplay(selectedMessage.status)}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <p className="text-lg font-semibold text-gray-900">{selectedMessage.name}</p>
                      <p className="text-gray-600">{selectedMessage.email}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {selectedMessage.phone && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <p className="text-gray-900 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            {selectedMessage.phone}
                          </p>
                        </div>
                      )}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <p className="text-gray-900 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(selectedMessage.createdAt)}
                        </p>
                      </div>
                    </div>

                    {selectedMessage.website && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <p className="text-gray-900">{selectedMessage.website}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <div className="bg-gray-50 rounded-lg p-4 mt-1">
                        <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4">
                      {selectedMessage.status === 'new' && (
                        <button
                          onClick={() => markAsRead(selectedMessage._id)}
                          disabled={actionLoading}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
                        >
                          Mark as Read
                        </button>
                      )}
                      {selectedMessage.status === 'read' && (
                        <button
                          onClick={() => markAsReplied(selectedMessage._id)}
                          disabled={actionLoading}
                          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50"
                        >
                          Mark as Replied
                        </button>
                      )}
                      {selectedMessage.status === 'replied' && (
                        <button
                          onClick={() => markAsNew(selectedMessage._id)}
                          disabled={actionLoading}
                          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition font-medium disabled:opacity-50"
                        >
                          Mark as New
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(selectedMessage._id)}
                        disabled={actionLoading}
                        className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Select a message to view details</p>
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