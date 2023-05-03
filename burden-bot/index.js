const {Configuration, OpenAIApi} = require("openai");

console.log("app is ready")
module.exports = (app) => {
    // Your code here
    app.log.info("Yay, the app was loaded!");

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    app.on("issues.opened", async (context) => {
        // console.log()
        try {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: "Is following text is a github feature request, please tell me yes or no?" + context.payload.issue.body
                }],
            });
            const completion_text = completion.data.choices[0].message.content;
            console.log("gpt:" + completion_text)
            if (completion_text.includes("Yes")) {
                const issueComment = context.issue({
                    body: "The [feature] request seems to be beyond the scope of [license]. Maintainer time is a scarce resource." +
                        " [employee] can you check with [organization] to see if they can fund their open source dependency tree using thanks.dev.\n" +
                        "Your funding helps us continue to deliver the service you've come to love from [project] & [ecosystem].\n" +
                        "[feature]=xxx\n" +
                        "[license]=MIT\n" +
                        "[organisation]=xx\n" +
                        "[project]=xx\n" +
                        "[ecosystem]=xx"
                });
                return context.octokit.issues.createComment(issueComment);
            }

        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }
    });

    // For more information on building apps:
    // https://probot.github.io/docs/

    // To get your app running against GitHub, see:
    // https://probot.github.io/docs/development/
};
