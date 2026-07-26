import Input from "./components/input.tsx";

const App = () => {
  return (
    <p className="flex gap-2 bg-black p-6">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
    </p>
  );
};

export default App;
