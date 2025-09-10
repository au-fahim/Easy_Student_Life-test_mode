// Enhanced Smart Student Life v3 Application with all bug fixes and enhancements
let appData = {
  user: {
    id: "1",
    name: "Ashraf Fahim",
    email: "ashraf@student.edu",
    semester: "Fall 2025",
    year: "3rd Year",
    major: "Computer Science"
  },
  classes: [
    {
      id: "1",
      subject: "Data Structures",
      instructor: "Dr. Smith",
      time: "09:00",
      days: ["Monday", "Wednesday"],
      duration: "1.5",
      location: "Room 201",
      color: "#3b82f6",
      code: "CS 301",
      status: "Upcoming",
      notes: "Bring calculator for complexity calculations",
      assignment: "Implement Binary Search Tree with AVL balancing",
      createdAt: "2025-09-01T10:00:00Z"
    },
    {
      id: "2",
      subject: "Database Systems",
      instructor: "Prof. Johnson",
      time: "14:00",
      days: ["Tuesday", "Thursday"],
      duration: "2",
      location: "Lab 105",
      color: "#22c55e",
      code: "CS 401",
      status: "Upcoming",
      notes: "Lab access required",
      assignment: "Design normalized database schema for library system",
      createdAt: "2025-09-02T10:00:00Z"
    },
    {
      id: "3",
      subject: "Software Engineering",
      instructor: "Dr. Lee",
      time: "11:00",
      days: ["Monday", "Wednesday", "Friday"],
      duration: "1.5",
      location: "Room 301",
      color: "#f59e0b",
      code: "CS 402",
      status: "Completed",
      notes: "Final project presentation completed",
      assignment: "",
      createdAt: "2025-08-25T10:00:00Z"
    },
    {
      id: "4",
      subject: "Machine Learning",
      instructor: "Prof. Chen",
      time: "16:00",
      days: ["Saturday", "Sunday", "Tuesday"],
      duration: "2",
      location: "Room 401",
      color: "#8b5cf6",
      code: "CS 501",
      status: "Upcoming",
      notes: "Online format due to lab maintenance",
      assignment: "Implement neural network from scratch",
      createdAt: "2025-09-03T10:00:00Z"
    }
  ],
  budget: {
    transactions: [
      {id: "1", type: "income", amount: 15000, category: "Scholarship", description: "Monthly scholarship", date: "2025-09-01"},
      {id: "2", type: "expense", amount: 3000, category: "Food", description: "Groceries and meals", date: "2025-09-05"},
      {id: "3", type: "expense", amount: 1500, category: "Transport", description: "Monthly bus pass", date: "2025-09-03"},
      {id: "4", type: "expense", amount: 2500, category: "Books", description: "Textbooks for semester", date: "2025-09-02"},
      {id: "5", type: "income", amount: 8000, category: "Job", description: "Part-time tutoring", date: "2025-09-08"},
      {id: "6", type: "expense", amount: 2000, category: "Entertainment", description: "Movie and dining", date: "2025-09-07"},
      {id: "7", type: "expense", amount: 800, category: "Food", description: "Lunch at cafeteria", date: "2025-09-06"},
      {id: "8", type: "income", amount: 3000, category: "Transfer from Savings", description: "Transfer from Savings: Emergency Fund", date: "2025-08-15"},
      {id: "9", type: "expense", amount: 5000, category: "Transfer to Savings", description: "Transfer to Savings: New Laptop", date: "2025-08-20"}
    ],
    savingsGoals: [
      {
        id: "1",
        title: "New Laptop",
        target: 50000,
        current: 18000,
        deadline: "2025-12-31",
        category: "Education",
        description: "MacBook Pro for development"
      },
      {
        id: "2",
        title: "Emergency Fund",
        target: 30000,
        current: 12000,
        deadline: "2026-06-30",
        category: "Security",
        description: "6 months emergency fund"
      },
      {
        id: "3",
        title: "Summer Trip",
        target: 25000,
        current: 8000,
        deadline: "2026-05-01",
        category: "Travel",
        description: "Europe backpacking trip"
      }
    ]
  },
  studyTasks: [
    {
      id: "1",
      title: "Complete Data Structures Assignment",
      subject: "CS 301",
      priority: "High",
      deadline: "2025-09-15",
      estimatedTime: 180,
      completed: false,
      progress: 60,
      status: "In Progress",
      sourceType: "manual",
      subTasks: [
        {id: "1a", title: "Implement Binary Tree", completed: true},
        {id: "1b", title: "Write test cases", completed: true},
        {id: "1c", title: "Complete documentation", completed: false},
        {id: "1d", title: "Review and submit", completed: false}
      ]
    },
    {
      id: "2",
      title: "Read Database Design Chapter 5",
      subject: "CS 401",
      priority: "Medium",
      deadline: "2025-09-12",
      estimatedTime: 90,
      completed: true,
      progress: 100,
      status: "Completed",
      sourceType: "manual",
      subTasks: [
        {id: "2a", title: "Read chapter 5", completed: true},
        {id: "2b", title: "Take notes", completed: true},
        {id: "2c", title: "Complete exercises", completed: true}
      ]
    },
    {
      id: "3",
      title: "Implement Binary Search Tree with AVL balancing",
      subject: "CS 301",
      priority: "High",
      deadline: "2025-09-20",
      estimatedTime: 240,
      completed: false,
      progress: 30,
      status: "In Progress",
      sourceType: "assignment",
      sourceId: "1",
      subTasks: [
        {id: "3a", title: "Research AVL algorithms", completed: true},
        {id: "3b", title: "Implement basic BST", completed: false},
        {id: "3c", title: "Add AVL balancing", completed: false},
        {id: "3d", title: "Test and debug", completed: false}
      ]
    }
  ],
  quizzes: [
    {
      id: "1",
      title: "Binary Trees Fundamentals",
      subject: "Data Structures",
      description: "Test your knowledge of binary tree concepts",
      difficulty: "Medium",
      questions: [
        {
          id: "1",
          type: "mcq",
          question: "What is the maximum number of nodes at level k in a binary tree?",
          options: ["k", "2^k", "2^(k-1)", "k^2"],
          correct: 2,
          explanation: "At level k (0-indexed), we can have maximum 2^k nodes."
        },
        {
          id: "2",
          type: "mcq",
          question: "Which traversal visits the root node first?",
          options: ["Inorder", "Preorder", "Postorder", "Level order"],
          correct: 1,
          explanation: "Preorder traversal visits root, then left subtree, then right subtree."
        },
        {
          id: "3",
          type: "true_false",
          question: "A binary tree with n nodes always has height log(n).",
          correct: false,
          explanation: "This is only true for balanced binary trees. Skewed trees can have height n-1."
        },
        {
          id: "4",
          type: "short_answer",
          question: "What is the time complexity of inserting a node in a balanced BST?",
          correct: "O(log n)",
          explanation: "In a balanced BST, insertion takes O(log n) time due to the height being logarithmic."
        }
      ],
      timeLimit: 600,
      attempts: [
        {
          id: "a1",
          date: "2025-09-08",
          score: 85,
          timeSpent: 480,
          answers: [2, 1, false, "O(log n)"],
          correct: [true, true, true, true]
        }
      ]
    },
    {
      id: "2",
      title: "Database Normalization",
      subject: "Database Systems",
      description: "Understanding database normalization forms",
      difficulty: "Hard",
      questions: [
        {
          id: "1",
          type: "mcq",
          question: "Which normal form eliminates partial dependencies?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          correct: 1,
          explanation: "Second Normal Form (2NF) eliminates partial dependencies."
        },
        {
          id: "2",
          type: "true_false",
          question: "BCNF is always better than 3NF.",
          correct: true,
          explanation: "BCNF is a stricter form that eliminates all redundancies that 3NF might miss."
        },
        {
          id: "3",
          type: "short_answer",
          question: "What does ACID stand for in database transactions?",
          correct: "Atomicity, Consistency, Isolation, Durability",
          explanation: "ACID are the four properties that guarantee database transactions are processed reliably."
        }
      ],
      timeLimit: 300,
      attempts: []
    }
  ],
  notifications: [
    {
      id: "1",
      title: "Assignment Due Soon",
      message: "Data Structures assignment due in 5 days",
      type: "study",
      read: false,
      timestamp: "2025-09-10T14:00:00Z"
    },
    {
      id: "2",
      title: "Class Today",
      message: "Machine Learning class at 4:00 PM in Room 401",
      type: "class",
      read: false,
      timestamp: "2025-09-10T15:30:00Z"
    },
    {
      id: "3",
      title: "Savings Goal Progress",
      message: "You're 36% towards your New Laptop goal!",
      type: "budget",
      read: false,
      timestamp: "2025-09-09T18:30:00Z"
    }
  ]
};

// Global variables
let currentSection = 'dashboard';
let pomodoroTimer = null;
let pomodoroMinutes = 25;
let pomodoroSeconds = 0;
let isPomodoroRunning = false;
let isBreakTime = false;
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizAnswers = [];
let quizTimer = null;
let quizTimeRemaining = 0;
let expenseChart = null;
let editingItem = null;
let selectedTasks = [];
let currentTimerTask = null;
let deleteConfirmCallback = null;
let currentEditingQuestions = [];
let deleteDayCallback = null;
let savingsActionCallback = null;
let currentGoal = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  loadDataFromStorage();
  initializeEventListeners();
  initializeDashboard();
  updateNotificationBadge();
  showSection('dashboard');
});

// Data persistence
function saveDataToStorage() {
  try {
    localStorage.setItem('smartStudentLifeV3Data', JSON.stringify(appData));
  } catch (error) {
    console.error('Error saving data:', error);
    showToast('Failed to save data', 'error');
  }
}

function loadDataFromStorage() {
  try {
    const savedData = localStorage.getItem('smartStudentLifeV3Data');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      appData = { ...appData, ...parsedData };
    }
  } catch (error) {
    console.error('Error loading data:', error);
    showToast('Failed to load saved data', 'error');
  }
}

// Event listeners
function initializeEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = e.currentTarget.getAttribute('data-section');
      showSection(section);
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('active');
    });
  }

  // User name editing
  window.editUserName = function() {
    const modal = document.getElementById('editNameModal');
    const nameInput = document.getElementById('nameInput');
    nameInput.value = appData.user.name;
    modal.classList.remove('hidden');
  };

  // Notification panel
  const notificationBtn = document.getElementById('notificationBtn');
  if (notificationBtn) {
    notificationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('notificationPanel').classList.toggle('active');
    });
  }

  const closeNotifications = document.getElementById('closeNotifications');
  if (closeNotifications) {
    closeNotifications.addEventListener('click', () => {
      document.getElementById('notificationPanel').classList.remove('active');
    });
  }

  // Setup all components
  setupModalControls();
  setupFormHandlers();
  setupPomodoroTimer();
  setupFilterButtons();
  setupQuizControls();
  setupTaskSelection();
  setupTransactionControls();
  setupClassStatusTabs();

  // Close modals when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target.id);
    }
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target) &&
        sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });

  // Global click handlers for savings goal actions
  document.addEventListener('click', (e) => {
    if (e.target.id === 'depositToGoal') {
      depositToGoal();
    } else if (e.target.id === 'withdrawFromGoal') {
      withdrawFromGoal();
    }
  });
}

