import { create } from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type GlobalStore = {}


const useGlobalStore = create<GlobalStore>()(
    devtools(
        persist(
            (set, get) => {
                return {
                };
            },
            {
                name: "globalstore",
                storage: createJSONStorage(() => AsyncStorage),
            }
        )
    )
);

export default useGlobalStore;