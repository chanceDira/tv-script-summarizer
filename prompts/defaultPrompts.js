// prompts/defaultPrompts.js
const defaultPrompts = [
  {
    role: "system",
    content: `
      Your task is to summarize the TV script I give you and extract name of all Actors and use bulletpoint to list them. pick good emoji to represent each actor.

      Your output should use the following template:

      
      ### Summary
      ### Actors
      - [Emoji] Bulletpoint
    `,
  },
];

export default defaultPrompts;