// Navigation
function showSection(sectionName) {
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Update active section
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update page title
  const titles = {
    dashboard: 'Dashboard',
    schedule: 'Class Schedule Management', 
    budget: 'Budget Tracker',
    study: 'Study Planner',
    quiz: 'Quiz Center'
  };
  const pageTitle = document.querySelector('.page-title');
  if (pageTitle) {
    pageTitle.textContent = titles[sectionName] || 'Dashboard';
  }

  currentSection = sectionName;

  // Initialize section-specific content
  switch(sectionName) {
    case 'dashboard':
      initializeDashboard();
      break;
    case 'schedule':
      renderSchedule();
      break;
    case 'budget':
      renderBudget();
      break;
    case 'study':
      renderStudyPlanner();
      break;
    case 'quiz':
      renderQuizSection();
      break;
  }

  // Close mobile sidebar
  if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.remove('active');
    }
  }
}

// Dashboard - Fixed with all required calculations
function initializeDashboard() {
  updateWelcomeMessage();
  updateDashboardStats();
  renderTodayClasses();
  renderUpcomingTasks();
}

function updateWelcomeMessage() {
  const hour = new Date().getHours();
  let greeting = 'Good morning';
  let icon = '🌅';
  
  if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon';
    icon = '☀️';
  } else if (hour >= 17) {
    greeting = 'Good evening';
    icon = '🌙';
  }
  
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage) {
    welcomeMessage.textContent = `${greeting}, ${appData.user.name}! ${icon}`;
  }
  
  // Update user name in header
  const userName = document.getElementById('userName');
  if (userName) {
    userName.textContent = appData.user.name;
  }
}

function updateDashboardStats() {
  // Fixed: Count only today's classes with correct day filtering
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayClasses = appData.classes.filter(cls => cls.days.includes(today) && cls.status === 'Upcoming');
  const todayClassesCount = document.getElementById('todayClassesCount');
  if (todayClassesCount) {
    todayClassesCount.textContent = todayClasses.length;
  }

  // Fixed: Count only incomplete (pending) tasks
  const pendingTasks = appData.studyTasks.filter(task => !task.completed && task.status !== 'Completed');
  const pendingTasksCount = document.getElementById('pendingTasksCount');
  if (pendingTasksCount) {
    pendingTasksCount.textContent = pendingTasks.length;
  }

  // Fixed: Available savings display - show current month total from all savings goals
  const availableSavings = appData.budget.savingsGoals.reduce((sum, goal) => sum + goal.current, 0);
  const availableSavingsEl = document.getElementById('availableSavings');
  if (availableSavingsEl) {
    availableSavingsEl.textContent = `৳${availableSavings.toLocaleString()}`;
  }

  // Update other dashboard cards with real-time calculations
  const totalClassesEl = document.getElementById('totalClasses');
  if (totalClassesEl) {
    totalClassesEl.textContent = appData.classes.length;
  }
  
  // Current balance calculation
  const totalIncome = appData.budget.transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = appData.budget.transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  const currentBalance = totalIncome - totalExpenses;
  
  const currentBalanceEl = document.getElementById('currentBalance');
  if (currentBalanceEl) {
    currentBalanceEl.textContent = `৳${currentBalance.toLocaleString()}`;
  }
  
  const totalStudyTasksEl = document.getElementById('totalStudyTasks');
  if (totalStudyTasksEl) {
    totalStudyTasksEl.textContent = appData.studyTasks.length;
  }
  
  // Calculate average quiz score
  const completedQuizzes = appData.quizzes.filter(q => q.attempts && q.attempts.length > 0);
  const avgScore = completedQuizzes.length > 0 ? 
    completedQuizzes.reduce((sum, q) => {
      const latestAttempt = q.attempts[q.attempts.length - 1];
      return sum + (latestAttempt?.score || 0);
    }, 0) / completedQuizzes.length : 0;
  const avgQuizScoreEl = document.getElementById('avgQuizScore');
  if (avgQuizScoreEl) {
    avgQuizScoreEl.textContent = `${Math.round(avgScore)}%`;
  }
}

function renderTodayClasses() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayClasses = appData.classes.filter(cls => 
    cls.days.includes(today) && cls.status === 'Upcoming'
  );
  
  const container = document.getElementById('todayClassesList');
  if (!container) return;
  
  if (todayClasses.length === 0) {
    container.innerHTML = '<div class="class-item"><div class="class-info"><p>No classes scheduled for today</p></div></div>';
    return;
  }

  container.innerHTML = todayClasses.map(cls => `
    <div class="class-item" style="border-left-color: ${cls.color}">
      <div class="class-info">
        <h4>${cls.subject} ${cls.code ? `(${cls.code})` : ''}</h4>
        <p>${cls.instructor} • ${cls.location}</p>
        ${cls.notes ? `<p><small>${cls.notes}</small></p>` : ''}
      </div>
      <div class="class-time">${formatTime(cls.time)}</div>
    </div>
  `).join('');
}

function renderUpcomingTasks() {
  const upcomingTasks = appData.studyTasks
    .filter(task => !task.completed && task.status !== 'Completed')
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 4);
  
  const container = document.getElementById('upcomingTasksList');
  if (!container) return;
  
  if (upcomingTasks.length === 0) {
    container.innerHTML = '<div class="task-item"><div class="task-info"><p>No upcoming tasks</p></div></div>';
    return;
  }

  container.innerHTML = upcomingTasks.map(task => `
    <div class="task-item">
      <div class="task-info">
        <h4>${task.title}</h4>
        <p>${task.subject} • Due: ${formatDate(task.deadline)}</p>
      </div>
      <div class="task-priority ${task.priority.toLowerCase()}">${task.priority}</div>
    </div>
  `).join('');
}

// Class Status Tabs Setup
function setupClassStatusTabs() {
  document.querySelectorAll('.status-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.status-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSchedule(tab.dataset.status);
    });
  });
}

