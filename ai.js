async function generateAI() {
    const prompt = document.getElementById("prompt").value;
    document.getElementById("result").innerHTML = "AI كيدير الخدمة…";

    const apiKey = "YOUR_API_KEY";

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }]
        })
    });

    const data = await res.json();
    document.getElementById("result").innerHTML = data.choices[0].message.content;
}
// AI IMAGE GENERATOR SCRIPT

async function generateThumbnail() {
  const input = document.getElementById("prompt").value;
  const output = document.getElementById("ai-output");

  output.innerHTML = "Generating...";

  const response = await fetch("https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: input })
  });

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  output.innerHTML = `<img src="${url}" style="width:100%; border-radius:12px;" />`;
}
