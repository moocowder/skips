# 🟢 Skip Selection page Redesign

## 🎯 Goal

Redesign the UI/UX for selecting a skip.

---

## 🧠 My Approach

The original page presented multiple skip options at once in a grid, which created visual clutter, especially on mobile devices.  
My redesign takes a **minimalist, task-focused approach** by presenting **one skip size at a time**, allowing users to focus on key decision-making data (size, price, and hire period) without visual overload.

### 🔑 Key Improvements

- ✅ **Single-Skip Focused Display**  
  Instead of showing all skips at once, users view one skip at a time with prominent details.  
  This mirrors how users typically compare options: one at a time, focusing on price and value.

- 🎚️ **Dropdown-Based Navigation**  
  Skip sizes are selectable through a simple dropdown, enabling instant comparison while keeping the layout compact and centered.  
  It's faster, clearer, and mobile-friendly.

- 🎯 **Strong Visual Hierarchy**  
  Key decision-making info like **price** and **hire duration** are emphasized using size, color contrast, and spacing.  
  Non-essential information is de-emphasized or removed.

- 🧼 **Reduced Clutter**  
  By eliminating cards, grid alignment, and visual noise, the UI is easier to scan.  
  The design reflects what really matters in this context: _“How much space do I need, and how much will it cost me?”_

- 🌑 **Dark Theme with High Contrast**  
  The dark background helps key data (skip size, price) pop out.  
  High contrast typography improves accessibility and readability, particularly in low-light environments.

- 📱 **Mobile-First Design**  
  The layout is responsive from the ground up.  
  Core actions are thumb-accessible, and all information is cleanly presented without zooming or sideways scrolling.

---

## 🛠️ Tech Stack

- ⚛️ **React (Vite)** : Modern, fast setup with functional components
- 🧠 **TypeScript** : For type safety and better code maintainability
- 🎨 **Tailwind CSS** : Utility-first styling for responsive, consistent design

---

## 🧪 How to Test

Live preview available at:  
🔗 [https://skips-beta.vercel.app/](https://skips-beta.vercel.app/)

Sandbox available at:  
🔗 [https://stackblitz.com/~/github.com/moocowder/skips](https://stackblitz.com/~/github.com/moocowder/skips)