// Enhanced Schedule Section with all fixes
function renderSchedule(statusFilter = 'all') {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const container = document.getElementById('scheduleGrid');
  if (!container) return;
  
  let filteredClasses = [...appData.classes];
  if (statusFilter !== 'all') {
    filteredClasses = appData.classes.filter(cls => cls.status.toLowerCase() === statusFilter.toLowerCase());
  }
  
  container.innerHTML = days.map(day => {
    const dayClasses = filteredClasses.filter(cls => cls.days.includes(day));
    
    return `
      <div class="schedule-day">
        <div class="day-header">${day}</div>
        <div class="day-classes">
          ${dayClasses.length === 0 ? '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No classes</p>' : 
            dayClasses.map(cls => `
              <div class="schedule-class">
                <div class="class-color" style="background-color: ${cls.color}"></div>
                <div class="class-details">
                  <h4>${cls.subject} ${cls.code ? `(${cls.code})` : ''}</h4>
                  <p>${formatTime(cls.time)} - ${formatTime(addMinutes(cls.time, parseFloat(cls.duration) * 60))}</p>
                  <p>${cls.instructor} • ${cls.location}</p>
                  ${cls.notes ? `<p><small><strong>Notes:</strong> ${cls.notes}</small></p>` : ''}
                  ${cls.assignment ? `<p><small><strong>Assignment:</strong> ${cls.assignment}</small></p>` : ''}
                  <div class="class-status-badge ${cls.status.toLowerCase()}">${cls.status}</div>
                  ${cls.days.length > 1 ? `<button class="day-remove-btn" onclick="removeDayFromClass('${cls.id}', '${day}')" title="Remove ${day}">Remove ${day}</button>` : ''}
                </div>
                <div class="class-actions">
                  <button onclick="editClass('${cls.id}')" title="Edit Class">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button onclick="deleteClass('${cls.id}')" class="delete-btn" title="Delete Class">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>
    `;
  }).join('');
}

// CRITICAL FIX: Individual day deletion - when user deletes Saturday from [Sat, Sun, Tue], only Saturday is removed
window.removeDayFromClass = function(classId, dayToRemove) {
  const classData = appData.classes.find(c => c.id === classId);
  if (!classData) return;

  if (classData.days.length <= 1) {
    showToast('Cannot remove the only day from a class', 'error');
    return;
  }

  const modal = document.getElementById('deleteDayModal');
  const message = document.getElementById('deleteDayMessage');
  message.textContent = `Are you sure you want to remove ${dayToRemove} from "${classData.subject}"? The class will still occur on other selected days.`;
  
  deleteDayCallback = () => {
    classData.days = classData.days.filter(day => day !== dayToRemove);
    saveDataToStorage();
    renderSchedule();
    updateDashboardStats();
    showToast(`${dayToRemove} removed from ${classData.subject}`, 'success');
    
    // Create assignment task if assignment exists and not already created
    if (classData.assignment && !appData.studyTasks.find(t => t.sourceId === classId)) {
      createAssignmentTask(classData);
    }
  };
  
  modal.classList.remove('hidden');
};

// Assignment-to-task integration: assignments automatically create study tasks
function createAssignmentTask(classData) {
  if (!classData.assignment || classData.assignment.trim() === '') return;
  
  // Check if task already exists
  const existingTask = appData.studyTasks.find(t => t.sourceId === classData.id && t.sourceType === 'assignment');
  if (existingTask) return;

  const newTask = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    title: classData.assignment,
    subject: classData.code || classData.subject,
    priority: "High",
    deadline: getAssignmentDeadline(classData),
    estimatedTime: 180, // Default 3 hours
    completed: false,
    progress: 0,
    status: "Not Started",
    sourceType: "assignment",
    sourceId: classData.id,
    subTasks: [
      {id: Date.now() + "a", title: "Research and planning", completed: false},
      {id: Date.now() + "b", title: "Implementation/Writing", completed: false},
      {id: Date.now() + "c", title: "Review and finalization", completed: false}
    ]
  };
  
  appData.studyTasks.push(newTask);
  saveDataToStorage();
  showToast(`Study task created from assignment: ${classData.assignment}`, 'success');
}

function getAssignmentDeadline(classData) {
  // Default deadline: 2 weeks from today
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 14);
  return deadline.toISOString().split('T')[0];
}

// Global functions for class management
window.editClass = function(classId) {
  const classData = appData.classes.find(c => c.id === classId);
  if (!classData) return;

  editingItem = { type: 'class', id: classId };
  
  const modal = document.getElementById('addClassModal');
  const form = document.getElementById('addClassForm');
  const title = document.getElementById('classModalTitle');
  const submitBtn = document.getElementById('submitClass');

  if (title) title.textContent = 'Edit Class';
  if (submitBtn) submitBtn.textContent = 'Update Class';

  // Populate form fields
  form.subject.value = classData.subject || '';
  form.code.value = classData.code || '';
  form.instructor.value = classData.instructor || '';
  form.time.value = classData.time || '';
  form.duration.value = classData.duration || '1.5';
  form.location.value = classData.location || '';
  form.color.value = classData.color || '#3b82f6';
  form.notes.value = classData.notes || '';
  form.assignment.value = classData.assignment || '';
  form.status.value = classData.status || 'Upcoming';
  document.getElementById('classId').value = classData.id;

  // Set selected days
  const dayCheckboxes = form.querySelectorAll('input[name="days"]');
  dayCheckboxes.forEach(checkbox => {
    const isSelected = classData.days.includes(checkbox.value);
    checkbox.checked = isSelected;
    const label = checkbox.closest('.checkbox-label');
    if (label) {
      label.classList.toggle('selected', isSelected);
    }
  });

  if (modal) modal.classList.remove('hidden');
}

window.deleteClass = function(classId) {
  const classData = appData.classes.find(c => c.id === classId);
  if (!classData) return;

  showDeleteConfirmation(
    `Are you sure you want to delete "${classData.subject}"? This will also remove any associated study tasks.`,
    () => {
      // Remove associated assignment tasks
      appData.studyTasks = appData.studyTasks.filter(t => t.sourceId !== classId);
      
      // Remove the class
      appData.classes = appData.classes.filter(c => c.id !== classId);
      saveDataToStorage();
      renderSchedule();
      updateDashboardStats();
      showToast('Class and associated tasks deleted successfully', 'success');
    }
  );
}

// Enhanced Budget Section with all fixes
function renderBudget() {
  updateBudgetSummary();
  renderExpenseChart();
  renderSavingsGoals();
  renderTransactions();
}

function updateBudgetSummary(filter = 'all', category = 'all') {
  let transactions = [...appData.budget.transactions];
  
  // Apply time-based filter for period total
  if (filter !== 'all') {
    transactions = filterTransactionsByTime(transactions, filter);
  }
  
  // Apply category filter
  if (category !== 'all') {
    transactions = transactions.filter(t => t.category === category);
  }
  
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  // Total calculations (all time)
  const totalIncome = appData.budget.transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = appData.budget.transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalIncomeEl = document.getElementById('totalIncome');
  if (totalIncomeEl) {
    totalIncomeEl.textContent = `৳${totalIncome.toLocaleString()}`;
  }
  
  const totalExpensesEl = document.getElementById('totalExpenses');
  if (totalExpensesEl) {
    totalExpensesEl.textContent = `৳${totalExpenses.toLocaleString()}`;
  }
  
  const totalBalanceEl = document.getElementById('totalBalance');
  if (totalBalanceEl) {
    totalBalanceEl.textContent = `৳${(totalIncome - totalExpenses).toLocaleString()}`;
  }
  
  // FIXED: Dynamic totals for selected time period that updates with filters
  const periodTotalEl = document.getElementById('periodTotal');
  if (periodTotalEl) {
    const periodNet = income - expenses;
    periodTotalEl.textContent = `৳${periodNet.toLocaleString()}`;
  }
}

function filterTransactionsByTime(transactions, filter) {
  const now = new Date();
  return transactions.filter(t => {
    const transactionDate = new Date(t.date);
    switch (filter) {
      case 'daily':
        return transactionDate.toDateString() === now.toDateString();
      case 'weekly':
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return transactionDate >= weekAgo;
      case 'monthly':
        return transactionDate.getMonth() === now.getMonth() && 
               transactionDate.getFullYear() === now.getFullYear();
      case 'last3months':
        const threeMonthsAgo = new Date(now);
        threeMonthsAgo.setMonth(now.getMonth() - 3);
        return transactionDate >= threeMonthsAgo;
      case 'last6months':
        const sixMonthsAgo = new Date(now);
        sixMonthsAgo.setMonth(now.getMonth() - 6);
        return transactionDate >= sixMonthsAgo;
      case 'yearly':
        return transactionDate.getFullYear() === now.getFullYear();
      default:
        return true;
    }
  });
}

function renderExpenseChart() {
  const canvas = document.getElementById('expenseChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (expenseChart) {
    expenseChart.destroy();
  }

  const expensesByCategory = appData.budget.transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
  
  if (Object.keys(expensesByCategory).length === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#888';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('No expense data available', canvas.width / 2, canvas.height / 2);
    return;
  }
  
  expenseChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(expensesByCategory),
      datasets: [{
        data: Object.values(expensesByCategory),
        backgroundColor: colors.slice(0, Object.keys(expensesByCategory).length),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true
          }
        }
      }
    }
  });
}

// FIXED: Savings goals as bank accounts with full transaction history
function renderSavingsGoals() {
  const container = document.getElementById('savingsGoalsList');
  if (!container) return;

  if (appData.budget.savingsGoals.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No savings goals yet. Create your first savings account!</p>';
    return;
  }

  container.innerHTML = appData.budget.savingsGoals.map(goal => {
    const progress = (goal.current / goal.target) * 100;
    const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
    
    return `
      <div class="savings-goal-card">
        <div class="goal-header">
          <div class="goal-info">
            <h4>${goal.title} <small>(Bank Account)</small></h4>
            <p>${goal.description}</p>
          </div>
          <div class="goal-actions">
            <button onclick="manageSavingsGoal('${goal.id}')" title="Manage Account" style="color: #374151;">
              <i class="fas fa-university"></i>
            </button>
            <button onclick="editSavingsGoal('${goal.id}')" title="Edit Goal" style="color: #374151;">
              <i class="fas fa-edit"></i>
            </button>
            <button onclick="deleteSavingsGoal('${goal.id}')" class="delete-btn" title="Delete Goal" style="color: #374151;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="goal-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
          </div>
          <div class="goal-stats">
            <span><strong>Balance:</strong> ৳${goal.current.toLocaleString()} / ৳${goal.target.toLocaleString()}</span>
            <span>${Math.round(progress)}% Complete</span>
          </div>
        </div>
        <div class="goal-meta">
          <span class="status--${goal.category.toLowerCase()}">${goal.category}</span>
          <span>${daysLeft > 0 ? `${daysLeft} days left` : 'Deadline passed'}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Savings Goal Management Functions
window.manageSavingsGoal = function(goalId) {
  currentGoal = appData.budget.savingsGoals.find(g => g.id === goalId);
  if (!currentGoal) return;

  const modal = document.getElementById('savingsActionModal');
  const title = document.getElementById('savingsActionTitle');
  title.textContent = `Manage ${currentGoal.title}`;
  
  // Reset form
  const form = document.getElementById('savingsActionForm');
  form.classList.add('hidden');
  
  modal.classList.remove('hidden');
};

// FIXED: Deposit to goal: deducts from current balance, adds expense transaction
function depositToGoal() {
  const form = document.getElementById('savingsActionForm');
  const amountLabel = document.getElementById('actionAmountLabel');
  const actionAmount = document.getElementById('actionAmount');
  const actionDescription = document.getElementById('actionDescription');
  
  amountLabel.textContent = 'Deposit Amount (৳)';
  actionAmount.placeholder = 'Enter amount to deposit';
  actionDescription.value = `Deposit to ${currentGoal.title}`;
  
  savingsActionCallback = (amount, description) => {
    // Check if user has enough balance
    const totalIncome = appData.budget.transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = appData.budget.transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const currentBalance = totalIncome - totalExpenses;
    
    if (amount > currentBalance) {
      showToast('Insufficient balance for this deposit', 'error');
      return;
    }
    
    // Add to savings goal
    currentGoal.current += amount;
    
    // Add expense transaction
    const newTransaction = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      type: 'expense',
      amount: amount,
      category: 'Transfer to Savings',
      description: description,
      date: new Date().toISOString().split('T')[0]
    };
    
    appData.budget.transactions.push(newTransaction);
    saveDataToStorage();
    renderBudget();
    updateDashboardStats();
    showToast(`৳${amount.toLocaleString()} deposited to ${currentGoal.title}`, 'success');
  };
  
  form.classList.remove('hidden');
}

// FIXED: Withdraw from goal: adds to current income, adds income transaction  
function withdrawFromGoal() {
  const form = document.getElementById('savingsActionForm');
  const amountLabel = document.getElementById('actionAmountLabel');
  const actionAmount = document.getElementById('actionAmount');
  const actionDescription = document.getElementById('actionDescription');
  
  amountLabel.textContent = `Withdraw Amount (৳) - Max: ৳${currentGoal.current.toLocaleString()}`;
  actionAmount.placeholder = 'Enter amount to withdraw';
  actionAmount.max = currentGoal.current;
  actionDescription.value = `Withdrawal from ${currentGoal.title}`;
  
  savingsActionCallback = (amount, description) => {
    if (amount > currentGoal.current) {
      showToast('Insufficient funds in savings goal', 'error');
      return;
    }
    
    // Subtract from savings goal
    currentGoal.current -= amount;
    
    // Add income transaction
    const newTransaction = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      type: 'income',
      amount: amount,
      category: 'Transfer from Savings',
      description: description,
      date: new Date().toISOString().split('T')[0]
    };
    
    appData.budget.transactions.push(newTransaction);
    saveDataToStorage();
    renderBudget();
    updateDashboardStats();
    showToast(`৳${amount.toLocaleString()} withdrawn from ${currentGoal.title}`, 'success');
  };
  
  form.classList.remove('hidden');
}

// Global functions for savings goals
window.editSavingsGoal = function(goalId) {
  const goalData = appData.budget.savingsGoals.find(g => g.id === goalId);
  if (!goalData) return;

  editingItem = { type: 'savings-goal', id: goalId };
  
  const modal = document.getElementById('addSavingsGoalModal');
  const form = document.getElementById('addSavingsGoalForm');
  const title = document.getElementById('goalModalTitle');
  const submitBtn = document.getElementById('submitSavingsGoal');

  if (title) title.textContent = 'Edit Savings Goal';
  if (submitBtn) submitBtn.textContent = 'Update Goal';

  form.title.value = goalData.title;
  form.target.value = goalData.target;
  form.current.value = goalData.current;
  form.deadline.value = goalData.deadline;
  form.category.value = goalData.category;
  form.description.value = goalData.description;
  document.getElementById('goalId').value = goalData.id;

  if (modal) modal.classList.remove('hidden');
}

// FIXED: Delete goal: returns all money to income with full transaction history
window.deleteSavingsGoal = function(goalId) {
  const goalData = appData.budget.savingsGoals.find(g => g.id === goalId);
  if (!goalData) return;

  showDeleteConfirmation(
    `Are you sure you want to delete "${goalData.title}"? The current balance of ৳${goalData.current.toLocaleString()} will be returned to your income.`,
    () => {
      // Return all money to income if there's a current balance
      if (goalData.current > 0) {
        const returnTransaction = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          type: 'income',
          amount: goalData.current,
          category: 'Transfer from Savings',
          description: `Savings goal deleted: ${goalData.title} - Balance returned`,
          date: new Date().toISOString().split('T')[0]
        };
        
        appData.budget.transactions.push(returnTransaction);
      }
      
      appData.budget.savingsGoals = appData.budget.savingsGoals.filter(g => g.id !== goalId);
      saveDataToStorage();
      renderBudget();
      updateDashboardStats();
      showToast('Savings goal deleted and balance returned to income', 'success');
    }
  );
}

