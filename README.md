# 🎣 React Hooks 🎣
### Learning React Hooks

## Hooks

Practiced the next hooks:

### `useState`
Check [useState section](src/components/01-useState). Also check another implementation on [useCounter](src/components/hooks/useCounter.js) custom hook.

### `useEffect`
useEffect on [useEffect section](src/components/02-useEffect).

### `useRef`
useRef for reference a html input and monitoring a component unmounting [useRef folder](src/components/04-useRef). Also check for [useFetch](src/components/hooks/useFetch.js) custom hook, for use of "useRef" and "useEffect" and "useState".

### `useLayoutEffect`
Check [useLayoutEffect section](src/components/05-useLayoutEffect).

### `useMemo and React.memo`
Check [Memos folder](src/components/06-memos).

### `useCallback`
Use of callback React hook in [CallBackHook.js](src/components/06-memos/CallBackHook.js) component.

### `useReducer`
Have a look of **TODOs app** on [useReducer folder](src/components/08-useReducer) and main component [TodoApp.js](src/components/08-useReducer/TodoApp.js)

### `useContext`
Check simple app using router and communication between components using useContext on [useContext section](src/components/09-useContext).

## How to use
1. In the project directory, run ```npm install```
2. In [index.js](src/index.js) file uncomment the import of the component you want to render and write the name of the component to render it
```
ReactDOM.render(<ComponentYouWant />, root);
```
3. Start the application or refresh the browser if already started. [npm start](#npm-start)

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches tests on terminal. Also notice that the repo has CI tasks: [react.js.yml](.github/workflows/react.js.yml). Check tests on [TESTS folder](src/tests)
