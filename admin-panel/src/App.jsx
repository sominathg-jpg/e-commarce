import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContentArea";
import useUserStore from "./store/useAuthStore";
import Login from "./components/Login";
const App = () => {
  const { isLogin } = useUserStore();
  return (
    <div className="flex h-screen bg-gray-100">
      {isLogin ? (
        <>
          <Sidebar />
          <MainContent />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
