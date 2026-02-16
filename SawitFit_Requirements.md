# SawitFit - Complete Product Requirements Document

**Version**: 1.0  
**Last Updated**: February 2026  
**Project Type**: Health & Fitness Mobile Application

---

## 📖 Project Overview

### **Project Goals**

SawitFit is a mobile health & fitness application designed to **help users achieve their health and fitness goals** through a holistic approach that combines **nutrition tracking**, **workout logging**, and **progress monitoring** in one integrated platform.

**SawitFit's Core Mission:**
1. **Simplify** the process of tracking daily calories and nutrition
2. **Empower** users with data and insights to make better health decisions
3. **Motivate** users through progress visualization and social features
4. **Educate** users about nutrition, exercise, and realistic fitness goal achievement

---

### **Application Description**

SawitFit is an **all-in-one fitness companion app** designed for individuals who want to:
- Lose weight (cutting)
- Gain muscle mass (bulking)
- Maintain ideal weight (maintenance)

**Key Features:**

#### **1. Nutrition Tracking 🍎**
- Daily calorie input with comprehensive food database
- Macronutrient tracking (protein, carbohydrates, fat)
- Automatic serving size to calorie conversion
- Quick add for fast input (< 60 seconds)

#### **2. Workout Logging 💪**
- Create and manage workout splits
- Exercise database with detailed instructions
- Log sets, reps, and weight for each exercise
- Workout volume tracking

#### **3. Goal Setting & TDEE Calculator 🎯**
- TDEE calculator based on profile and activity level
- Automatic calorie target recommendations
- Goal options: bulk, cut, or maintenance
- Target adjustments based on progress

#### **4. Progress Tracking 📈**
- Weekly progress charts (calories, weight, workout volume)
- Daily progress photo upload
- Complete daily journal (nutrition + workout)
- Data visualization for motivation

#### **5. Social Features 👥**
- Add friends and view their profiles
- Share progress (optional)
- Messaging for support and accountability

---

### **Inspiration & App Concept**

SawitFit is inspired by **gaps in popular fitness apps** like MyFitnessPal, Lose It!, and Strong:

#### **Identified Problems:**

1. **Tool Fragmentation**
   - Users must use multiple apps (one for nutrition, one for workout)
   - Data is not integrated, difficult to see the big picture

2. **UI/UX Complexity**
   - Existing apps are too complex for beginners
   - Too many features irrelevant to most users

3. **Lack of Personalization**
   - Generic goal recommendations
   - No guidance for beginners

4. **Focus on Calories Only**
   - Insufficient emphasis on workout tracking
   - No integration between nutrition and exercise

#### **SawitFit's Solution:**

✅ **One-Stop Solution** - All features in one app  
✅ **Simplified UX** - Focus on essential features, clean and intuitive UI  
✅ **Smart Recommendations** - TDEE calculator and goal recommendations  
✅ **Holistic Approach** - Nutrition + Workout + Progress in one ecosystem  
✅ **Social Accountability** - Social features for motivation and support  

---

### **Target Users**

#### **Primary Target:**
- **Age**: 18-35 years old
- **Profile**: Fitness enthusiasts, gym-goers, individuals wanting to lose/gain weight
- **Tech-savvy**: Familiar with smartphone apps
- **Goal-oriented**: Have clear health/fitness targets

#### **User Personas:**

**1. "The Beginner" - Rina (22 years old)**
- Just starting fitness journey
- Confused about where to start
- Needs guidance and simplicity

**2. "The Gym Regular" - Budi (28 years old)**
- Works out 4-5x per week
- Wants to optimize nutrition for maximum results
- Needs detailed but fast tracking

**3. "The Weight Loss Seeker" - Sari (30 years old)**
- Goal: lose 10kg in 6 months
- Needs accountability and motivation
- Wants to see progress visually

---

### **Unique Value Proposition**

> **"Your Complete Fitness Journey, Simplified."**

SawitFit is not just a calorie counter or workout logger - it's a **personal fitness assistant** that:
- Understands your goals
- Provides realistic targets
- Helps you stay on track
- Celebrates your progress