// FIXED: Transaction buttons use dark colors (#374151) for visibility
function renderTransactions(filter = 'all', category = 'all') {
  const container = document.getElementById('transactionsList');
  if (!container) return;
  
  let transactions = [...appData.budget.transactions];
  
  // Apply time-based filter
  if (filter !== 'all') {
    transactions = filterTransactionsByTime(transactions, filter);
  }
  
  // Apply category filter
  if (category !== 'all') {
    transactions = transactions.filter(t => t.category === category);
  }
  
  // Sort by date (newest first)
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Update budget summary with current filters
  updateBudgetSummary(filter, category);
  
  if (transactions.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No transactions found for the selected filters.</p>';
    return;
  }

  container.innerHTML = transactions.slice(0, 50).map(transaction => `
    <div class="transaction-item">
      <div class="transaction-info">
        <h4>${transaction.description}</h4>
        <p>${transaction.category} • ${formatDate(transaction.date)}</p>
      </div>
      <div class="transaction-amount ${transaction.type}">
        ${transaction.type === 'income' ? '+' : '-'}৳${transaction.amount.toLocaleString()}
      </div>
      <div class="transaction-actions">
        <button onclick="editTransaction('${transaction.id}')" title="Edit Transaction" style="color: #374151;">
          <i class="fas fa-edit"></i>
        </button>
        <button onclick="deleteTransaction('${transaction.id}')" title="Delete Transaction" style="color: #374151;">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// Global functions for transactions
window.editTransaction = function(transactionId) {
  const transactionData = appData.budget.transactions.find(t => t.id === transactionId);
  if (!transactionData) return;

  editingItem = { type: 'transaction', id: transactionId };
  
  const modal = document.getElementById('addTransactionModal');
  const form = document.getElementById('addTransactionForm');
  const title = document.getElementById('transactionModalTitle');
  const submitBtn = document.getElementById('submitTransaction');

  if (title) title.textContent = 'Edit Transaction';
  if (submitBtn) submitBtn.textContent = 'Update Transaction';

  form.type.value = transactionData.type;
  form.amount.value = transactionData.amount;
  form.category.value = transactionData.category;
  form.description.value = transactionData.description;
  form.date.value = transactionData.date;
  document.getElementById('transactionId').value = transactionData.id;

  if (modal) modal.classList.remove('hidden');
}

window.deleteTransaction = function(transactionId) {
  const transactionData = appData.budget.transactions.find(t => t.id === transactionId);
  if (!transactionData) return;

  showDeleteConfirmation(
    `Are you sure you want to delete the transaction "${transactionData.description}"?`,
    () => {
      appData.budget.transactions = appData.budget.transactions.filter(t => t.id !== transactionId);
      saveDataToStorage();
      renderTransactions();
      renderExpenseChart();
      updateDashboardStats();
      showToast('Transaction deleted successfully', 'success');
    }
  );
}

function downloadTransactions() {
  const filter = document.getElementById('transactionFilter')?.value || 'all';
  const category = document.getElementById('transactionCategory')?.value || 'all';
  
  let transactions = [...appData.budget.transactions];
  
  // Apply filters (same logic as renderTransactions)
  if (filter !== 'all') {
    transactions = filterTransactionsByTime(transactions, filter);
  }
  
  if (category !== 'all') {
    transactions = transactions.filter(t => t.category === category);
  }
  
  // Create CSV content
  const headers = ['Date', 'Type', 'Category', 'Description', 'Amount'];
  const csvContent = [
    headers.join(','),
    ...transactions.map(t => [
      t.date,
      t.type,
      t.category,
      `"${t.description}"`,
      t.amount
    ].join(','))
  ].join('\n');
  
  // Download file
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `transactions-${filter}-${category}-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  showToast('Transactions exported successfully', 'success');
}

// Enhanced Study Planner Section
function renderStudyPlanner() {
  updateStudyStats();
  renderStudyTasks();
  updateTaskSelectionControls();
}

function updateStudyStats() {
  const completed = appData.studyTasks.filter(task => task.completed || task.status === 'Completed').length;
  const pending = appData.studyTasks.filter(task => !task.completed && task.status !== 'Completed').length;
  const totalMinutes = appData.studyTasks.reduce((sum, task) => sum + task.estimatedTime, 0);
  const totalHours = Math.round(totalMinutes / 60);
  
  const completedTasksEl = document.getElementById('completedTasks');
  if (completedTasksEl) {
    completedTasksEl.textContent = completed;
  }
  
  const pendingTasksEl = document.getElementById('pendingTasks');
  if (pendingTasksEl) {
    pendingTasksEl.textContent = pending;
  }
  
  const totalStudyHoursEl = document.getElementById('totalStudyHours');
  if (totalStudyHoursEl) {
    totalStudyHoursEl.textContent = totalHours;
  }
}

function renderStudyTasks(filter = 'all') {
  let tasks = [...appData.studyTasks];
  
  // Apply filters
  switch (filter) {
    case 'pending':
      tasks = tasks.filter(task => !task.completed && task.status !== 'Completed');
      break;
    case 'in-progress':
      tasks = tasks.filter(task => task.status === 'In Progress');
      break;
    case 'completed':
      tasks = tasks.filter(task => task.completed || task.status === 'Completed');
      break;
    case 'high':
    case 'medium':
    case 'low':
      tasks = tasks.filter(task => task.priority.toLowerCase() === filter);
      break;
    case 'assignment':
      tasks = tasks.filter(task => task.sourceType === 'assignment');
      break;
  }
  
  const container = document.getElementById('studyTasksList');
  if (!container) return;
  
  if (tasks.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No tasks found for the selected filter.</p>';
    return;
  }

  container.innerHTML = tasks.map(task => {
    const isSelected = selectedTasks.includes(task.id);
    const completedSubtasks = task.subTasks ? task.subTasks.filter(st => st.completed).length : 0;
    const totalSubtasks = task.subTasks ? task.subTasks.length : 0;
    
    return `
      <div class="task-card ${task.completed ? 'completed' : ''} ${isSelected ? 'selected' : ''}" data-id="${task.id}">
        <div class="task-header">
          <div class="task-selection">
            <div class="task-checkbox ${isSelected ? 'checked' : ''}" onclick="toggleTaskSelection('${task.id}')"></div>
            <div>
              <h3 class="task-title">${task.title} 
                ${task.sourceType === 'assignment' ? '<span class="task-source-badge assignment">From Assignment</span>' : ''}
              </h3>
              <p class="task-subject">${task.subject}</p>
            </div>
          </div>
          <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
        </div>
        <div class="task-progress-bar">
          <div class="task-progress-fill" style="width: ${task.progress}%"></div>
        </div>
        ${task.subTasks && task.subTasks.length > 0 ? `
          <div class="subtasks-section">
            <div class="subtasks-header">
              <button class="subtasks-toggle" onclick="toggleSubtasks('${task.id}')">
                <i class="fas fa-chevron-right"></i>
                Subtasks (${completedSubtasks}/${totalSubtasks})
              </button>
              <button class="add-subtask-btn" onclick="addSubtask('${task.id}')">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="subtasks-list hidden" id="subtasks-${task.id}">
              ${task.subTasks.map(subtask => `
                <div class="subtask-item">
                  <div class="subtask-checkbox ${subtask.completed ? 'checked' : ''}" onclick="toggleSubtask('${task.id}', '${subtask.id}')"></div>
                  <span class="subtask-text ${subtask.completed ? 'completed' : ''}">${subtask.title}</span>
                  <button onclick="deleteSubtask('${task.id}', '${subtask.id}')" class="delete-btn" style="color: var(--color-error);">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        <div class="task-footer">
          <span>Due: ${formatDate(task.deadline)} • ${task.estimatedTime}min • ${task.status || 'Not Started'}</span>
          <div class="task-actions">
            <button onclick="editTask('${task.id}')" title="Edit Task">
              <i class="fas fa-edit"></i>
            </button>
            <button onclick="updateTaskProgress('${task.id}')" title="Update Progress">
              <i class="fas fa-chart-line"></i>
            </button>
            <button onclick="toggleTaskCompletion('${task.id}')" title="${task.completed ? 'Mark as incomplete' : 'Mark as complete'}">
              <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
            </button>
            <button onclick="deleteTask('${task.id}')" class="delete-btn" title="Delete Task">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Global functions for task management
window.toggleTaskSelection = function(taskId) {
  const task = appData.studyTasks.find(t => t.id === taskId);
  if (!task || task.completed) return;

  const index = selectedTasks.indexOf(taskId);
  if (index > -1) {
    selectedTasks.splice(index, 1);
  } else {
    selectedTasks.push(taskId);
  }
  
  updateTaskSelectionUI();
  updateTaskSelectionControls();
}

function updateTaskSelectionUI() {
  document.querySelectorAll('.task-card').forEach(card => {
    const taskId = card.dataset.id;
    const isSelected = selectedTasks.includes(taskId);
    
    card.classList.toggle('selected', isSelected);
    
    const checkbox = card.querySelector('.task-checkbox');
    if (checkbox) {
      checkbox.classList.toggle('checked', isSelected);
    }
  });
}

function updateTaskSelectionControls() {
  const startSelectedBtn = document.getElementById('startSelectedTimer');
  const selectAllBtn = document.getElementById('selectAllTasks');
  const selectNoneBtn = document.getElementById('selectNoneTasks');
  
  const availableTasks = appData.studyTasks.filter(t => !t.completed);
  const hasSelection = selectedTasks.length > 0;
  
  if (startSelectedBtn) {
    startSelectedBtn.disabled = !hasSelection;
    startSelectedBtn.textContent = hasSelection ? 
      `Start Timer (${selectedTasks.length} task${selectedTasks.length > 1 ? 's' : ''})` : 
      'Start Timer for Selected';
  }
  
  if (selectAllBtn) {
    selectAllBtn.disabled = availableTasks.length === 0;
  }
  
  if (selectNoneBtn) {
    selectNoneBtn.disabled = selectedTasks.length === 0;
  }
}

function selectAllTasks() {
  selectedTasks = appData.studyTasks.filter(t => !t.completed).map(t => t.id);
  updateTaskSelectionUI();
  updateTaskSelectionControls();
}

function selectNoneTasks() {
  selectedTasks = [];
  updateTaskSelectionUI();
  updateTaskSelectionControls();
}

function startSelectedTimer() {
  if (selectedTasks.length === 0) return;
  
  const selectedTaskTitles = selectedTasks.map(id => {
    const task = appData.studyTasks.find(t => t.id === id);
    return task ? task.title : '';
  }).filter(title => title);
  
  currentTimerTask = selectedTaskTitles.length === 1 ? selectedTaskTitles[0] : `${selectedTaskTitles.length} selected tasks`;
  
  const currentTaskDisplay = document.getElementById('currentTaskDisplay');
  if (currentTaskDisplay) {
    currentTaskDisplay.innerHTML = `<p><strong>Working on:</strong> ${currentTimerTask}</p>`;
  }
  
  resetPomodoro();
  setTimeout(() => startPomodoro(), 100);
}

window.toggleSubtasks = function(taskId) {
  const subtasksList = document.getElementById(`subtasks-${taskId}`);
  const toggle = document.querySelector(`[onclick="toggleSubtasks('${taskId}')"] i`);
  
  if (subtasksList && toggle) {
    const isHidden = subtasksList.classList.contains('hidden');
    subtasksList.classList.toggle('hidden', !isHidden);
    toggle.classList.toggle('fa-chevron-right', !isHidden);
    toggle.classList.toggle('fa-chevron-down', isHidden);
  }
}

window.addSubtask = function(taskId) {
  const title = prompt('Enter subtask title:');
  if (!title || !title.trim()) return;
  
  const task = appData.studyTasks.find(t => t.id === taskId);
  if (!task) return;
  
  if (!task.subTasks) {
    task.subTasks = [];
  }
  
  const newSubtask = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    title: title.trim(),
    completed: false
  };
  
  task.subTasks.push(newSubtask);
  saveDataToStorage();
  renderStudyTasks();
  showToast('Subtask added successfully', 'success');
}

window.toggleSubtask = function(taskId, subtaskId) {
  const task = appData.studyTasks.find(t => t.id === taskId);
  if (!task || !task.subTasks) return;
  
  const subtask = task.subTasks.find(st => st.id === subtaskId);
  if (!subtask) return;
  
  subtask.completed = !subtask.completed;
  
  const completedSubtasks = task.subTasks.filter(st => st.completed).length;
  const totalSubtasks = task.subTasks.length;
  task.progress = Math.round((completedSubtasks / totalSubtasks) * 100);
  
  if (completedSubtasks === totalSubtasks) {
    task.completed = true;
    task.status = 'Completed';
    task.progress = 100;
  } else if (task.completed && completedSubtasks < totalSubtasks) {
    task.completed = false;
    task.status = 'In Progress';
  }
  
  saveDataToStorage();
  renderStudyTasks();
  updateStudyStats();
  showToast(`Subtask ${subtask.completed ? 'completed' : 'reopened'}`, 'success');
}

window.deleteSubtask = function(taskId, subtaskId) {
  const task = appData.studyTasks.find(t => t.id === taskId);
  if (!task || !task.subTasks) return;
  
  const subtask = task.subTasks.find(st => st.id === subtaskId);
  if (!subtask) return;
  
  showDeleteConfirmation(
    `Are you sure you want to delete the subtask "${subtask.title}"?`,
    () => {
      task.subTasks = task.subTasks.filter(st => st.id !== subtaskId);
      
      if (task.subTasks.length > 0) {
        const completedSubtasks = task.subTasks.filter(st => st.completed).length;
        task.progress = Math.round((completedSubtasks / task.subTasks.length) * 100);
      }
      
      saveDataToStorage();
      renderStudyTasks();
      showToast('Subtask deleted successfully', 'success');
    }
  );
}

window.editTask = function(taskId) {
  const taskData = appData.studyTasks.find(t => t.id === taskId);
  if (!taskData) return;

  editingItem = { type: 'task', id: taskId };
  
  const modal = document.getElementById('addTaskModal');
  const form = document.getElementById('addTaskForm');
  const title = document.getElementById('taskModalTitle');
  const submitBtn = document.getElementById('submitTask');

  if (title) title.textContent = 'Edit Study Task';
  if (submitBtn) submitBtn.textContent = 'Update Task';

  form.title.value = taskData.title;
  form.subject.value = taskData.subject;
  form.priority.value = taskData.priority;
  form.deadline.value = taskData.deadline;
  form.estimatedTime.value = taskData.estimatedTime;
  document.getElementById('taskId').value = taskData.id;
  document.getElementById('taskSourceType').value = taskData.sourceType || 'manual';
  document.getElementById('taskSourceId').value = taskData.sourceId || '';

  if (modal) modal.classList.remove('hidden');
}

window.deleteTask = function(taskId) {
  const taskData = appData.studyTasks.find(t => t.id === taskId);
  if (!taskData) return;

  showDeleteConfirmation(
    `Are you sure you want to delete the task "${taskData.title}"?`,
    () => {
      appData.studyTasks = appData.studyTasks.filter(t => t.id !== taskId);
      
      const index = selectedTasks.indexOf(taskId);
      if (index > -1) {
        selectedTasks.splice(index, 1);
      }
      
      saveDataToStorage();
      renderStudyTasks();
      updateStudyStats();
      updateTaskSelectionControls();
      updateDashboardStats();
      showToast('Task deleted successfully', 'success');
    }
  );
}

window.toggleTaskCompletion = function(taskId) {
  const task = appData.studyTasks.find(t => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  
  if (task.completed) {
    task.progress = 100;
    task.status = 'Completed';
    if (task.subTasks) {
      task.subTasks.forEach(st => st.completed = true);
    }
    showToast('Task completed! Great job!', 'success');
  } else {
    task.status = task.progress > 0 ? 'In Progress' : 'Not Started';
    showToast('Task reopened', 'info');
  }
  
  if (task.completed) {
    const index = selectedTasks.indexOf(taskId);
    if (index > -1) {
      selectedTasks.splice(index, 1);
    }
  }
  
  saveDataToStorage();
  renderStudyTasks();
  updateStudyStats();
  updateTaskSelectionControls();
  updateDashboardStats();
}

window.updateTaskProgress = function(taskId) {
  const task = appData.studyTasks.find(t => t.id === taskId);
  if (!task) return;

  const newProgress = prompt(`Update progress for "${task.title}" (0-100):`, task.progress);
  
  if (newProgress !== null) {
    const progress = Math.max(0, Math.min(100, parseInt(newProgress) || 0));
    task.progress = progress;
    
    if (progress === 0) {
      task.status = 'Not Started';
      task.completed = false;
    } else if (progress === 100) {
      task.status = 'Completed';
      task.completed = true;
      if (task.subTasks) {
        task.subTasks.forEach(st => st.completed = true);
      }
    } else {
      task.status = 'In Progress';
      task.completed = false;
    }
    
    saveDataToStorage();
    renderStudyTasks();
    updateStudyStats();
    showToast('Progress updated successfully', 'success');
  }
}

// Enhanced Quiz Section
function renderQuizSection() {
  updateQuizStats();
  renderAvailableQuizzes();
}

function updateQuizStats() {
  const totalQuizzes = appData.quizzes.length;
  const totalAttempts = appData.quizzes.reduce((sum, quiz) => sum + (quiz.attempts?.length || 0), 0);
  
  let avgScore = 0;
  if (totalAttempts > 0) {
    const totalScore = appData.quizzes.reduce((sum, quiz) => {
      if (quiz.attempts && quiz.attempts.length > 0) {
        const latestAttempt = quiz.attempts[quiz.attempts.length - 1];
        return sum + (latestAttempt?.score || 0);
      }
      return sum;
    }, 0);
    avgScore = Math.round(totalScore / appData.quizzes.filter(q => q.attempts && q.attempts.length > 0).length);
  }
  
  const avgScoreEl = document.getElementById('avgQuizScoreDisplay');
  const totalQuizzesEl = document.getElementById('totalQuizzes');
  const totalAttemptsEl = document.getElementById('totalAttempts');
  
  if (avgScoreEl) avgScoreEl.textContent = `${avgScore}%`;
  if (totalQuizzesEl) totalQuizzesEl.textContent = totalQuizzes;
  if (totalAttemptsEl) totalAttemptsEl.textContent = totalAttempts;
}

function renderAvailableQuizzes() {
  const container = document.getElementById('quizzesList');
  if (!container) return;
  
  if (appData.quizzes.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No quizzes available. Create your first quiz!</p>';
    return;
  }
  
  container.innerHTML = appData.quizzes.map(quiz => {
    const latestAttempt = quiz.attempts && quiz.attempts.length > 0 ? 
      quiz.attempts[quiz.attempts.length - 1] : null;
    
    return `
      <div class="quiz-item" onclick="startQuiz('${quiz.id}')">
        <h4>${quiz.title}</h4>
        <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin: var(--space-8) 0;">${quiz.description || 'No description available'}</p>
        <div class="quiz-meta">
          <span class="quiz-difficulty ${quiz.difficulty.toLowerCase()}">${quiz.difficulty}</span>
          <span>${quiz.questions.length} questions</span>
          <span>${quiz.timeLimit} min</span>
          ${latestAttempt ? `<span class="text-success">Best: ${latestAttempt.score}%</span>` : ''}
        </div>
        <div class="quiz-actions" onclick="event.stopPropagation()">
          <button onclick="editQuiz('${quiz.id}')" title="Edit Quiz">
            <i class="fas fa-edit"></i>
          </button>
          <button onclick="viewQuizResults('${quiz.id}')" title="View Results">
            <i class="fas fa-chart-bar"></i>
          </button>
          <button onclick="deleteQuiz('${quiz.id}')" class="delete-btn" title="Delete Quiz">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Global quiz functions
window.startQuiz = function(quizId) {
  currentQuiz = appData.quizzes.find(q => q.id === quizId);
  if (!currentQuiz) return;
  
  currentQuestionIndex = 0;
  quizAnswers = new Array(currentQuiz.questions.length).fill(null);
  quizTimeRemaining = currentQuiz.timeLimit * 60;
  
  const availableQuizzes = document.querySelector('.available-quizzes');
  const quizPlayer = document.getElementById('quizPlayer');
  const quizResults = document.getElementById('quizResults');
  
  if (availableQuizzes) availableQuizzes.classList.add('hidden');
  if (quizResults) quizResults.classList.add('hidden');
  if (quizPlayer) quizPlayer.classList.remove('hidden');
  
  const quizTitle = document.getElementById('quizTitle');
  const totalQuestions = document.getElementById('totalQuestions');
  
  if (quizTitle) quizTitle.textContent = currentQuiz.title;
  if (totalQuestions) totalQuestions.textContent = currentQuiz.questions.length;
  
  startQuizTimer();
  showQuestion();
}

function startQuizTimer() {
  const timerDisplay = document.getElementById('timeRemaining');
  
  quizTimer = setInterval(() => {
    quizTimeRemaining--;
    
    if (timerDisplay) {
      const minutes = Math.floor(quizTimeRemaining / 60);
      const seconds = quizTimeRemaining % 60;
      timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
      if (quizTimeRemaining <= 60) {
        timerDisplay.style.color = 'var(--color-error)';
      } else if (quizTimeRemaining <= 300) {
        timerDisplay.style.color = 'var(--color-warning)';
      }
    }
    
    if (quizTimeRemaining <= 0) {
      clearInterval(quizTimer);
      finishQuizHandler();
    }
  }, 1000);
}

function showQuestion() {
  if (!currentQuiz) return;
  
  const question = currentQuiz.questions[currentQuestionIndex];
  
  const questionNumber = document.getElementById('questionNumber');
  const currentQuestion = document.getElementById('currentQuestion');
  
  if (questionNumber) questionNumber.textContent = currentQuestionIndex + 1;
  if (currentQuestion) currentQuestion.textContent = question.question;
  
  const optionsContainer = document.getElementById('optionsContainer');
  if (optionsContainer) {
    if (question.type === 'mcq') {
      optionsContainer.innerHTML = question.options.map((option, index) => `
        <button class="option-btn ${quizAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                onclick="selectOption(${index})" 
                data-option="${index}">
          ${option}
        </button>
      `).join('');
    } else if (question.type === 'true_false') {
      optionsContainer.innerHTML = `
        <button class="option-btn ${quizAnswers[currentQuestionIndex] === true ? 'selected' : ''}" 
                onclick="selectOption(true)" 
                data-option="true">
          True
        </button>
        <button class="option-btn ${quizAnswers[currentQuestionIndex] === false ? 'selected' : ''}" 
                onclick="selectOption(false)" 
                data-option="false">
          False
        </button>
      `;
    } else if (question.type === 'short_answer') {
      optionsContainer.innerHTML = `
        <input type="text" 
               class="form-control" 
               placeholder="Enter your answer..." 
               value="${quizAnswers[currentQuestionIndex] || ''}"
               oninput="selectOption(this.value)"
               style="font-size: var(--font-size-md); padding: var(--space-16);">
      `;
    }
  }
  
  const prevQuestion = document.getElementById('prevQuestion');
  const nextQuestion = document.getElementById('nextQuestion');
  const finishQuiz = document.getElementById('finishQuiz');
  
  if (prevQuestion) {
    prevQuestion.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
  }
  
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;
  if (nextQuestion) {
    nextQuestion.style.display = isLastQuestion ? 'none' : 'block';
  }
  if (finishQuiz) {
    finishQuiz.classList.toggle('hidden', !isLastQuestion);
  }
}

window.selectOption = function(optionValue) {
  if (currentQuiz.questions[currentQuestionIndex].type === 'mcq') {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = document.querySelector(`[data-option="${optionValue}"]`);
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
  } else if (currentQuiz.questions[currentQuestionIndex].type === 'true_false') {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = document.querySelector(`[data-option="${optionValue}"]`);
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
  }
  
  quizAnswers[currentQuestionIndex] = optionValue;
}

window.editQuiz = function(quizId) {
  const quizData = appData.quizzes.find(q => q.id === quizId);
  if (!quizData) return;

  editingItem = { type: 'quiz', id: quizId };
  
  const modal = document.getElementById('createQuizModal');
  const form = document.getElementById('createQuizForm');
  const title = document.getElementById('quizModalTitle');
  const submitBtn = document.getElementById('submitQuiz');

  if (title) title.textContent = 'Edit Quiz';
  if (submitBtn) submitBtn.textContent = 'Update Quiz';

  form.title.value = quizData.title;
  form.subject.value = quizData.subject;
  form.difficulty.value = quizData.difficulty;
  form.timeLimit.value = quizData.timeLimit;
  form.description.value = quizData.description || '';
  document.getElementById('quizId').value = quizData.id;

  currentEditingQuestions = [...quizData.questions];
  renderQuestionsInForm();

  if (modal) modal.classList.remove('hidden');
}

window.viewQuizResults = function(quizId) {
  const quiz = appData.quizzes.find(q => q.id === quizId);
  if (!quiz || !quiz.attempts || quiz.attempts.length === 0) {
    showToast('No attempts found for this quiz', 'info');
    return;
  }
  
  const availableQuizzes = document.querySelector('.available-quizzes');
  const quizPlayer = document.getElementById('quizPlayer');
  const quizResults = document.getElementById('quizResults');
  
  if (availableQuizzes) availableQuizzes.classList.add('hidden');
  if (quizPlayer) quizPlayer.classList.add('hidden');
  if (quizResults) quizResults.classList.remove('hidden');
  
  const resultsSummary = document.getElementById('resultsSummary');
  if (resultsSummary) {
    const latestAttempt = quiz.attempts[quiz.attempts.length - 1];
    const bestAttempt = quiz.attempts.reduce((best, current) => 
      current.score > best.score ? current : best);
    
    resultsSummary.innerHTML = `
      <div class="results-header">
        <h4>${quiz.title} - Results</h4>
      </div>
      <div class="results-stats">
        <div class="stat-item">
          <span class="stat-value">${latestAttempt.score}%</span>
          <span class="stat-label">Latest Score</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${bestAttempt.score}%</span>
          <span class="stat-label">Best Score</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${quiz.attempts.length}</span>
          <span class="stat-label">Total Attempts</span>
        </div>
      </div>
    `;
  }
}

window.deleteQuiz = function(quizId) {
  const quizData = appData.quizzes.find(q => q.id === quizId);
  if (!quizData) return;

  showDeleteConfirmation(
    `Are you sure you want to delete the quiz "${quizData.title}"?`,
    () => {
      appData.quizzes = appData.quizzes.filter(q => q.id !== quizId);
      saveDataToStorage();
      renderAvailableQuizzes();
      updateQuizStats();
      updateDashboardStats();
      showToast('Quiz deleted successfully', 'success');
    }
  );
}

function finishQuizHandler() {
  if (quizTimer) {
    clearInterval(quizTimer);
  }
  
  if (!currentQuiz) return;
  
  let correctAnswers = 0;
  const correctArray = [];
  
  currentQuiz.questions.forEach((question, index) => {
    let isCorrect = false;
    
    if (question.type === 'mcq') {
      isCorrect = quizAnswers[index] === question.correct;
    } else if (question.type === 'true_false') {
      isCorrect = quizAnswers[index] === question.correct;
    } else if (question.type === 'short_answer') {
      const userAnswer = (quizAnswers[index] || '').toString().toLowerCase().trim();
      const correctAnswer = question.correct.toString().toLowerCase().trim();
      isCorrect = userAnswer === correctAnswer;
    }
    
    if (isCorrect) correctAnswers++;
    correctArray.push(isCorrect);
  });
  
  const score = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
  const timeSpent = (currentQuiz.timeLimit * 60) - quizTimeRemaining;
  
  if (!currentQuiz.attempts) {
    currentQuiz.attempts = [];
  }
  
  const attempt = {
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0],
    score: score,
    timeSpent: timeSpent,
    answers: [...quizAnswers],
    correct: correctArray
  };
  
  currentQuiz.attempts.push(attempt);
  saveDataToStorage();
  
  showQuizResults(score, correctAnswers, currentQuiz.questions.length, timeSpent);
  
  updateQuizStats();
  updateDashboardStats();
}

function showQuizResults(score, correct, total, timeSpent) {
  const quizPlayer = document.getElementById('quizPlayer');
  const quizResults = document.getElementById('quizResults');
  
  if (quizPlayer) quizPlayer.classList.add('hidden');
  if (quizResults) quizResults.classList.remove('hidden');
  
  const resultsSummary = document.getElementById('resultsSummary');
  if (resultsSummary) {
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    
    resultsSummary.innerHTML = `
      <div class="results-header">
        <h4>Quiz Completed!</h4>
        <div class="final-score ${score >= 70 ? 'text-success' : 'text-warning'}">
          ${score}%
        </div>
      </div>
      <div class="results-details">
        <div class="result-item">
          <span>Correct Answers:</span>
          <span>${correct} / ${total}</span>
        </div>
        <div class="result-item">
          <span>Time Taken:</span>
          <span>${minutes}:${seconds.toString().padStart(2, '0')}</span>
        </div>
      </div>
    `;
  }
  
  showToast(`Quiz completed! Score: ${score}%`, score >= 70 ? 'success' : 'warning');
}

window.retakeQuiz = function() {
  if (currentQuiz) {
    startQuiz(currentQuiz.id);
  }
}

window.backToQuizzes = function() {
  const availableQuizzes = document.querySelector('.available-quizzes');
  const quizPlayer = document.getElementById('quizPlayer');
  const quizResults = document.getElementById('quizResults');
  
  if (availableQuizzes) availableQuizzes.classList.remove('hidden');
  if (quizPlayer) quizPlayer.classList.add('hidden');
  if (quizResults) quizResults.classList.add('hidden');
  
  currentQuiz = null;
  currentQuestionIndex = 0;
  quizAnswers = [];
  
  if (quizTimer) {
    clearInterval(quizTimer);
  }
}

// Quiz Creation Functions
window.addQuestion = function() {
  const newQuestion = {
    id: Date.now().toString(),
    type: 'mcq',
    question: '',
    options: ['', '', '', ''],
    correct: 0,
    explanation: ''
  };
  
  currentEditingQuestions.push(newQuestion);
  renderQuestionsInForm();
}

window.removeQuestion = function(index) {
  currentEditingQuestions.splice(index, 1);
  renderQuestionsInForm();
}

function renderQuestionsInForm() {
  const container = document.getElementById('questionsList');
  if (!container) return;
  
  if (currentEditingQuestions.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-16);">No questions added yet. Click "Add Question" to get started.</p>';
    return;
  }
  
  container.innerHTML = currentEditingQuestions.map((question, index) => `
    <div class="question-item">
      <div class="question-header">
        <span class="question-number">Question ${index + 1}</span>
        <button type="button" class="remove-question-btn" onclick="removeQuestion(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <div class="form-group">
        <label class="form-label">Question Type</label>
        <select class="form-control" onchange="updateQuestionType(${index}, this.value)">
          <option value="mcq" ${question.type === 'mcq' ? 'selected' : ''}>Multiple Choice</option>
          <option value="true_false" ${question.type === 'true_false' ? 'selected' : ''}>True/False</option>
          <option value="short_answer" ${question.type === 'short_answer' ? 'selected' : ''}>Short Answer</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Question</label>
        <textarea class="form-control" placeholder="Enter your question here..." onchange="updateQuestion(${index}, 'question', this.value)" rows="2">${question.question}</textarea>
      </div>
      ${question.type === 'mcq' ? `
        <div class="form-group">
          <label class="form-label">Options (Select the correct answer)</label>
          <div class="options-input">
            ${question.options.map((option, optIndex) => `
              <div class="option-input-row">
                <input type="radio" name="correct_${index}" value="${optIndex}" ${question.correct === optIndex ? 'checked' : ''} onchange="updateQuestion(${index}, 'correct', ${optIndex})">
                <input type="text" class="form-control" placeholder="Option ${optIndex + 1}" value="${option}" onchange="updateQuestionOption(${index}, ${optIndex}, this.value)">
              </div>
            `).join('')}
          </div>
        </div>
      ` : question.type === 'true_false' ? `
        <div class="form-group">
          <label class="form-label">Correct Answer</label>
          <div class="options-input">
            <div class="option-input-row">
              <input type="radio" name="tf_correct_${index}" value="true" ${question.correct === true ? 'checked' : ''} onchange="updateQuestion(${index}, 'correct', true)">
              <label>True</label>
            </div>
            <div class="option-input-row">
              <input type="radio" name="tf_correct_${index}" value="false" ${question.correct === false ? 'checked' : ''} onchange="updateQuestion(${index}, 'correct', false)">
              <label>False</label>
            </div>
          </div>
        </div>
      ` : `
        <div class="form-group">
          <label class="form-label">Correct Answer</label>
          <input type="text" class="form-control" placeholder="Enter the correct answer" value="${question.correct || ''}" onchange="updateQuestion(${index}, 'correct', this.value)">
        </div>
      `}
      <div class="form-group">
        <label class="form-label">Explanation (Optional)</label>
        <textarea class="form-control" placeholder="Explain the correct answer..." onchange="updateQuestion(${index}, 'explanation', this.value)" rows="2">${question.explanation || ''}</textarea>
      </div>
    </div>
  `).join('');
}

window.updateQuestionType = function(index, type) {
  if (currentEditingQuestions[index]) {
    currentEditingQuestions[index].type = type;
    
    // Reset options and correct answer based on type
    if (type === 'mcq') {
      currentEditingQuestions[index].options = ['', '', '', ''];
      currentEditingQuestions[index].correct = 0;
    } else if (type === 'true_false') {
      currentEditingQuestions[index].options = [];
      currentEditingQuestions[index].correct = true;
    } else if (type === 'short_answer') {
      currentEditingQuestions[index].options = [];
      currentEditingQuestions[index].correct = '';
    }
    
    renderQuestionsInForm();
  }
}

window.updateQuestion = function(index, field, value) {
  if (currentEditingQuestions[index]) {
    if (field === 'correct' && currentEditingQuestions[index].type === 'mcq') {
      currentEditingQuestions[index][field] = parseInt(value);
    } else {
      currentEditingQuestions[index][field] = value;
    }
  }
}

window.updateQuestionOption = function(questionIndex, optionIndex, value) {
  if (currentEditingQuestions[questionIndex]) {
    currentEditingQuestions[questionIndex].options[optionIndex] = value;
  }
}

// Enhanced Modal Controls - FIXED
function setupModalControls() {
  console.log('Setting up modal controls...');
  
  // Add Class Modal
  const addClassBtn = document.getElementById('addClassBtn');
  if (addClassBtn) {
    addClassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Opening class modal');
      resetClassForm();
      openModal('addClassModal');
    });
  }
  
  // Add Transaction Modal
  const addTransactionBtn = document.getElementById('addTransactionBtn');
  if (addTransactionBtn) {
    addTransactionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      resetTransactionForm();
      openModal('addTransactionModal');
    });
  }

  // Add Savings Goal Modal
  const addSavingsGoalBtn = document.getElementById('addSavingsGoalBtn');
  if (addSavingsGoalBtn) {
    addSavingsGoalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      resetSavingsGoalForm();
      openModal('addSavingsGoalModal');
    });
  }

  // Add Task Modal
  const addTaskBtn = document.getElementById('addTaskBtn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      resetTaskForm();
      openModal('addTaskModal');
    });
  }

  // Create Quiz Modal
  const createQuizBtn = document.getElementById('createQuizBtn');
  if (createQuizBtn) {
    createQuizBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      resetQuizForm();
      openModal('createQuizModal');
    });
  }

  // Close buttons for all modals
  document.querySelectorAll('.close-btn, [id*="cancel"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const modal = btn.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });

  // Delete Confirmation Modal
  const confirmDelete = document.getElementById('confirmDelete');
  if (confirmDelete) {
    confirmDelete.addEventListener('click', () => {
      if (deleteConfirmCallback) {
        deleteConfirmCallback();
        deleteConfirmCallback = null;
      }
      closeModal('deleteConfirmModal');
    });
  }

  // Delete Day Confirmation
  const confirmDeleteDay = document.getElementById('confirmDeleteDay');
  if (confirmDeleteDay) {
    confirmDeleteDay.addEventListener('click', () => {
      if (deleteDayCallback) {
        deleteDayCallback();
        deleteDayCallback = null;
      }
      closeModal('deleteDayModal');
    });
  }

  // Savings Action Confirmation
  const confirmSavingsAction = document.getElementById('confirmSavingsAction');
  if (confirmSavingsAction) {
    confirmSavingsAction.addEventListener('click', () => {
      const amount = parseFloat(document.getElementById('actionAmount').value);
      const description = document.getElementById('actionDescription').value;
      
      if (!amount || amount <= 0) {
        showToast('Please enter a valid amount', 'error');
        return;
      }
      
      if (!description.trim()) {
        showToast('Please enter a description', 'error');
        return;
      }
      
      if (savingsActionCallback) {
        savingsActionCallback(amount, description);
        savingsActionCallback = null;
      }
      closeModal('savingsActionModal');
    });
  }

  // Day selection for class modal
  setupDaySelection();
  
  // Add Question button
  const addQuestionBtn = document.getElementById('addQuestionBtn');
  if (addQuestionBtn) {
    addQuestionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      addQuestion();
    });
  }
}

