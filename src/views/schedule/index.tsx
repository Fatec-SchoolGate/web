import { useCurrentSchedule } from "./utils/use-current-schedule";
import AdminPage from "./components/admin-page";
import MemberPage from "./components/member-page";

const ScheduleContainer = () => {

    const { schedule, isLoading } = useCurrentSchedule();

    if (isLoading) return <div>loading</div>;

    if (schedule?.isAdmin) return <AdminPage/>;
    else return <MemberPage/>
}

export default ScheduleContainer;