**Differentiation:**
1. **Integration** - Nutrition + Workout in one platform
2. **Simplicity** - Clean UI/UX, not overwhelming
3. **Intelligence** - Smart recommendations based on user data
4. **Community** - Social features for accountability
5. **Privacy** - User data is completely private and secure

---

### **Tech Stack (Planned)**

- **Frontend**: React Native (cross-platform iOS & Android)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL (user data) + MongoDB (food/exercise database)
- **Cloud**: AWS / Google Cloud Platform
- **Authentication**: JWT + Email verification

---

### **Project Timeline**

- **Phase 1 (MVP)**: Authentication, Nutrition Tracking, Basic Dashboard
- **Phase 2**: Workout Logging, TDEE Calculator, Goal Setting
- **Phase 3**: Progress Tracking, Charts, Photo Upload
- **Phase 4**: Social Features, Messaging
- **Phase 5**: Polish, Testing, Launch

---


## 📋 Functional Requirements (FR)

| ID | Requirement | Feature Name | Priority |
|----|-------------|--------------|----------|
| FR-1 | User can create account and login | User Account Login | Must-Have |
| FR-2 | User can input daily calories in food diary (Breakfast/Lunch/Dinner) | Calorie Logging | Must-Have |
| FR-3 | User can view total and remaining calories with calculations in daily diary | View Calorie Summary | Must-Have |
| FR-4 | User can set and modify weight goals ("Lose 1kg - 0.25kg per week", "Maintain current weight", "Gain 0.25kg - 0.5kg per week") in goals menu | Weight Goal Setting | Must-Have |
| FR-5 | User can set and modify activity level ("Not Very Active", "Somewhat Active", "Active", "Very Active") in goals menu | Activity Level Setting | Must-Have |
| FR-6 | System automatically inputs daily calorie target based on TDEE + goal to user's daily diary | Target Automation | Must-Have |
| FR-7 | User can view TDEE estimate based on profile and activity level | TDEE Estimation | Must-Have |
| FR-8 | System can recommend goals based on user answers (sentiment/questions) | Goal Recommendation | Should-Have |
| FR-9 | User can select goal (bulk/cut/maintenance) | Goal Selection | Must-Have |
| FR-10 | User can delete daily calorie diary entries | Delete Calorie Entry | Must-Have |
| FR-11 | User can modify food serving size before inputting to daily diary | Modify Serving Size | Must-Have |
| FR-12 | User can view list of available foods with their macronutrients | Food and Macro List | Must-Have |
| FR-13 | User can search for available foods with their macronutrients | Search Food and Macros | Must-Have |
| FR-14 | User can add calories to daily diary outside of available foods | Instant Calorie Input | Must-Have |
| FR-15 | User can create and modify workout splits in diary | Create Workout Split | Must-Have |
| FR-16 | User can view types and variations of exercises | View Exercise Variations | Must-Have |
| FR-17 | User can search for types and variations of exercises | Search Exercise Variations | Should-Have |
| FR-18 | User can modify sets, reps and weight for each exercise variation | Modify Exercise Details Per Session | Must-Have |
| FR-19 | User can view exercise details (target muscles, instructions, equipment, etc.) | Exercise Details | Must-Have |
| FR-20 | User can add exercises to split outside of available variations (including setting sets, reps and weight) | Add Custom Exercise Variation | Must-Have |
| FR-21 | User can post progress photos daily in the application | Post Progress Photos | Must-Have |
| FR-22 | System adjusts dashboard display and recommendations based on user answers | Auto-layout Dashboard UI | Could-Have |
| FR-23 | User can view weekly progress charts (calories, weight, workout volume) | Weekly Progress Charts | Must-Have |
| FR-24 | User can view daily diary containing diet log and workout exercises performed | Daily Diary UI | Must-Have |
| FR-25 | System automatically converts food input to calories and macronutrients based on database | Calorie and Macro Conversion | Must-Have |
| FR-26 | User can update weight in goals menu section | Update Weight | Must-Have |
| FR-27 | User can view list of friends owned by user | View Friend List | Must-Have |
| FR-28 | User can add friends (other users) | Add Friends | Must-Have |
| FR-29 | User can view friend profiles (other users) | View Friend Profile | Must-Have |
| FR-30 | User can send and receive messages from friends (other users) | Send Messages | Could-Have |

