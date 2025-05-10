// App.jsx
import { RecoilRoot, useRecoilValue } from 'recoil';
import { networkAtom } from "./atom.js";

function App() {
    return (
        <RecoilRoot>
            <MainApp/>
        </RecoilRoot>
    );
}

function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom);

    return (
        <>
            <button>Home</button>
            <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
            <button>Jobs</button>
            <button>Messaging</button>
            <button>Notification</button>
            <button>me</button>
        </>
    );
}

export default App;

