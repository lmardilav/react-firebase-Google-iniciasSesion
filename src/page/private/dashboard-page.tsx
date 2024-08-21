import { useUser } from "reactfire";

const DashboardPage = () => {
    const { data: user } = useUser()
    return (
        <div>
            <h1 className="text-3xl mb-4">Dashboard Page</h1>
            <p className="mb-2">Welcome {user?.displayName}</p>

        </div>
    )
}

export default DashboardPage