---

## ⚙️ Non-Functional Requirements (NFR)

| ID | Requirement | Feature Name | Priority |
|----|-------------|--------------|----------|
| NFR-31 | Description | Requirement Name | - |
| NFR-32 | User can add 1 food entry to daily diary in < 60 seconds without assistance | UI/UX Focus | Satisfier |
| NFR-33 | Food and exercise search function must return results in less than 2 seconds | Search Efficiency | Satisfier |
| NFR-34 | Total calorie and macronutrient calculations must be updated in real-time and accurate according to user input | Data Accuracy | Satisfier |
| NFR-35 | Application must be accessible at all times (24/7) with minimum 99% uptime target | Availability | Satisfier |
| NFR-36 | Personal information and user passwords must be stored securely | Data Security | Satisfier |
| NFR-37 | Application must run smoothly and have consistent display across various smartphone screen sizes | Device Responsiveness | Satisfier |
| NFR-38 | System must ensure progress photos and workout logs are saved correctly and not corrupted if app closes suddenly | Data Integrity | Satisfier |
| NFR-39 | Code must be well-structured and documented so new features can be easily added in the future | Maintenance | Satisfier |
| NFR-40 | Initial app loading time to main page must not exceed 5 seconds | Loading Time | Satisfier |
| NFR-41 | System remains responsive (even if load < 2 seconds) even if user has > 1000 diary entries | Scalability | Delighter |
| NFR-42 | Profile data and progress photos can only be accessed and modified by the account owner | User Authorization | Satisfier |
| NFR-43 | System must have backup mechanism so user data can be recovered if system fails | Backup / Recovery | Satisfier |
| NFR-44 | If internet connection is lost, app must display clear error message and still be able to open last saved data | Network Handling | Satisfier |
| NFR-45 | System must not share user data (photos, diary, weight) to other users without permission | Privacy / Data Sharing | Satisfier |
| NFR-46 | System logs important data changes for audit (create audit log) | Logging & Audit | Satisfier |
| NFR-47 | System must automatically logout if inactive for 3 days | Security Session | Satisfier |

---

## 🚫 Constraint Requirements (CR)

| ID | Requirement | Feature Name | Priority |
|----|-------------|--------------|----------|
| CR-48 | Description | Requirement Name | - |
| CR-49 | System uses role-based access control minimum for User and Admin roles | Role-based Control | Security |
| CR-50 | All Users must login using verified email | Login Requirement | Security |
| CR-51 | System restricts stored-data usage only for SawitFit features | Purpose Limitation | Policy |
| CR-52 | User data cannot be shared with third parties without user consent | Third-party Sharing | Policy |
| CR-53 | Maximum file upload limit for progress photos is ≤ 5 MB and only accepts JPG/PNG format | File Upload | Technical |
| CR-54 | User data must be stored permanently and accessible after login | Data Retention | Data |
| CR-55 | Application requires internet connection to synchronize food and exercise database | Offline Limitation | Technical |
| CR-56 | System does not provide step counting feature via smartwatch | Out-of-scope Enforcement | Scope |
| CR-57 | System does not provide reminder via user email | Reminder | Scope |
| CR-58 | User can only log maximum 1 weight data per day | Daily Input Limit | Data |
| CR-59 | System uses standard units (gram, ml, kcal) and is consistent throughout the application | Unit & Measurement Standard | Data |
| CR-60 | Progress photos are private and can only be accessed by account owner | Photo Access Restriction | Policy |
| CR-61 | Master data (food & exercise) can only be added/modified by Admin | Data Access | Data |
| CR-62 | System must reject invalid input (example: negative calories, 0 kg weight) | Input Validation | Technical |

---

## 📋 Additional Functional Requirements (FR)

| ID | Requirement | Feature Name | Priority |
|----|-------------|--------------|----------|
| FR-63 | User can update weight in goals menu section | Update Weight | Must-Have |
| FR-64 | User can view list of owned friends | View Friend List | Must-Have |
| FR-65 | User can add friends (other users) | Add Friends | Must-Have |
| FR-66 | User can send messages to friends (other users) | Send Messages | Must-Have |
| FR-67 | User can view friend profiles (other users) | View Friend Profile | Must-Have |


