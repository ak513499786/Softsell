# SoftSell

SoftSell is a responsive, AI-driven customer support widget designed for license resale websites. It is meant to assist users in receiving immediate answers to typical questions such as license transfers, purchase requests, or legalities — all via a minimalist, intuitive chat interface.

---

## Implemented Features

### Chat Widget
- Floating, collapsible customer support chat widget.
- Responsive design (mobile-friendly, Tailwind CSS).
- Simple, user-friendly input field with a clean "Send" interaction.

### AI Integration (Mocked)
- Implements a mocked LLM-style response mechanism with hardcoded Q&A pairs.
- Smart fallback message if the bot doesn't know the answer.
- Typing simulation for better user experience.

### Predefined FAQ Buttons
- Predefined buttons to launch most frequently asked questions such as:
  - How do I sell my license?
  - Can I purchase licenses from SoftSell?
  - Is transferring a license legal?
- What can I sell?
- Simulated user input with one-click interaction that launches a bot response.

---

## Design Decisions

### Tech Stack
- **Frontend:** React.js + Tailwind CSS
- **Chat Experience:** Utilize React state management (`useState`) to manage message flows.
- **Mock LLM Behavior:** Integrated `setTimeout()` to mimic bot thinking time delay.
- **Future-Proofing:** Seamless extensibility to integrate actual LLMs such as OpenAI through Langchain or API.

### UI Decisions
- Clean design with focus on clarity and contrast.
- Chat bubble style for easy differentiation between user and bot.
- Floating widget with expand/collapse feature to prevent intrusiveness.

### API Handling (Optional)
- Ready-to-use OpenAI API integration included (commented for fallback handling).
- Can be enabled for real-time LLM interaction if a valid API key is provided.

---

## Time Spent

| Task                             | Duration |
|----------------------------------|----------|
| Initial setup & UI structure     | 3 hrs    |
| Chat widget state management     | 2 hrs    |
| Designing pre-defined Q&A logic  | 1 hrs    |
| Mock LLM behavior implementation | 1.5 hrs  |
| Responsive styling               | 2 hrs    |
| OpenAI API integration attempt   | 1.5 hrs  |
| Refining UX and backup flows     | 1 hr     |
| **Total**                        |**12 hrs**|

---

## Future Features

- **Integrate OpenAI API or Langchain** to get real-time feedback.
- **Admin dashboard** for dynamically managing FAQs.
- **Multilingual support** for customers all over the world.
- **ML-based intent classification** rather than exact string match.
- **Conversation history persistence** via localStorage or backend.

---
