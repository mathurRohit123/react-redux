***
# Redux Toolkit Counter 🔢
A simple **Redux Toolkit + React** counter application that demonstrates the core Redux concepts in the most minimal, beginner‑friendly way: **store, slice, actions, reducers, dispatch, selectors**.

***
## Features
- Display a **global count** stored in Redux state.
- Buttons to:
  - Increment by **+1**
  - Decrement by **−1**
  - **Reset** to 0
- Input field to **increment by a custom amount** using a Redux action with a payload. 
- Clean **dark UI** with a centered counter card.

***
## Tech Stack
- **React** (functional components + hooks)  
- **Redux Toolkit** (`@reduxjs/toolkit`) for Redux logic and store setup
- **React Redux** (`react-redux`) for React bindings (`Provider`, `useSelector`, `useDispatch`)
- **Vite** as the build tool (fast dev server)

***
## Project Structure
```text
src/
├── App.jsx           # Counter UI + hooks into Redux state/actions
├── main.jsx          # Entry point, wraps <App /> with <Provider store={store}>
├── index.css         # Global dark theme styles
└── store/
    ├── counterSlice.js  # Redux Toolkit slice: state + reducers + actions
    └── index.js         # Redux store configuration via configureStore
```

- `counterSlice.js` defines the **counter slice** with:
  - `initialState = { count: 0 }`
  - Reducers: `increment`, `decrement`, `reset`, `incrementByAmt`
- `store/index.js` configures the Redux **store** using `configureStore` and registers the `counter` slice reducer.

***
## Getting Started
### 1. Install dependencies
```bash
npm install
```

If you cloned only the idea and not the deps yet, ensure you have:

```bash
npm install react react-dom @reduxjs/toolkit react-redux
```
### 2. Run the dev server
```bash
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173/` for Vite).

***
## How It Works (Redux Flow)
### Redux side
1. **Slice (`counterSlice.js`)**

   ```js
   const initialState = { count: 0 };

   const counterSlice = createSlice({
     name: "counter",
     initialState,
     reducers: {
       increment(state) { state.count += 1; },
       decrement(state) { state.count -= 1; },
       reset(state) { state.count = 0; },
       incrementByAmt(state, action) { state.count += action.payload; },
     },
   });

   export const { increment, decrement, reset, incrementByAmt } = counterSlice.actions;
   export default counterSlice.reducer;
   ```

   - Each reducer is a **case** describing how to change `count`.
   - Redux Toolkit uses **Immer** so we can “mutate” `state` directly, and it still produces immutable updates.

2. **Store (`store/index.js`)** [redux.js](https://redux.js.org/usage/configuring-your-store)

   ```js
   const store = configureStore({
     reducer: {
       counter: counterReducer,
     },
   });

   export default store;
   ```

   - Global state shape: `{ counter: { count: number } }`.

3. **Provider (`main.jsx`)**

   ```jsx
   <Provider store={store}>
     <App />
   </Provider>
   ```

   - Makes the store available to all components via React context internally.
### React side (App.jsx)
- `useSelector((state) => state.counter.count)` → **selector** to read the current count.
- `useDispatch()` → gives the `dispatch` function to send actions.
- Button clicks call `dispatch(increment())`, `dispatch(decrement())`, `dispatch(reset())`.  
- The input uses `dispatch(incrementByAmt(value))` where `value` is parsed from user input.

High‑level data flow:

```text
User clicks / types
  → React component
    → dispatch(action)
      → Redux reducer updates state
        → store notifies React
          → useSelector sees new state
            → UI re-renders with new count
```

***
Once you’re comfortable with this counter:

- You can extend it with:
  - Async actions (thunks) for API calls.
  - Multiple slices (e.g., `todos`, `auth`, `ui`).  
  - DevTools inspection of dispatched actions and state history.

***
## Scripts
Common npm scripts (if using the standard Vite setup):

- `npm run dev` – start the dev server  
- `npm run build` – build for production  
- `npm run preview` – preview the production build locally