---

## 🗺️ Application Sitemap

Complete navigation structure of SawitFit application.

---

### **Level 1.0 - Landing Page**

**Landing Page (1.0)**
- Application home page
- Entry point for new and existing users

---

### **Level 1.x - Authentication**

**Authentication (1.0)**
- **Login (1.1)** - Login page for existing users
- **Register (1.2)** - Registration page for new users
- **Onboarding (1.3)** - Onboarding process for new users (profile setup, goals, etc.)

---

### **Level 2.0 - Dashboard**

**Dashboard (2.0)**
- Main page after login
- Displays daily summary (calories, workout, progress)
- Hub for navigation to all main features

---

### **Level 3.0 - Nutrition**

**Nutrition (3.0)** - Nutrition and calorie logging module

**Sub-pages:**
- **Food Diary (3.1)** - Daily food log
  - Breakfast, Lunch, Dinner
  - Total calories and macronutrients
  
- **Add Food (3.2)** - Add food to diary
  - Select from food database
  - Custom calorie input
  - Adjust serving size
  
- **Food Detail (3.3)** - Food details
  - Complete nutrition information
  - Macronutrients (protein, carbs, fat)

---

### **Level 4.0 - Workout**

**Workout (4.0)** - Workout logging module

**Sub-pages:**
- **Workout Diary (4.1)** - Daily workout log
  - Created workout splits
  - Daily workout log
  
- **Create/Edit Split (4.2)** - Create or edit workout split
  - Select exercises from library
  - Set sets, reps, weight
  
- **Exercise Library (4.3)** - Exercise database
  - Exercise list with categories
  - Exercise details (target muscles, instructions, equipment)
  
- **Workout Log (4.4)** - Workout history
  - Previous workout logs
  - Workout volume
  
- **Add Custom Exercise (4.5)** - Add custom exercise
  - Input exercises outside library

---

### **Level 5.0 - Settings**

**Settings (5.0)** - Application and profile settings

**Sub-pages:**
- **Goals (5.1)** - Goal settings
  - Weight target (lose/gain/maintain)
  - Activity level
  - TDEE estimate
  - Daily calorie target
  
- **Profile (5.2)** - User profile
  - Personal information
  - Weight, height, age
  
- **About (5.3)** - About application
  - Application information
  - Version
  
- **Help (5.4)** - Help
  - FAQ
  - Tutorial
  
- **Policies (5.5)** - Policies
  - Privacy policy
  - Terms of service

---

### **Level 6.0 - Progress**

**Progress (6.0)** - Progress tracking module

**Sub-pages:**
- **Progress Page (6.1)** - Main progress page
  - Weekly progress charts
  - Calories, weight, workout volume
  
- **Upload Photo (6.2)** - Upload progress photo
  - Daily photos
  - Progress photo gallery

---

### **Level 7.0 - Social**

**Social (7.0)** - Social features module

**Sub-pages:**
- **Friend List (7.1)** - Friend list
  - User's friend list
  
- **Add Friend/Search User (7.2)** - Add friends
  - Search other users
  - Send friend request
  
- **Messages/Chat (7.3)** - Messages
  - Chat with friends
  - Inbox
  
- **Friend Profile (7.4)** - Friend profile
  - View other user profiles
  - Friend progress (if shared)

---

### **Level 8.0 - Journal**

**Journal (8.0)** - Daily journal module

**Sub-pages:**
- **Daily History (8.1)** - Daily history
  - Complete daily diary (nutrition + workout)
  - Notes per day

---

## 📊 Sitemap Statistics

**Total Pages**: 30+

**Main Modules**:
1. Authentication (3 pages)
2. Dashboard (1 page)
3. Nutrition (3 pages)
4. Workout (5 pages)
5. Settings (5 pages)
6. Progress (2 pages)
7. Social (4 pages)
8. Journal (1 page)

---

## 📊 Total Requirements: 67


- **FR**: 35 (30 original + 5 additional)
- **NFR**: 17
- **CR**: 15 (11 original + 4 additional)

---

**Note**: All requirements from product documents have been added.

