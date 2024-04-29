import { useDispatch } from "react-redux"
import { actions as actionsFavorite } from "../store/slices/favorites.slice"
import * as userActions from '../store/slices/user/user.actions'
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

const actionsRouter = {
    ...actionsFavorite,
    ...userActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(actionsRouter, dispatch), [dispatch])
}