import React, { useState } from "react";
import {
  BarChart,
  Activity,
  Layers,
  Users,
  Calendar,
  BookOpen,
  Award,
  TrendingUp,
  Bell,
  Search,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronDown,
  Brain,
  Zap,
  LineChart,
  PieChart,
  Book,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Star,
  CheckCircle,
  Info,
  AlertCircle,
  FileText,
  Clock,
  User,
  Map,
  BarChart2,
} from "lucide-react";

const SchoolManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedView, setSelectedView] = useState("overview");

  // Sample student performance data
  const performanceData = [
    { subject: "Mathematics", score: 78, average: 72, trend: "up" },
    { subject: "Science", score: 82, average: 75, trend: "up" },
    { subject: "Literature", score: 65, average: 68, trend: "down" },
    { subject: "History", score: 90, average: 70, trend: "up" },
    { subject: "Computer Science", score: 85, average: 65, trend: "up" },
  ];

  // Sample AI insights with severity levels
  const aiInsights = [
    {
      message:
        "Sarah's problem-solving abilities in Mathematics show exceptional pattern recognition",
      severity: "positive",
      tag: "Strength",
    },
    {
      message:
        "Literature comprehension is 15% below potential - consider additional reading comprehension exercises",
      severity: "warning",
      tag: "Action Required",
    },
    {
      message:
        "History essays demonstrate strong analytical thinking and source evaluation",
      severity: "positive",
      tag: "Strength",
    },
    {
      message:
        "Science lab reports lack detailed methodology sections - specific improvement plan generated",
      severity: "alert",
      tag: "Critical Gap",
    },
  ];

  // Sample upcoming events
  const upcomingEvents = [
    { title: "Mathematics Final Exam", date: "March 25", type: "exam" },
    { title: "Science Project Deadline", date: "March 28", type: "assignment" },
    { title: "Literature Essay Review", date: "April 2", type: "meeting" },
  ];

  // AI recommendation metrics
  const recommendationMetrics = [
    { label: "Accuracy Rate", value: "94%" },
    { label: "Implementation Success", value: "87%" },
    { label: "Student Satisfaction", value: "92%" },
  ];

  // Sample recent activities
  const recentActivities = [
    {
      activity: "Submitted Mathematics Assignment",
      score: "98/100",
      time: "2 hours ago",
      highlight: true,
    },
    {
      activity: "Completed Science Quiz",
      score: "85/100",
      time: "Yesterday",
      highlight: false,
    },
    {
      activity: "Participated in History Discussion",
      score: "A+",
      time: "2 days ago",
      highlight: false,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white">
        <div className="p-5 flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
            <BookOpen className="text-white" size={20} />
          </div>
          <div>
            <h1 className="font-bold text-xl">
              EduSync<span className="text-indigo-300">AI</span>
            </h1>
            <p className="text-xs text-indigo-200">
              Intelligent School Management
            </p>
          </div>
        </div>

        <div className="px-3 mt-8">
          <SidebarItem
            icon={<Layers size={18} />}
            title="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <SidebarItem
            icon={<Users size={18} />}
            title="Students"
            active={activeTab === "students"}
            onClick={() => setActiveTab("students")}
          />
          <SidebarItem
            icon={<Brain size={18} />}
            title="AI Insights"
            active={activeTab === "ai-insights"}
            onClick={() => setActiveTab("ai-insights")}
            highlight="New"
          />
          <SidebarItem
            icon={<Calendar size={18} />}
            title="Schedule"
            active={activeTab === "schedule"}
            onClick={() => setActiveTab("schedule")}
          />
          <SidebarItem
            icon={<Book size={18} />}
            title="Courses"
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
          />
          <SidebarItem
            icon={<BarChart size={18} />}
            title="Performance Analytics"
            active={activeTab === "performance"}
            onClick={() => setActiveTab("performance")}
          />
          <SidebarItem
            icon={<Award size={18} />}
            title="Achievements"
            active={activeTab === "achievements"}
            onClick={() => setActiveTab("achievements")}
            alert="3"
          />

          <div className="mt-2 mb-2">
            <p className="text-xs uppercase text-indigo-300 font-semibold px-4 mt-6 mb-2">
              Resources
            </p>
          </div>

          <SidebarItem
            icon={<FileText size={18} />}
            title="Learning Materials"
            active={activeTab === "materials"}
            onClick={() => setActiveTab("materials")}
          />

          <SidebarItem
            icon={<Map size={18} />}
            title="Learning Path"
            active={activeTab === "path"}
            onClick={() => setActiveTab("path")}
            highlight="AI"
          />

          <div className="border-t border-indigo-700/50 my-4"></div>

          <SidebarItem
            icon={<Settings size={18} />}
            title="Settings"
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          />
          <SidebarItem
            icon={<HelpCircle size={18} />}
            title="Help Center"
            active={activeTab === "help"}
            onClick={() => setActiveTab("help")}
          />

          <div className="mt-12 mx-2">
            <div className="bg-indigo-800/50 backdrop-blur-sm rounded-xl p-4 border border-indigo-700/50">
              <div className="flex items-center">
                <Zap size={16} className="text-yellow-400" />
                <span className="text-sm font-medium ml-2">
                  AI Tutor Available
                </span>
              </div>
              <p className="text-xs text-indigo-200 mt-2">
                Get personalized help with your coursework
              </p>
              <button className="mt-3 w-full py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xs font-medium transition-all">
                Start Session
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-0 outline-none ml-2 w-full text-sm"
                />
              </div>

              <div className="ml-6 flex space-x-1">
                <ViewTab
                  title="Overview"
                  active={selectedView === "overview"}
                  onClick={() => setSelectedView("overview")}
                />
                <ViewTab
                  title="Academic"
                  active={selectedView === "academic"}
                  onClick={() => setSelectedView("academic")}
                />
                <ViewTab
                  title="Extracurricular"
                  active={selectedView === "extracurricular"}
                  onClick={() => setSelectedView("extracurricular")}
                />
                <ViewTab
                  title="AI Reports"
                  active={selectedView === "ai-reports"}
                  onClick={() => setSelectedView("ai-reports")}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all">
                <MessageSquare size={20} className="text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 ml-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  SJ
                </div>
                <div className="text-sm">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-gray-500 text-xs">Student • Grade 10-A</p>
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Student Dashboard
                </h2>
                <p className="text-gray-500">
                  Welcome back, Sarah! Here's your learning progress
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-lg flex items-center text-sm font-medium">
                  <Calendar size={16} className="mr-1" />
                  Academic Year 2024-2025
                </div>
                <div className="bg-green-100 text-green-700 py-1 px-3 rounded-lg flex items-center text-sm font-medium">
                  <LineChart size={16} className="mr-1" />
                  3.8 GPA
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatCard
                title="Overall GPA"
                value="3.8"
                change="+0.2"
                icon={<Award className="text-indigo-500" />}
                positive
                detail="Top 15% of class"
              />
              <StatCard
                title="Attendance Rate"
                value="95%"
                change="+2%"
                icon={<CheckCircle className="text-green-500" />}
                positive
                detail="5 days absent this semester"
              />
              <StatCard
                title="Course Completion"
                value="78%"
                change="+5%"
                icon={<PieChart className="text-blue-500" />}
                positive
                detail="On track for graduation"
              />
              <StatCard
                title="Class Rank"
                value="4th"
                change="+2"
                icon={<TrendingUp className="text-purple-500" />}
                positive
                detail="Out of 32 students"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Chart */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Academic Performance
                    </h3>
                    <p className="text-sm text-gray-500">
                      Comparing your scores with class averages
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="inline-block h-3 w-3 bg-indigo-500 rounded-full"></span>
                      <span className="text-sm text-gray-500">Your Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block h-3 w-3 bg-gray-300 rounded-full"></span>
                      <span className="text-sm text-gray-500">
                        Class Average
                      </span>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                      <MoreHorizontal size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="h-64">
                  {performanceData.map((subject, index) => (
                    <div key={index} className="mb-5">
                      <div className="flex justify-between text-sm mb-2">
                        <div className="flex items-center">
                          <span className="font-medium">{subject.subject}</span>
                          {subject.trend === "up" ? (
                            <ArrowUp
                              size={14}
                              className="text-green-500 ml-2"
                            />
                          ) : (
                            <ArrowDown
                              size={14}
                              className="text-red-500 ml-2"
                            />
                          )}
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold">{subject.score}/100</span>
                          <span className="text-xs text-gray-500 ml-2">
                            vs {subject.average} avg
                          </span>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                        <div className="relative h-full w-full">
                          <div
                            className="absolute h-full bg-gray-300 rounded-full"
                            style={{ width: `${subject.average}%` }}
                          ></div>
                          <div
                            className="absolute h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                            style={{ width: `${subject.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                    See detailed analysis
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-gray-800 flex items-center">
                      AI-Powered Insights
                      <span className="ml-2 text-xs font-normal bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                        Beta
                      </span>
                    </h3>
                    <p className="text-sm text-gray-500">
                      Personalized recommendations
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-full">
                    <Brain size={20} className="text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        insight.severity === "positive"
                          ? "border-green-100 bg-green-50"
                          : insight.severity === "warning"
                          ? "border-yellow-100 bg-yellow-50"
                          : "border-red-100 bg-red-50"
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            insight.severity === "positive"
                              ? "bg-green-100"
                              : insight.severity === "warning"
                              ? "bg-yellow-100"
                              : "bg-red-100"
                          }`}
                        >
                          {insight.severity === "positive" ? (
                            <CheckCircle size={16} className="text-green-600" />
                          ) : insight.severity === "warning" ? (
                            <Info size={16} className="text-yellow-600" />
                          ) : (
                            <AlertCircle size={16} className="text-red-600" />
                          )}
                        </div>
                        <div className="ml-3">
                          <div className="flex items-center">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded ${
                                insight.severity === "positive"
                                  ? "bg-green-100 text-green-700"
                                  : insight.severity === "warning"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {insight.tag}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {insight.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="mb-3 flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">
                      AI RECOMMENDATION METRICS
                    </span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {recommendationMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-2 rounded-lg text-center"
                      >
                        <div className="text-gray-800 font-bold">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center">
                    <Brain size={16} className="mr-2" />
                    Get Full AI Assessment
                  </button>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-800">
                      Recent Activities
                    </h3>
                    <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                      <Clock size={16} className="mr-1" />
                      This Week
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all ${
                          activity.highlight
                            ? "border border-indigo-100 bg-indigo-50"
                            : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              activity.highlight
                                ? "bg-indigo-100"
                                : "bg-gray-100"
                            }`}
                          >
                            <Activity
                              size={18}
                              className={
                                activity.highlight
                                  ? "text-indigo-600"
                                  : "text-gray-600"
                              }
                            />
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">
                              {activity.activity}
                            </span>
                            <p className="text-xs text-gray-500">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`px-2 py-1 rounded-lg text-sm font-medium ${
                              activity.highlight
                                ? "bg-indigo-100 text-indigo-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {activity.score}
                          </span>
                          <button className="ml-4 text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 w-full text-center text-indigo-600 font-medium text-sm py-2 hover:text-indigo-800 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-all">
                    View All Activities
                  </button>
                </div>
              </div>

              {/* Calendar/Events */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-800">Upcoming Events</h3>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Calendar size={18} className="text-gray-500" />
                  </button>
                </div>

                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-indigo-50">
                          {event.type === "exam" ? (
                            <FileText size={18} className="text-indigo-600" />
                          ) : event.type === "assignment" ? (
                            <BookOpen size={18} className="text-green-600" />
                          ) : (
                            <User size={18} className="text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1 ml-3">
                          <p className="font-medium text-gray-800">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Due {event.date}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              event.type === "exam"
                                ? "bg-indigo-100 text-indigo-700"
                                : event.type === "assignment"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {event.type === "exam"
                              ? "Exam"
                              : event.type === "assignment"
                              ? "Assignment"
                              : "Meeting"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center border-t border-gray-100 pt-4">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center mx-auto">
                    <Calendar size={16} className="mr-1" />
                    View Full Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const SidebarItem = ({ icon, title, active, onClick, highlight, alert }) => {
  return (
    <button
      className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg mb-1 ${
        active
          ? "bg-indigo-700/50 text-white"
          : "text-indigo-200 hover:bg-indigo-700/30"
      }`}
      onClick={onClick}
    >
      <span className={`${active ? "text-white" : "text-indigo-300"}`}>
        {icon}
      </span>
      <span className="text-sm font-medium flex-1">{title}</span>
      {highlight && (
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full">
          {highlight}
        </span>
      )}
      {alert && (
        <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none bg-red-500 text-white rounded-full">
          {alert}
        </span>
      )}
    </button>
  );
};

const ViewTab = ({ title, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "text-indigo-700 border-b-2 border-indigo-500"
          : "text-gray-500 hover:text-gray-700"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const StatCard = ({ title, value, change, icon, positive, detail }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-indigo-200 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h4 className="text-2xl font-bold text-gray-800">{value}</h4>
        </div>
        <div className="p-2 rounded-lg bg-indigo-100/70">{icon}</div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div
          className={`text-sm ${
            positive ? "text-green-500" : "text-red-500"
          } flex items-center`}
        >
          {positive ? (
            <ArrowUp size={12} className="mr-1" />
          ) : (
            <ArrowDown size={12} className="mr-1" />
          )}
          <span>{change}</span>
        </div>
        <span className="text-xs text-gray-500">{detail}</span>
      </div>
    </div>
  );
};

export default SchoolManagementDashboard;
