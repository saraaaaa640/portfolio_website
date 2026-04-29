import { useQuery } from '@tanstack/react-query';
import type { Project } from "../types";

import { getProjects} from '../services/public/projectServices';
import { getSkills } from '../services/public/skillServices';
import { messageService } from "../services/public/messageService";


// messages
export const useMessage = () => {
  const sendMessage = async (data: any) => {
    console.log("🧠 Hook: sendMessage triggered");
    try {
      const res = await messageService.sendMessage(data);
      console.log("🎉 Hook success:", res);
      return {res};
    } catch (err) {
      console.error("💥 Hook error:", err);
    }
  };
  console.log("the return of the hook ", sendMessage);
  return { sendMessage };
};

//  hook to fetch projects data
export const useProjects = () =>
  useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjects
  });
// hook to fetch skills data
export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills
  });
}