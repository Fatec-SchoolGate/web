import { useRouter } from "next/router"

export const useScheduleId = () => {
    const router = useRouter();
    const { scheduleId } = router.query;

    return scheduleId?.toString();
}