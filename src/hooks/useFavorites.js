import { useSelector } from "react-redux"

export const useFavorites = () => {
    return useSelector(state => state.favorites)
}