function openModal(modalId) {
  console.log('Opening modal:', modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    console.log('Modal opened successfully');
  } else {
    console.error('Modal not found:', modalId);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
  editingItem = null;
}

function resetClassForm() {
  const form = document.getElementById('addClassForm');
  const title = document.getElementById('classModalTitle');
  const submitBtn = document.getElementById('submitClass');
  
  if (form) form.reset();
  if (title) title.textContent = 'Add New Class';
  if (submitBtn) submitBtn.textContent = 'Add Class';
  
  document.querySelectorAll('input[name="days"]').forEach(checkbox => {
    checkbox.checked = false;
    const label = checkbox.closest('.checkbox-label');
    if (label) label.classList.remove('selected');
  });
  
  const classId = document.getElementById('classId');
  if (classId) classId.value = '';
  editingItem = null;
}

function resetTransactionForm() {
  const form = document.getElementById('addTransactionForm');
  const title = document.getElementById('transactionModalTitle');
  const submitBtn = document.getElementById('submitTransaction');
  
  if (form) {
    form.reset();
    if (form.date) form.date.value = new Date().toISOString().split('T')[0];
  }
  if (title) title.textContent = 'Add Transaction';
  if (submitBtn) submitBtn.textContent = 'Add Transaction';
  
  const transactionId = document.getElementById('transactionId');
  if (transactionId) transactionId.value = '';
  editingItem = null;
}

function resetSavingsGoalForm() {
  const form = document.getElementById('addSavingsGoalForm');
  const title = document.getElementById('goalModalTitle');
  const submitBtn = document.getElementById('submitSavingsGoal');
  
  if (form) form.reset();
  if (title) title.textContent = 'Add Savings Goal';
  if (submitBtn) submitBtn.textContent = 'Add Goal';
  
  const goalId = document.getElementById('goalId');
  if (goalId) goalId.value = '';
  editingItem = null;
}

function resetTaskForm() {
  const form = document.getElementById('addTaskForm');
  const title = document.getElementById('taskModalTitle');
  const submitBtn = document.getElementById('submitTask');
  
  if (form) form.reset();
  if (title) title.textContent = 'Add Study Task';
  if (submitBtn) submitBtn.textContent = 'Add Task';
  
  const taskId = document.getElementById('taskId');
  if (taskId) taskId.value = '';
  document.getElementById('taskSourceType').value = 'manual';
  document.getElementById('taskSourceId').value = '';
  editingItem = null;
}

function resetQuizForm() {
  const form = document.getElementById('createQuizForm');
  const title = document.getElementById('quizModalTitle');
  const submitBtn = document.getElementById('submitQuiz');
  
  if (form) form.reset();
  if (title) title.textContent = 'Create New Quiz';
  if (submitBtn) submitBtn.textContent = 'Create Quiz';
  
  const quizId = document.getElementById('quizId');
  if (quizId) quizId.value = '';
  currentEditingQuestions = [];
  renderQuestionsInForm();
  editingItem = null;
}

function setupDaySelection() {
  const selectEveryDay = document.getElementById('selectEveryDay');
  const selectWeekdays = document.getElementById('selectWeekdays');
  const selectWeekends = document.getElementById('selectWeekends');

  if (selectEveryDay) {
    selectEveryDay.addEventListener('click', (e) => {
      e.preventDefault();
      const checkboxes = document.querySelectorAll('input[name="days"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        const label = checkbox.closest('.checkbox-label');
        if (label) label.classList.add('selected');
      });
    });
  }

  if (selectWeekdays) {
    selectWeekdays.addEventListener('click', (e) => {
      e.preventDefault();
      const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      const checkboxes = document.querySelectorAll('input[name="days"]');
      checkboxes.forEach(checkbox => {
        const shouldCheck = weekdays.includes(checkbox.value);
        checkbox.checked = shouldCheck;
        const label = checkbox.closest('.checkbox-label');
        if (label) label.classList.toggle('selected', shouldCheck);
      });
    });
  }

  if (selectWeekends) {
    selectWeekends.addEventListener('click', (e) => {
      e.preventDefault();
      const weekends = ['Saturday', 'Sunday'];
      const checkboxes = document.querySelectorAll('input[name="days"]');
      checkboxes.forEach(checkbox => {
        const shouldCheck = weekends.includes(checkbox.value);
        checkbox.checked = shouldCheck;
        const label = checkbox.closest('.checkbox-label');
        if (label) label.classList.toggle('selected', shouldCheck);
      });
    });
  }

  document.addEventListener('change', (e) => {
    if (e.target.name === 'days') {
      const label = e.target.closest('.checkbox-label');
      if (label) {
        label.classList.toggle('selected', e.target.checked);
      }
    }
  });
}

