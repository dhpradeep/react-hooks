import "./App.css";
import UsecallbackHook from "./components/usecallback";
import UsecontextHook from "./components/usecontext";
import UseeffectHook from "./components/useeffect";
import ImprerativeHandle from "./components/useimparativehook";
import LayouteffectHook from "./components/uselayouteffect";
import UsememoHook from "./components/usememo";
import ReducerHook from "./components/usereducer";
import UserefHook from "./components/useref";
import StateHook from "./components/usestate";

const Title = ({ name }) => {
  return <h4>{name}</h4>;
};

function App() {
  return (
    <div className="App">
      <Title name="Use State" />
      <StateHook />
      <hr />
      <Title name="Use Reducer" />
      <ReducerHook />
      <hr />
      <Title name="Use Effect" />
      <UseeffectHook />
      <hr />
      <Title name="Use Ref" />
      <UserefHook />
      <hr />
      <Title name="Use Layout Effect" />
      <LayouteffectHook />
      <hr />
      <Title name="Use ImperativeHandle" />
      <ImprerativeHandle />
      <hr />
      <Title name="Use Context" />
      <UsecontextHook />
      <hr />
      <Title name="Use Memo" />
      <UsememoHook />
      <hr />
      <Title name="Use Callback" />
      <UsecallbackHook />
      <br />
    </div>
  );
}

export default App;
