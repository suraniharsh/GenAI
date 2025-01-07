# 🌟 JS Based Personal LLM 🌟

## 🛠️ Setup Instructions

### 1️⃣ Repository Cloning 
1. Open your terminal or command prompt 🖥️
2. Clone the repository using the following command 🔗 
   ```bash
   git clone https://github.com/suraniharsh/GenAI.git
   ```
3. Now enter into the cloned directory by using the command 📂
   ```bash
   cd GenAI
   ```
4. Open your editor ✍️

### 2️⃣ Script Creation
1. In the `script.js` file, write the following code 📝
   ```javascript
   const { default: ollama } = require("ollama"); // CJS

   async function runChat() {
     try {
       const response = await ollama.chat({
         model: "llama3.2:latest",
         messages: [{ role: "user", content: "Generate marketing email" }],
       });

       console.log("Chatbot Response:", response.message.content);
     } catch (error) {
       console.error("Error occurred:", error.message || error);
     }
   }

   runChat();
   ```

### 3️⃣ Dependencies Installation
1. Check the version of Node.js using the command 🛠️
   ```bash
   node -v
   ```
2. Install the `ollama` package 📦
   ```bash
   npm install ollama
   ```
3. Verify the version of `ollama` 🔍
   ```bash
   ollama --version
   ```

### 4️⃣ Application Execution
1. Run the application using the command 🚦
   ```bash
   node script.js
   ```
2. View the output 🎉
   Your personal LLM will respond to your query, like "Generate marketing email."
