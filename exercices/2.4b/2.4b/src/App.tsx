import UserCard from "./userCard"

const App = () => {
    return (
        <div>
            <UserCard name="Alice Dupont" age={25} isOnline={true} />
            <UserCard name="Marc Dubois" age={30} isOnline={false} />
            <UserCard name="Julie Martin" age={22} isOnline={true} />
        </div>
    );
};

export default App;
