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
