# AI Career Coach

An AI-powered chat application to guide users through career advice with interactive conversations, daily tips, and personalized visual roadmaps.

---

##  **Setup Instructions**

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd ai_career_coach
```

### 2️⃣ Install Dependencies
For both **backend** and **frontend**:
```bash
npm install
```

### 3️⃣ Environment Variables  
Create a `.env` file for the **backend**:
```
PORT=5000
DB_URL=mongodb://localhost:27017/ai-career-coach
OPENAI_API_KEY=your-openai-or-openrouter-key
```

---

### 4️⃣ Start the App
#### Backend:
```bash
cd backend
npm run dev
```
#### Frontend:
```bash
cd frontend
npm run dev
```

---

##  **AI Logic (Brief)**

- Uses **OpenAI / OpenRouter / Gemini API** to generate conversational responses.
- Supports context-aware replies by storing user messages in **MongoDB**.
- Suggestions for follow-up questions are generated along with AI responses.
- Chat format mimics tools like ChatGPT for familiarity.

---

## ✨ **Key Features**

### ✅ AI Chat Support
- Context-aware conversations
- Personalized career advice
- Follows ChatGPT-style UX patterns

### ✅ Suggested Prompts
- Shows follow-up questions dynamically based on AI response.

### ✅ Visual Career Roadmap
- **React Flow** integration to visualize learning/career paths as interactive flowcharts.

### ✅ Daily Career Tips
- Rotating motivational or actionable tips for career growth.

### ✅ Clean UI
- Tailwind CSS for clean, minimal, responsive design.
- Focus on readability and user experience.

---

## 📷 **Screenshots**
> _(Add screenshots here later if you want)_

---

## 📂 **Folder Structure (Simplified)**

```
backend/
 ├─ src/
 │   ├─ config/
 │   ├─ middlewares/
 │   ├─ models/
 │   ├─ routes/
 │   ├─ services/
 │   └─ app.js
frontend/
 ├─ src/
 │   ├─ components/
 │   ├─ hooks/
 │   ├─ pages/
 │   └─ App.jsx
```

---

## 🔮 **Future Improvements**
- Persistent user profiles
- Export career roadmaps as PDFs
- AI-driven progress tracking

---