// Enhanced Form Handlers - FIXED
function setupFormHandlers() {
  console.log('Setting up form handlers...');
  
  // User name form
  const editNameForm = document.getElementById('editNameForm');
  if (editNameForm) {
    editNameForm.addEventListener('submit', handleNameSubmit);
  }
  
  const addClassForm = document.getElementById('addClassForm');
  if (addClassForm) {
    addClassForm.addEventListener('submit', handleClassSubmit);
  }

  const addTransactionForm = document.getElementById('addTransactionForm');
  if (addTransactionForm) {
    addTransactionForm.addEventListener('submit', handleTransactionSubmit);
  }

  const addSavingsGoalForm = document.getElementById('addSavingsGoalForm');
  if (addSavingsGoalForm) {
    addSavingsGoalForm.addEventListener('submit', handleSavingsGoalSubmit);
  }

  const addTaskForm = document.getElementById('addTaskForm');
  if (addTaskForm) {
    addTaskForm.addEventListener('submit', handleTaskSubmit);
  }

  const createQuizForm = document.getElementById('createQuizForm');
  if (createQuizForm) {
    createQuizForm.addEventListener('submit', handleQuizSubmit);
  }
}

// FIXED: Name editing functionality
function handleNameSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newName = formData.get('name').trim();
  
  if (!newName) {
    showToast('Please enter a valid name', 'error');
    return;
  }
  
  appData.user.name = newName;
  saveDataToStorage();
  updateWelcomeMessage();
  closeModal('editNameModal');
  showToast('Name updated successfully!', 'success');
}

function handleClassSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const selectedDays = Array.from(document.querySelectorAll('input[name="days"]:checked'))
    .map(checkbox => checkbox.value);
  
  if (selectedDays.length === 0) {
    showToast('Please select at least one day', 'error');
    return;
  }
  
  const classData = {
    subject: formData.get('subject'),
    code: formData.get('code'),
    instructor: formData.get('instructor'),
    days: selectedDays,
    time: formData.get('time'),
    duration: formData.get('duration'),
    location: formData.get('location'),
    color: formData.get('color'),
    notes: formData.get('notes') || '',
    assignment: formData.get('assignment') || '',
    status: formData.get('status') || 'Upcoming',
    createdAt: new Date().toISOString()
  };
  
  if (editingItem && editingItem.type === 'class') {
    const existingClass = appData.classes.find(c => c.id === editingItem.id);
    if (existingClass) {
      Object.assign(existingClass, classData);
      showToast('Class updated successfully!', 'success');
      
      // Create assignment task if assignment exists and not already created
      if (existingClass.assignment && !appData.studyTasks.find(t => t.sourceId === existingClass.id)) {
        createAssignmentTask(existingClass);
      }
    }
  } else {
    const newClass = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...classData
    };
    appData.classes.push(newClass);
    showToast('Class added successfully!', 'success');
    
    // Create assignment task if assignment exists
    if (newClass.assignment) {
      createAssignmentTask(newClass);
    }
  }
  
  saveDataToStorage();
  closeModal('addClassModal');
  
  if (currentSection === 'schedule') {
    renderSchedule();
  }
  updateDashboardStats();
}

function handleTransactionSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const transactionData = {
    type: formData.get('type'),
    amount: parseInt(formData.get('amount')),
    category: formData.get('category'),
    description: formData.get('description'),
    date: formData.get('date')
  };
  
  if (editingItem && editingItem.type === 'transaction') {
    const existingTransaction = appData.budget.transactions.find(t => t.id === editingItem.id);
    if (existingTransaction) {
      Object.assign(existingTransaction, transactionData);
      showToast('Transaction updated successfully!', 'success');
    }
  } else {
    const newTransaction = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...transactionData
    };
    appData.budget.transactions.push(newTransaction);
    showToast('Transaction added successfully!', 'success');
  }
  
  saveDataToStorage();
  closeModal('addTransactionModal');
  
  if (currentSection === 'budget') {
    renderBudget();
  }
  updateDashboardStats();
}

function handleSavingsGoalSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const goalData = {
    title: formData.get('title'),
    target: parseInt(formData.get('target')),
    current: parseInt(formData.get('current')),
    deadline: formData.get('deadline'),
    category: formData.get('category'),
    description: formData.get('description')
  };
  
  if (editingItem && editingItem.type === 'savings-goal') {
    const existingGoal = appData.budget.savingsGoals.find(g => g.id === editingItem.id);
    if (existingGoal) {
      Object.assign(existingGoal, goalData);
      showToast('Savings goal updated successfully!', 'success');
    }
  } else {
    const newGoal = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...goalData
    };
    appData.budget.savingsGoals.push(newGoal);
    showToast('Savings goal added successfully!', 'success');
  }
  
  saveDataToStorage();
  closeModal('addSavingsGoalModal');
  
  if (currentSection === 'budget') {
    renderSavingsGoals();
  }
  updateDashboardStats();
}

function handleTaskSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const taskData = {
    title: formData.get('title'),
    subject: formData.get('subject'),
    priority: formData.get('priority'),
    deadline: formData.get('deadline'),
    estimatedTime: parseInt(formData.get('estimatedTime')),
    sourceType: formData.get('sourceType') || 'manual',
    sourceId: formData.get('sourceId') || undefined
  };
  
  if (editingItem && editingItem.type === 'task') {
    const existingTask = appData.studyTasks.find(t => t.id === editingItem.id);
    if (existingTask) {
      Object.assign(existingTask, taskData);
      showToast('Task updated successfully!', 'success');
    }
  } else {
    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...taskData,
      completed: false,
      progress: 0,
      status: 'Not Started',
      subTasks: []
    };
    appData.studyTasks.push(newTask);
    showToast('Task added successfully!', 'success');
  }
  
  saveDataToStorage();
  closeModal('addTaskModal');
  
  if (currentSection === 'study') {
    renderStudyPlanner();
  }
  updateDashboardStats();
}

function handleQuizSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  if (currentEditingQuestions.length === 0) {
    showToast('Please add at least one question', 'error');
    return;
  }
  
  for (let i = 0; i < currentEditingQuestions.length; i++) {
    const question = currentEditingQuestions[i];
    if (!question.question.trim()) {
      showToast(`Please enter question text for question ${i + 1}`, 'error');
      return;
    }
    
    if (question.type === 'mcq') {
      const hasEmptyOptions = question.options.some(opt => !opt.trim());
      if (hasEmptyOptions) {
        showToast(`Please fill all options for question ${i + 1}`, 'error');
        return;
      }
    } else if (question.type === 'short_answer') {
      if (!question.correct || !question.correct.toString().trim()) {
        showToast(`Please provide the correct answer for question ${i + 1}`, 'error');
        return;
      }
    }
  }
  
  const quizData = {
    title: formData.get('title'),
    subject: formData.get('subject'),
    difficulty: formData.get('difficulty'),
    timeLimit: parseInt(formData.get('timeLimit')),
    description: formData.get('description'),
    questions: [...currentEditingQuestions]
  };
  
  if (editingItem && editingItem.type === 'quiz') {
    const existingQuiz = appData.quizzes.find(q => q.id === editingItem.id);
    if (existingQuiz) {
      Object.assign(existingQuiz, quizData);
      showToast('Quiz updated successfully!', 'success');
    }
  } else {
    const newQuiz = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...quizData,
      attempts: []
    };
    appData.quizzes.push(newQuiz);
    showToast('Quiz created successfully!', 'success');
  }
  
  saveDataToStorage();
  closeModal('createQuizModal');
  
  if (currentSection === 'quiz') {
    renderQuizSection();
  }
  updateDashboardStats();
}

// Enhanced Pomodoro Timer
function setupPomodoroTimer() {
  const startBtn = document.getElementById('startTimer');
  const pauseBtn = document.getElementById('pauseTimer');
  const resetBtn = document.getElementById('resetTimer');
  
  if (startBtn) startBtn.addEventListener('click', startPomodoro);
  if (pauseBtn) pauseBtn.addEventListener('click', pausePomodoro);
  if (resetBtn) resetBtn.addEventListener('click', resetPomodoro);
}

function startPomodoro() {
  if (!isPomodoroRunning) {
    isPomodoroRunning = true;
    const timerCircle = document.querySelector('.timer-circle');
    const startBtn = document.getElementById('startTimer');
    
    if (timerCircle) timerCircle.classList.add('active');
    if (startBtn) startBtn.textContent = 'Running...';
    
    pomodoroTimer = setInterval(() => {
      if (pomodoroSeconds === 0) {
        if (pomodoroMinutes === 0) {
          pomodoroTimerComplete();
          return;
        }
        pomodoroMinutes--;
        pomodoroSeconds = 59;
      } else {
        pomodoroSeconds--;
      }
      
      updatePomodoroDisplay();
    }, 1000);
  }
}

function pomodoroTimerComplete() {
  clearInterval(pomodoroTimer);
  isPomodoroRunning = false;
  
  const timerCircle = document.querySelector('.timer-circle');
  const startBtn = document.getElementById('startTimer');
  const timerLabel = document.getElementById('timerLabel');
  
  if (isBreakTime) {
    pomodoroMinutes = 25;
    isBreakTime = false;
    if (timerLabel) timerLabel.textContent = 'Work Time';
    showToast('Break finished! Time to get back to work.', 'success');
    
    if (currentTimerTask) {
      const currentTaskDisplay = document.getElementById('currentTaskDisplay');
      if (currentTaskDisplay) {
        currentTaskDisplay.innerHTML = '<p>Select a task to start timer</p>';
      }
      currentTimerTask = null;
    }
  } else {
    pomodoroMinutes = 5;
    isBreakTime = true;
    if (timerLabel) timerLabel.textContent = 'Break Time';
    showToast('Work session completed! Take a 5-minute break.', 'success');
    
    if (selectedTasks.length > 0) {
      selectedTasks.forEach(taskId => {
        const task = appData.studyTasks.find(t => t.id === taskId);
        if (task && !task.completed) {
          const progressIncrease = Math.min(15, Math.round(25 / (task.estimatedTime / 60) * 100));
          task.progress = Math.min(100, task.progress + progressIncrease);
          
          if (task.progress >= 100) {
            task.completed = true;
            task.status = 'Completed';
          } else if (task.progress > 0) {
            task.status = 'In Progress';
          }
        }
      });
      
      saveDataToStorage();
      if (currentSection === 'study') {
        renderStudyPlanner();
      }
      updateDashboardStats();
    }
  }
  
  pomodoroSeconds = 0;
  if (timerCircle) timerCircle.classList.remove('active');
  if (startBtn) startBtn.textContent = 'Start';
  updatePomodoroDisplay();
}

function pausePomodoro() {
  clearInterval(pomodoroTimer);
  isPomodoroRunning = false;
  
  const timerCircle = document.querySelector('.timer-circle');
  const startBtn = document.getElementById('startTimer');
  
  if (timerCircle) timerCircle.classList.remove('active');
  if (startBtn) startBtn.textContent = 'Resume';
}

function resetPomodoro() {
  clearInterval(pomodoroTimer);
  isPomodoroRunning = false;
  isBreakTime = false;
  pomodoroMinutes = 25;
  pomodoroSeconds = 0;
  
  const timerCircle = document.querySelector('.timer-circle');
  const startBtn = document.getElementById('startTimer');
  const timerLabel = document.getElementById('timerLabel');
  const currentTaskDisplay = document.getElementById('currentTaskDisplay');
  
  if (timerCircle) timerCircle.classList.remove('active');
  if (startBtn) startBtn.textContent = 'Start';
  if (timerLabel) timerLabel.textContent = 'Work Time';
  if (currentTaskDisplay) currentTaskDisplay.innerHTML = '<p>Select a task to start timer</p>';
  
  currentTimerTask = null;
  updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
  const minutes = pomodoroMinutes.toString().padStart(2, '0');
  const seconds = pomodoroSeconds.toString().padStart(2, '0');
  const timerDisplay = document.getElementById('timerDisplay');
  if (timerDisplay) {
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }
}

// Enhanced Controls Setup
function setupFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderStudyTasks(btn.dataset.filter);
    });
  });
}

function setupQuizControls() {
  const prevQuestion = document.getElementById('prevQuestion');
  const nextQuestion = document.getElementById('nextQuestion');
  const finishQuiz = document.getElementById('finishQuiz');
  const retakeQuiz = document.getElementById('retakeQuiz');
  const backToQuizzes = document.getElementById('backToQuizzes');
  
  if (prevQuestion) {
    prevQuestion.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
      }
    });
  }
  
  if (nextQuestion) {
    nextQuestion.addEventListener('click', () => {
      if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
      }
    });
  }
  
  if (finishQuiz) {
    finishQuiz.addEventListener('click', finishQuizHandler);
  }
  
  if (retakeQuiz) {
    retakeQuiz.addEventListener('click', () => {
      if (currentQuiz) {
        startQuiz(currentQuiz.id);
      }
    });
  }
  
  if (backToQuizzes) {
    backToQuizzes.addEventListener('click', () => {
      backToQuizzes();
    });
  }
}

function setupTaskSelection() {
  const selectAllBtn = document.getElementById('selectAllTasks');
  const selectNoneBtn = document.getElementById('selectNoneTasks'); 
  const startSelectedBtn = document.getElementById('startSelectedTimer');
  
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', selectAllTasks);
  }
  
  if (selectNoneBtn) {
    selectNoneBtn.addEventListener('click', selectNoneTasks);
  }
  
  if (startSelectedBtn) {
    startSelectedBtn.addEventListener('click', startSelectedTimer);
  }
}

function setupTransactionControls() {
  const transactionFilter = document.getElementById('transactionFilter');
  const transactionCategory = document.getElementById('transactionCategory');
  const downloadBtn = document.getElementById('downloadTransactions');
  
  if (transactionFilter) {
    transactionFilter.addEventListener('change', () => {
      const filter = transactionFilter.value;
      const category = transactionCategory ? transactionCategory.value : 'all';
      renderTransactions(filter, category);
    });
  }
  
  if (transactionCategory) {
    transactionCategory.addEventListener('change', () => {
      const filter = transactionFilter ? transactionFilter.value : 'all';
      const category = transactionCategory.value;
      renderTransactions(filter, category);
    });
  }
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadTransactions);
  }
}

// Utility Functions
function showDeleteConfirmation(message, callback) {
  const modal = document.getElementById('deleteConfirmModal');
  const messageEl = document.getElementById('deleteMessage');
  
  if (messageEl) messageEl.textContent = message;
  deleteConfirmCallback = callback;
  
  if (modal) modal.classList.remove('hidden');
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-8);">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Notifications
function updateNotificationBadge() {
  const unreadCount = appData.notifications.filter(n => !n.read).length;
  const badge = document.getElementById('notificationBadge');
  
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }
  
  renderNotifications();
}

function renderNotifications() {
  const container = document.getElementById('notificationsList');
  if (!container) return;
  
  container.innerHTML = appData.notifications
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .map(notification => `
      <div class="notification-item ${!notification.read ? 'unread' : ''}" onclick="markNotificationRead('${notification.id}')">
        <h4>${notification.title}</h4>
        <p>${notification.message}</p>
        <div class="notification-time">${formatTimestamp(notification.timestamp)}</div>
      </div>
    `).join('');
}

function markNotificationRead(notificationId) {
  const notification = appData.notifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
    saveDataToStorage();
    updateNotificationBadge();
  }
}

// Utility functions
function formatTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

function addMinutes(time, minutesToAdd) {
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString();
}