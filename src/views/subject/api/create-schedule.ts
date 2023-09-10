import api from "@/configs/api";
import { useMutation } from "react-query";
import { CreateScheduleDto } from "../dto/create-schedule-dto";

const createSchedule = (createScheduleDto: CreateScheduleDto) => api.post(`schedules`, createScheduleDto);

export const useScheduleClass = () => useMutation(createSchedule);