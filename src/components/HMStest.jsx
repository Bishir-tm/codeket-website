import React, { useState } from "react";
import {
  Bell,
  Search,
  Calendar,
  User,
  Users,
  Activity,
  Heart,
  Clipboard,
  Menu,
  ChevronDown,
  Clock,
  Brain,
  Thermometer,
  Plus,
  FileText,
  Zap,
  BarChart2,
  Settings,
  HelpCircle,
  Layers,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  X,
  ChevronRight,
  Eye,
  Stethoscope,
  Cpu,
  Shield,
  Monitor,
} from "lucide-react";

const HealthcareDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSidebar, setActiveSidebar] = useState(true);

  // Simulated patient data
  const upcomingAppointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      age: 34,
      time: "10:30 AM",
      condition: "Post-surgical evaluation",
      priority: "Medium",
      aiStatus: "Reviewed",
      aiConfidence: 96,
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      patientName: "Michael Chen",
      age: 58,
      time: "11:45 AM",
      condition: "Cardiac arrhythmia",
      priority: "High",
      aiStatus: "Analyzing",
      aiConfidence: 87,
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 3,
      patientName: "Robert Williams",
      age: 62,
      time: "2:15 PM",
      condition: "Diabetes follow-up",
      priority: "Medium",
      aiStatus: "Pending",
      aiConfidence: 0,
      img: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 4,
      patientName: "Emma Thompson",
      age: 27,
      time: "3:30 PM",
      condition: "Respiratory infection",
      priority: "Urgent",
      aiStatus: "Completed",
      aiConfidence: 98,
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  const recentAlerts = [
    {
      id: 1,
      message: "AI detected early signs of pneumonia in patient #4872 CT scan",
      time: "18 mins ago",
      type: "warning",
      aiRecommendation: "Recommended follow-up: Full thoracic CT scan",
    },
    {
      id: 2,
      message: "Abnormal heart rhythm detected in ICU patient #2103",
      time: "34 mins ago",
      type: "critical",
      aiRecommendation: "Cardiac specialist consultation recommended",
    },
    {
      id: 3,
      message:
        "Lab results for Sarah Johnson indicate possible medication interaction",
      time: "1 hour ago",
      type: "info",
      aiRecommendation: "Review current medication regimen",
    },
  ];

  const patientVitals = [
    {
      id: 1,
      name: "Heart Rate",
      value: "72 bpm",
      change: "+3",
      status: "normal",
    },
    {
      id: 2,
      name: "Blood Pressure",
      value: "120/80",
      change: "-5",
      status: "normal",
    },
    { id: 3, name: "SpO2", value: "98%", change: "+1", status: "normal" },
    {
      id: 4,
      name: "Temperature",
      value: "99.1°F",
      change: "+0.4",
      status: "elevated",
    },
  ];

  const aiDiagnosticData = [
    { month: "Jan", diagnoses: 120, accuracy: 94 },
    { month: "Feb", diagnoses: 145, accuracy: 95 },
    { month: "Mar", diagnoses: 162, accuracy: 96 },
    { month: "Apr", diagnoses: 178, accuracy: 97 },
    { month: "May", diagnoses: 195, accuracy: 98 },
  ];

  const stats = [
    {
      title: "In-Patients",
      value: "243",
      icon: <Users size={24} className="text-blue-500" />,
      change: "+12%",
      trend: "up",
      color: "blue",
    },
    {
      title: "Daily Admissions",
      value: "38",
      icon: <Clipboard size={24} className="text-indigo-500" />,
      change: "+5%",
      trend: "up",
      color: "indigo",
    },
    {
      title: "AI Diagnoses",
      value: "156",
      icon: <Brain size={24} className="text-purple-500" />,
      change: "+28%",
      trend: "up",
      color: "purple",
    },
    {
      title: "Critical Cases",
      value: "7",
      icon: <Activity size={24} className="text-rose-500" />,
      change: "-3%",
      trend: "down",
      color: "rose",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          activeSidebar ? "w-64" : "w-20"
        } bg-slate-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <div className="flex items-center">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg transform rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
            </div>
            {activeSidebar && (
              <span className="ml-3 text-xl font-bold text-white">
                MediSys AI
              </span>
            )}
          </div>
          <button
            onClick={() => setActiveSidebar(!activeSidebar)}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-700 hover:bg-slate-600"
          >
            <ChevronRight
              className={`h-5 w-5 text-white transform ${
                activeSidebar ? "rotate-180" : ""
              } transition-transform duration-300`}
            />
          </button>
        </div>

        <div className="py-4">
          <div className="px-4 mb-2">
            <button className="flex items-center w-full px-3 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              <div className="flex items-center">
                <Activity className="h-5 w-5" />
                {activeSidebar && (
                  <span className="ml-3 font-medium">Dashboard</span>
                )}
              </div>
            </button>
          </div>

          <div className="px-4 space-y-1">
            {[
              { name: "Patients", icon: <Users className="h-5 w-5" /> },
              { name: "Appointments", icon: <Calendar className="h-5 w-5" /> },
              { name: "AI Diagnostics", icon: <Brain className="h-5 w-5" /> },
              {
                name: "Medical Records",
                icon: <FileText className="h-5 w-5" />,
              },
              { name: "Analytics", icon: <BarChart2 className="h-5 w-5" /> },
              { name: "Hospital Staff", icon: <User className="h-5 w-5" /> },
            ].map((item) => (
              <button
                key={item.name}
                className="flex items-center w-full px-3 py-3 text-left text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
              >
                {item.icon}
                {activeSidebar && <span className="ml-3">{item.name}</span>}
              </button>
            ))}
          </div>

          <div className="mt-6 px-4">
            <div className="h-px bg-slate-700 my-4"></div>

            {[
              { name: "Settings", icon: <Settings className="h-5 w-5" /> },
              { name: "Help", icon: <HelpCircle className="h-5 w-5" /> },
            ].map((item) => (
              <button
                key={item.name}
                className="flex items-center w-full px-3 py-3 text-left text-gray-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-300"
              >
                {item.icon}
                {activeSidebar && <span className="ml-3">{item.name}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <span className="font-bold text-white">AR</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
              </div>
            </div>
            {activeSidebar && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white">
                  Dr. Alex Rivera
                </p>
                <p className="text-xs text-gray-400">Cardiology</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Hospital Dashboard
            </h2>
            <div className="ml-6 flex items-center space-x-4">
              <button className="flex items-center px-2 py-1 text-sm text-gray-600 hover:text-gray-900">
                <Monitor className="h-4 w-4 mr-1" />
                <span>Overview</span>
              </button>
              <button className="flex items-center px-2 py-1 text-sm text-gray-600 hover:text-gray-900">
                <Stethoscope className="h-4 w-4 mr-1" />
                <span>Medical</span>
              </button>
              <button className="flex items-center px-2 py-1 text-sm text-gray-600 hover:text-gray-900">
                <Cpu className="h-4 w-4 mr-1" />
                <span>AI Center</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </span>
              <input
                className="w-64 pl-10 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-300"
                type="text"
                placeholder="Search patients, records, or diagnoses..."
              />
            </div>

            <div className="flex items-center">
              <button className="relative p-2 text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <button className="relative p-2 text-gray-500 hover:text-gray-700">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full" />
              </button>

              <div className="ml-4 relative">
                <button className="flex items-center">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                      <span className="font-bold text-white">AR</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, Dr. Rivera
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Here's what's happening at Northside Hospital today
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Today</span>
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                    <Plus className="h-4 w-4 mr-2" />
                    <span>New Patient</span>
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            {stat.title}
                          </p>
                          <p className="mt-1 text-3xl font-bold text-gray-900">
                            {stat.value}
                          </p>
                        </div>
                        <div className={`bg-${stat.color}-50 rounded-full p-3`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <span
                          className={`text-sm font-medium flex items-center ${
                            stat.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {stat.trend === "up" ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          )}
                          {stat.change}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          vs last week
                        </span>
                      </div>
                    </div>
                    <div
                      className={`h-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
              {/* AI Diagnostics Overview */}
              <div className="lg:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-900">
                      AI Diagnostic Performance
                    </h2>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View Details
                    </button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4">
                    <div className="flex items-center mb-2">
                      <Brain className="h-5 w-5 text-indigo-500 mr-2" />
                      <h3 className="text-sm font-semibold text-gray-800">
                        Today's AI Summary
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2">
                        <p className="text-gray-500 text-xs">Diagnoses</p>
                        <p className="text-gray-900 text-lg font-bold">153</p>
                      </div>
                      <div className="p-2">
                        <p className="text-gray-500 text-xs">Accuracy</p>
                        <p className="text-gray-900 text-lg font-bold">98.7%</p>
                      </div>
                      <div className="p-2">
                        <p className="text-gray-500 text-xs">Assist Time</p>
                        <p className="text-gray-900 text-lg font-bold">1.2m</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-56 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-2">
                        AI Diagnostic Performance Chart
                      </div>
                      <div className="flex justify-center items-end h-32 space-x-4">
                        {aiDiagnosticData.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <div className="relative">
                              <div
                                className="w-8 bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t-lg"
                                style={{ height: `${item.diagnoses / 2}px` }}
                              ></div>
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
                                <span className="text-xs font-bold text-indigo-700">
                                  {item.accuracy}%
                                </span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1">
                              {item.month}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Monitor */}
              <div className="lg:col-span-4 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">
                    Patient Monitor
                  </h2>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">
                      Cardiac
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                      Respiratory
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                      Neurology
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="Patient"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-gray-900 font-medium">
                        Michael Chen, 58
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Room 302 • Admitted: March 15, 2025
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        High Priority
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {patientVitals.map((vital) => (
                      <div key={vital.id} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-gray-500">{vital.name}</p>
                          <span
                            className={`text-xs ${
                              vital.status === "normal"
                                ? "text-green-500"
                                : "text-orange-500"
                            }`}
                          >
                            {vital.change}
                          </span>
                        </div>
                        <p className="text-gray-900 text-lg font-bold mt-1">
                          {vital.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4">
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-indigo-500 mr-2" />
                      <h3 className="text-sm font-semibold text-gray-800">
                        AI-Assisted Diagnosis
                      </h3>
                      <span className="ml-auto text-xs font-medium text-purple-500">
                        Analyzing...
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">
                          Diagnostic progress
                        </span>
                        <span className="text-xs text-gray-700">67%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1.5 rounded-full"
                          style={{ width: "67%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      <span>
                        Preliminary finding: Possible cardiac arrhythmia
                        detected
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300">
                      <Eye className="h-4 w-4 mr-2" />
                      <span>View Full Record</span>
                    </button>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        <Clipboard className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        <MessageSquare className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-6">
              {/* Today's Appointments */}
              <div className="lg:col-span-4 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-900">
                      Today's Appointments
                    </h2>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View All
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                      >
                        <img
                          src={appointment.img}
                          alt={appointment.patientName}
                          className="w-10 h-10 rounded-full"
                        />

                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-gray-900 font-medium">
                              {appointment.patientName}
                            </h3>
                            <span className="text-gray-500 text-sm">
                              {appointment.time}
                            </span>
                          </div>
                          <div className="flex justify-between mt-1">
                            <p className="text-sm text-gray-600">
                              {appointment.condition}
                            </p>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${
                                appointment.priority === "High"
                                  ? "bg-orange-100 text-orange-800"
                                  : appointment.priority === "Urgent"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {appointment.priority}
                            </span>
                          </div>
                        </div>

                        <div className="ml-4 flex items-center">
                          {appointment.aiStatus === "Analyzing" && (
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <Zap className="h-4 w-4 text-purple-600" />
                              </div>
                              <span className="text-xs text-purple-600 mt-1">
                                Analyzing
                              </span>
                            </div>
                          )}
                          {appointment.aiStatus === "Completed" && (
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                              <span className="text-xs text-green-600 mt-1">
                                {appointment.aiConfidence}%
                              </span>
                            </div>
                          )}
                          {appointment.aiStatus === "Reviewed" && (
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <Eye className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-xs text-blue-600 mt-1">
                                {appointment.aiConfidence}%
                              </span>
                            </div>
                          )}
                          {appointment.aiStatus === "Pending" && (
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <Clock className="h-4 w-4 text-gray-600" />
                              </div>
                              <span className="text-xs text-gray-600 mt-1">
                                Pending
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Insights & Alerts */}
              <div className="lg:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-900">
                      AI Insights & Alerts
                    </h2>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View All
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">AI Security Status</h3>
                        <p className="text-sm text-blue-100">
                          All systems operational
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Recent Alerts
                  </h3>

                  <div className="space-y-3">
                    {recentAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-3 rounded-lg border-l-4 
                        ${
                          alert.type === "warning"
                            ? "bg-yellow-50 border-yellow-400"
                            : alert.type === "critical"
                            ? "bg-red-50 border-red-400"
                            : "bg-blue-50 border-blue-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {alert.type === "warning" && (
                              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                            )}
                            {alert.type === "critical" && (
                              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                            )}
                            {alert.type === "info" && (
                              <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                            )}
                            <span className="text-sm font-medium text-gray-900">
                              {alert.message}
                            </span>
                          </div>
                          <button className="text-gray-400 hover:text-gray-500">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-2 pl-7">
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500">
                              {alert.time}
                            </p>
                          </div>
                          <div className="mt-1 flex items-center">
                            <Brain className="h-3 w-3 text-indigo-500 mr-1" />
                            <p className="text-xs text-indigo-600">
                              {alert.aiRecommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      AI Learning Status
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">
                          Model accuracy improvement
                        </span>
                        <span className="text-xs font-medium text-green-600">
                          +2.3%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-1.5 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>New data analyzed: 843 patients</span>
                        <span>Last update: 2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Features and AI Research */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">
                    Upcoming AI Features
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Predictive Patient Monitoring
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Alert system for potential complications before they
                        occur
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Multi-modal Diagnostic System
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Combines imaging, lab results, and patient history for
                        improved accuracy
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        In Development
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Treatment Optimization AI
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Personalized treatment recommendations based on patient
                        data
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Beta Testing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">
                    AI Research Insights
                  </h2>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">
                          Cardiac Anomaly Detection
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Research Progress: 78%
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-white bg-opacity-60 rounded-full h-1.5 mb-1">
                        <div
                          className="bg-gradient-to-r from-indigo-600 to-blue-600 h-1.5 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Our AI model has shown a 23% improvement in early
                        detection of cardiac anomalies, potentially saving
                        critical response time.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">
                          Neurological Pattern Recognition
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Research Progress: 62%
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-white bg-opacity-60 rounded-full h-1.5 mb-1">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-1.5 rounded-full"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Advanced pattern recognition in neuroimaging has shown
                        promising results in early detection of degenerative
                        conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <footer className="bg-white border-t border-gray-200 py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" />
                </div>
              </div>
              <span className="ml-2 text-sm text-gray-600">
                MediSys AI • Enhancing Healthcare with Intelligence
              </span>
            </div>
            <div className="text-sm text-gray-500">
              <span>© 2025 MediSys AI. All rights reserved.</span>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default HealthcareDashboard;
