import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import appStore from "./utilies/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "demo",
      element: <Demo />
    }
]
}])

function App() {
  return (
    <Provider store={appStore}>
      <div className="overflow-y-hidden">
        <Header />
        <RouterProvider router={appRouter} />
      </div> 
      {/**
    * Header
    * Body
    * Sidebar
        Menu Items
    * Main Container
        Button List
        Video Container
        Video Card
    */}
  </Provider>
  );
}

export default App;
