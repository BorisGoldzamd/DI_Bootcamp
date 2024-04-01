import { AppDispatch, Rootstate } from "../store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

