# Recoil State Management Project

This project demonstrates state management using Recoil in a React application with Vite.

## Project Structure

- `src/atom.js`: Contains all Recoil atom definitions for global state
- `src/App.jsx`: Main application component
- `src/main.jsx`: Application entry point
- `src/index.css`: Global styles

## Key Features

- Uses Recoil for state management
- Demonstrates atom definitions for different state values
- Built with Vite for fast development experience

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Dependencies

- React 19
- Recoil (state management)
- Vite (build tool)

## Recoil Atoms

Atoms are the fundamental units of state in Recoil, similar to React's useState but shareable across components. Key characteristics:

1. **Atom Definition** (in `atom.js`):
   ```js
   export const networkAtom = atom({
     key: "networkAtom",  // Must be unique across the application
     default: 102         // Initial state value (can be any type)
   });
   ```

2. **Using Atoms in Components**:
   - Read value: `const count = useRecoilValue(networkAtom);`
   - Read & write: `const [count, setCount] = useRecoilState(networkAtom);`
   - Write only: `const setCount = useSetRecoilState(networkAtom);`

3. **Key Benefits**:
   - Shared state: Multiple components can subscribe to the same atom
   - Performance: Only subscribed components re-render when atom changes
   - Derived state: Can create selectors that depend on atoms

4. **Current Project Usage**:
   - Tracks notification counts (network, jobs, messages)
   - Demonstrates basic read operations in `App.jsx`

## Custom Hooks

The project demonstrates how to create and use custom hooks with Recoil for state management.
