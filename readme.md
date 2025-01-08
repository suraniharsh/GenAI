# 🌟 JS-Based Personal LLM 🌟

## 🛠️ Setup Instructions

### 1️⃣ Repository Cloning
1. Open your terminal or command prompt 🖥️.
2. Clone the repository using the following command 🔗:
   ```bash
   git clone https://github.com/suraniharsh/GenAI.git
   ```
3. Navigate into the cloned directory by using the command 📂:
   ```bash
   cd GenAI
   ```
4. Open your preferred code editor ✍️.

### 2️⃣ File Setup
1. Create a `script.js` file in the project directory.
2. Also, create an `input.json` file in the project directory. The structure of the `input.json` file should be as follows:
   ```json
   {
     "categories": [
       {
         "type": "Professional Writing",
         "tasks": [
           {
             "question": "Question 1",
             "task": "Draft a formal resignation letter with a positive tone."
           },
           {
             "question": "Question 2",
             "task": "Compose a persuasive job application email tailored to a specific role."
           },
           {
             "question": "Question 3",
             "task": "Develop a detailed project proposal with objectives and timelines."
           }
         ]
       },
       {
         "type": "Creative Writing",
         "tasks": [
           {
             "question": "Question 1",
             "task": "Outline an engaging short story plot with a surprising twist."
           },
           {
             "question": "Question 2",
             "task": "Write a vivid and inspiring poem celebrating the beauty of nature."
           },
           {
             "question": "Question 3",
             "task": "Create in-depth character descriptions with unique traits and backstories."
           }
         ]
       },
       {
         "type": "Technical Content",
         "tasks": [
           {
             "question": "Question 1",
             "task": "Write comprehensive documentation for a software codebase."
           },
           {
             "question": "Question 2",
             "task": "Develop API documentation, including endpoints and usage examples."
           },
           {
             "question": "Question 3",
             "task": "Create a clear and concise bug report with replication steps."
           }
         ]
       },
       {
         "type": "Academic Writing",
         "tasks": [
           {
             "question": "Question 1",
             "task": "Generate a concise and impactful research abstract."
           },
           {
             "question": "Question 2",
             "task": "Write a strong and focused thesis statement for a research paper."
           },
           {
             "question": "Question 3",
             "task": "Summarize a scholarly article with key insights and findings."
           }
         ]
       },
       {
         "type": "Marketing Content",
         "tasks": [
           {
             "question": "Question 1",
             "task": "Write compelling product descriptions highlighting features and benefits."
           },
           {
             "question": "Question 2",
             "task": "Create engaging social media posts tailored to a target audience."
           },
           {
             "question": "Question 3",
             "task": "Generate persuasive marketing emails with a strong call-to-action."
           }
         ]
       }
     ]
   }
   ```

### 3️⃣ Dependencies Installation
1. Check the version of Node.js installed on your system using the command 🛠️:
   ```bash
   node -v
   ```
2. Install the `ollama` package 📦:
   ```bash
   npm install ollama
   ```
3. Verify the version of the `ollama` package 🔍:
   ```bash
   ollama --version
   ```

### 4️⃣ Application Execution
1. Run the application using the command 🚦:
   ```bash
   node script.js
   ```
2. The chatbot responses will be saved in `output.json`. View the output 🎉 to see the generated responses for the tasks provided in `input.json`.

## Output
- The chatbot processes tasks from the `input.json` file and saves the responses in `output.json` with the following structure:
   ```json
   {
     "categories": [
       {
         "type": "Professional Writing",
         "tasks": [
           {
             "question": "Question 1",
             "task": "Draft a formal resignation letter with a positive tone.",
             "response": "Generated response for the task."
           }
         ]
       }
     ]
   }
   ```

## 🛡️ Troubleshooting
- **Error: Missing dependencies:** Ensure that `ollama` is installed correctly.
- **Error: File not found:** Verify the `input.json` file is in the correct directory.
- **Unexpected output:** Check the structure of `input.json` and ensure it matches the required format.

## 📋 Notes
- Ensure you have proper permissions to read and write files in the project directory.
- Customize the tasks in `input.json` to suit your specific requirements.

