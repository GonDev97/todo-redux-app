import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create todo',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{toggle: boolean}>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{id: number, texto: string}>()
);

export const deleteTodo = createAction(
    '[TODO] Delete todo',
    props<{id: number}>()
);

export const deleteCompleted = createAction(
    '[TODO] Delete completed',
)
