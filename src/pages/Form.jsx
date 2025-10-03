import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, Star, X } from 'lucide-react';

export default function GhanaLoanForm() {
  const [formData, setFormData] = useState({
    sex: '',
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    phone: '',
    otherPhone: '',
    ghanaCardNumber: '',
    ghanaCardNumberConfirm: '',
    email: '',
    homeAddress: '',
    region: '',
    nextOfKin: [
      { relationship: '', firstName: '', lastName: '' },
      { relationship: '', firstName: '', lastName: '' }
    ],
    nextOfKinPhone: '',
    employmentType: [],
    employer: '',
    staffNumber: '',
    employmentDate: '',
    gradeLevel: '',
    lastMonthPay: '',
    tenor: '',
    loanAmountRequested: 1000,
    loanPurpose: '',
    existingCustomer: '',
    officerRating: 0,
    accountOfficerCode: '',
    accountOfficerEmail: '',
    accountOfficerName: '',
    feedback: '',
    agreementConfirmed: false
  });

  const [files, setFiles] = useState({
    passportPhoto: null,
    ghanaCard: null,
    lastMonthPayslip: [],
    bankStatement: [],
    signature: null,
    compulsoryPayslip: null
  });

  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureEmpty, setSignatureEmpty] = useState(true);
  const canvasRef = useRef(null);

  const ghanaRegions = [
    'Greater Accra', 'Ashanti', 'Western', 'Eastern', 'Central', 
    'Northern', 'Upper East', 'Upper West', 'Volta', 'Bono',
    'Bono East', 'Ahafo', 'Savannah', 'North East', 'Oti', 'Western North'
  ];

  const employmentTypes = [
    { id: 'civilService', label: 'Civil Service' },
    { id: 'police', label: 'Ghana Police Service' },
    { id: 'military', label: 'Ghana Armed Forces' },
    { id: 'immigration', label: 'Ghana Immigration Service' },
    { id: 'fire', label: 'Ghana Fire Service' },
    { id: 'education', label: 'Ghana Education Service' },
    { id: 'health', label: 'Ghana Health Service' },
    { id: 'private', label: 'Private Sector' },
    { id: 'other', label: 'Other' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'employmentType') {
      setFormData(prev => ({
        ...prev,
        employmentType: checked 
          ? [...prev.employmentType, value]
          : prev.employmentType.filter(t => t !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNextOfKinChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      nextOfKin: prev.nextOfKin.map((kin, i) => 
        i === index ? { ...kin, [field]: value } : kin
      )
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const selectedFiles = Array.from(e.target.files);
    if (fieldName === 'lastMonthPayslip' || fieldName === 'bankStatement') {
      setFiles(prev => ({ ...prev, [fieldName]: selectedFiles }));
    } else {
      setFiles(prev => ({ ...prev, [fieldName]: selectedFiles[0] }));
    }
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    setSignatureEmpty(false);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureEmpty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Files:', files);
    alert('Form submitted successfully! Check console for details.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-white p-8 border-b-4 border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                EC
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-600">EMERALD CAPITAL</h1>
                <p className="text-sm font-semibold text-gray-700">MICROFINANCE BANK LTD</p>
                <p className="text-xs text-gray-600">Bolgatanga, Ghana</p>
                <p className="text-xs text-gray-600">+233 24 123 4567</p>
                <p className="text-xs text-gray-600">info@mutualtrustgh.com</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">LOAN APPLICATION</h2>
              <p className="text-gray-600">& Agreement Form</p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-gray-50 py-6 px-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <span className="font-medium text-green-600">Application Form</span>
            </div>
            <div className="w-24 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <span className="font-medium text-gray-400">Bank Details</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Personal Data */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">Personal Data</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sex <span className="text-red-500">*</span>
                </label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0244123456"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Other Phone Number</label>
              <input
                type="tel"
                name="otherPhone"
                value={formData.otherPhone}
                onChange={handleInputChange}
                placeholder="Alternative contact number"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ghana Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ghanaCardNumber"
                  value={formData.ghanaCardNumber}
                  onChange={handleInputChange}
                  placeholder="GHA-XXXXXXXXX-X"
                  maxLength="15"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Ghana Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ghanaCardNumberConfirm"
                  value={formData.ghanaCardNumberConfirm}
                  onChange={handleInputChange}
                  placeholder="GHA-XXXXXXXXX-X"
                  maxLength="15"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Home Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleInputChange}
                rows="3"
                placeholder="House number, street name, area"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="">Select Region</option>
                {ghanaRegions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Next of Kin */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">Next of Kin</h3>
            
            {formData.nextOfKin.map((kin, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={kin.relationship}
                    onChange={(e) => handleNextOfKinChange(index, 'relationship', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  >
                    <option value="">Select</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                    <option value="sibling">Sibling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={kin.firstName}
                    onChange={(e) => handleNextOfKinChange(index, 'firstName', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={kin.lastName}
                    onChange={(e) => handleNextOfKinChange(index, 'lastName', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required
                  />
                </div>
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Next of Kin Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="nextOfKinPhone"
                value={formData.nextOfKinPhone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />
            </div>
          </section>

          {/* Employment Details */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">Employment Details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Employment Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {employmentTypes.map(type => (
                  <label key={type.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="employmentType"
                      value={type.id}
                      checked={formData.employmentType.includes(type.id)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employer <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="employer"
                value={formData.employer}
                onChange={handleInputChange}
                placeholder="Name of organization/ministry"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Staff Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="staffNumber"
                  value={formData.staffNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Employment <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="employmentDate"
                  value={formData.employmentDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grade Level <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Month Net Pay (GHS) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="lastMonthPay"
                  value={formData.lastMonthPay}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">As shown on your payslip</p>
              </div>
            </div>
          </section>

          {/* Loan Details */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">Loan Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenor (Months) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="tenor"
                  value={formData.tenor}
                  onChange={handleInputChange}
                  max="24"
                  placeholder="Max 24 months"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (GHS) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="loanAmountRequested"
                  value={formData.loanAmountRequested}
                  onChange={handleInputChange}
                  min="1000"
                  max="50000"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">Purpose of Loan</label>
              <div className="space-y-2">
                {['Education', 'Family/Feeding', 'Healthcare', 'Housing', 'Business', 'Other'].map(purpose => (
                  <label key={purpose} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="loanPurpose"
                      value={purpose.toLowerCase()}
                      checked={formData.loanPurpose === purpose.toLowerCase()}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{purpose}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Are you an Existing Customer? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="existingCustomer"
                    value="yes"
                    checked={formData.existingCustomer === 'yes'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="existingCustomer"
                    value="no"
                    checked={formData.existingCustomer === 'no'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          </section>

          {/* Attachments */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">Attachments</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Photograph <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'passportPhoto')}
                    className="hidden"
                    id="passportPhoto"
                    required
                  />
                  <label htmlFor="passportPhoto" className="cursor-pointer">
                    <Camera className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or take photo</p>
                    {files.passportPhoto && <p className="text-xs text-green-600 mt-2">{files.passportPhoto.name}</p>}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ghana Card (Front & Back) <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange(e, 'ghanaCard')}
                    className="hidden"
                    id="ghanaCard"
                    required
                  />
                  <label htmlFor="ghanaCard" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload Ghana Card (both sides)</p>
                    {files.ghanaCard && <p className="text-xs text-green-600 mt-2">{files.ghanaCard.name}</p>}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Month Payslip <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                  <input
                    type="file"
                    accept=".pdf,image/*"
                    multiple
                    onChange={(e) => handleFileChange(e, 'lastMonthPayslip')}
                    className="hidden"
                    id="lastMonthPayslip"
                    required
                  />
                  <label htmlFor="lastMonthPayslip" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload payslip(s)</p>
                    {files.lastMonthPayslip.length > 0 && (
                      <p className="text-xs text-green-600 mt-2">
                        {files.lastMonthPayslip.length} file(s) selected
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Statement (Last 3 months) <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                  <input
                    type="file"
                    accept=".pdf,image/*"
                    multiple
                    onChange={(e) => handleFileChange(e, 'bankStatement')}
                    className="hidden"
                    id="bankStatement"
                    required
                  />
                  <label htmlFor="bankStatement" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload bank statement(s)</p>
                    {files.bankStatement.length > 0 && (
                      <p className="text-xs text-green-600 mt-2">
                        {files.bankStatement.length} file(s) selected
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Signature <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <canvas
                    ref={canvasRef}
                    width={600}
                    height={150}
                    className="w-full border border-gray-200 rounded cursor-crosshair bg-white"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                  <button
                    type="button"
                    onClick={clearSignature}
                    className="mt-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear Signature
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Account Officer */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">Account Officer Details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(rating => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, officerRating: rating }))}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        rating <= formData.officerRating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Officer Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountOfficerCode"
                  value={formData.accountOfficerCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Officer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountOfficerName"
                  value={formData.accountOfficerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Officer Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="accountOfficerEmail"
                  value={formData.accountOfficerEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Feedback/Comments</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                rows="4"
                placeholder="Additional comments or feedback"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              ></textarea>
            </div>
          </section>

          {/* Agreement */}
          <section>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Terms & Conditions</h3>
              <div className="text-sm text-gray-700 space-y-2 mb-4 max-h-40 overflow-y-auto">
                <p>By submitting this application, I confirm that:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All information provided is true and accurate to the best of my knowledge</li>
                  <li>I authorize Mutual Trust Microfinance Bank Ltd to verify the information provided</li>
                  <li>I understand that providing false information may result in rejection of this application</li>
                  <li>I have read and agree to the loan terms and conditions</li>
                  <li>I authorize deductions from my salary for loan repayment</li>
                  <li>I understand the interest rates and repayment schedule</li>
                </ul>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreementConfirmed"
                  checked={formData.agreementConfirmed}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreementConfirmed: e.target.checked }))}
                  className="w-5 h-5 mt-0.5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span className="text-sm font-medium text-gray-700">
                  I have read and agree to the terms and conditions <span className="text-red-500">*</span>
                </span>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}