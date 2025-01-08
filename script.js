const fs = require("fs");
const {default :ollama} = require("ollama");

async function runChat() {
  try {
    const inputFilePath = "input.json"; 
    const outputFilePath = "output.json";

    const inputContent = fs.readFileSync(inputFilePath, "utf-8");
    const categories = JSON.parse(inputContent).categories;

    const results = [];

    for (const category of categories) {
      const categoryResult = { type: category.type, tasks: [] };

      for (const task of category.tasks) {
        const response = await ollama.chat({
          model: "llama3.2:latest",
          messages: [{ role: "user", content: task.task }],
        });

        categoryResult.tasks.push({
          question: task.question,
          task: task.task,
          response: response.message?.content || "No response",
        });
      }

      results.push(categoryResult);
    }

    fs.writeFileSync(
      outputFilePath,
      JSON.stringify({ categories: results }, null, 2),
      "utf-8"
    );

    console.log(`Chatbot responses have been saved to ${outputFilePath}.`);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

runChat();
