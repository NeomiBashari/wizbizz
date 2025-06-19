# 🧠 Copilot Instructions for WizBizz Project

## 🧱 PROJECT ARCHITECTURE

- Project is built in **React Native** using **Expo** and **TypeScript**.
- Use a **feature-based folder structure** under `src/`:
  - `components/`: shared generic UI components.
  - `screens/`: each screen with its own subfolder.
  - `services/`: API and business logic layers.
  - `styles/`: per-component style files in SCSS syntax (for consistency).
  - `theme/`: central theme variables (colors, spacing, fonts, etc.).
  - `navigation/`: centralized navigation setup with types.
  - `hooks/`: shared custom logic.
  - `utils/`: generic helpers.

---

## 🎨 UI & COMPONENT GUIDELINES

- Every component must be:
  - Small, reusable, and self-contained.
  - Stateless/pure whenever possible.
  - Located in its own folder, named after the component.

- Each component should include:
  - `ComponentName.tsx`: component logic.
  - `ComponentName.scss`: SCSS-based styles (simulated via StyleSheet).
  - `ComponentName.types.ts`: (optional) Type definitions.

- Follow **BEM methodology** for SCSS class naming:
  - `.appointment-card__header`, `.appointment-card--active`, etc.

- Styles must **never be inline**.
- Use spacing, sizing, and colors from the central theme file.

---

## 📐 SCALABLE STYLE STRATEGY

- Use `StyleSheet.create` or utility-first solutions (`Restyle` / `NativeWind` if needed).
- SCSS-like structure is written inside `.styles.ts` files, with full separation from logic.
- Store shared design tokens in `theme/theme.ts`.
- Avoid hardcoding any values (padding, color, fontSize).

---

## 🧩 CODE STRUCTURE

- Functions must be short (≤ 40 lines) and descriptive.
- Long logic should be split into helpers/utilities.
- Extract logic from components to `hooks/` or `services/`.
- Use **typed props** and **defaultProps**.
- Prefer controlled components and strict types.

---

## 💬 NAMING CONVENTIONS

- Components: `PascalCase` (e.g. `EmployeeCard`)
- Variables & functions: `camelCase`
- Files:
  - Components: `PascalCase.tsx` (e.g. `BookingForm.tsx`)
  - Styles/utils/hooks: `kebab-case.ts` (e.g. `format-date.ts`)
  - SCSS styles: match component name (e.g. `BookingForm.scss`)

---

## 🔁 STATE MANAGEMENT

- Use **React Context** or **Zustand** (not Redux).
- Global state goes in context/stores, local state stays in the component.
- Side effects in `useEffect`, always with cleanups.

---

## 📡 SERVICES & DATA

- Place API calls and business logic in `/src/services/`.
- Never fetch directly inside components.
- Use `async/await`, with clear error handling and retry logic.
- Structure service methods into modules per domain (e.g., `appointmentsService.ts`, `clientsService.ts`).

---

## 🧠 REUSABILITY & CLEAN CODE

- Use a library of generic UI components in `components/ui/`.
- Examples:
  - `Button`, `TextInput`, `Dropdown`, `Card`, `Modal`, `CalendarPicker`.
- Avoid duplication — extract logic to `hooks/` or `utils/`.
- Never use logic directly in JSX.
- Always extract conditional logic and render conditions to helper functions or variables.

---

## 🧭 NAVIGATION

- Define all navigation stacks in `navigation/AppNavigator.tsx`.
- Define route types in `navigation/types.ts`.
- Use `useNavigation()` or typed props injection for navigation handling.
- Structure navigation into `MainStack`, `AuthStack`, `ModalsStack` if needed.

---

## 🧪 TESTING (Optional at MVP)

- Use `jest` + `@testing-library/react-native`.
- Add tests in `__tests__` folder next to the component.
- Focus on rendering behavior and logic, not style.

---

## 💬 COMMENTS AND DOCUMENTATION

- ✅ Prefer self-explanatory code over comments.
- ✅ Use comments to clarify non-obvious logic or business rules.
- ✅ Use `/** */` for documenting functions, including:
  - What the function does.
  - Its parameters and return values.
  - Edge cases or side-effects.
- ✅ Place all comments **above** the line of code, never on the same line.
- ✅ Use standard tags for temporary or critical notes:
  - `// TODO:` – feature not implemented yet.
  - `// FIXME:` – known bug.
  - `// REVIEW:` – requires further review.
  - `// HACK:` – temporary workaround.
  - `// ⚠️` – warning about a sensitive operation (e.g. auth, deletion).

- 🔥 Keep comments **updated** with the code — outdated comments are dangerous.
- ❌ Do not write obvious comments (e.g., `// define variable`).
- ❌ Do not comment out large chunks of code — delete unused code or track with git.

---

## 🔥 DON’TS

- ❌ No inline styles — use `.scss` or `styles.ts` only.
- ❌ No long functions — split into helpers.
- ❌ No duplication — extract shared logic.
- ❌ No hardcoded values — always use the theme.
- ❌ No logic inside JSX.
- ❌ No commented-out legacy code — use Git for version history.

---

## 📦 FUTURE-READY

- All code must be:
  - **Modular** (easy to move and reuse)
  - **Scalable** (easy to grow with features)
  - **Maintainable** (easy to read and debug)p
  - **Testable** (easy to write and run unit tests)

---

✅ *"Work like you're building a product for 1,000 businesses that will grow, change and scale. Make everything flexible from the start."*
