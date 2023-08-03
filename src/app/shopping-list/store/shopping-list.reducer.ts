import { Ingredient } from '../../shared/ingredient.model';
import * as ShopListActions from './shopping-list.actions';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShopListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShopListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShopListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShopListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case ShopListActions.DELETE_INGREDIENT:
      const deleteIngredient = state.ingredients.filter((item) => item.)
      return {
        ...state,
        ingredients: state.ingredients.filter((item, index) => {
          return index !== action.payload
        }),
      };
    default:
      return state;
  }
}

// Alternative syntax:
// Using recent NgRx features (e.g., createReducer() and on()).

// import { createReducer, on } from '@ngrx/store';

// import * as ShoppingListActions from './shopping-list.actions';

// export interface State {
//   ingredients: Ingredient[];
//   editedIngredient: Ingredient;
//   editedIngredientIndex: number;
// }

// const initialState: State = {
//   ingredients: [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10),
//   ],
//   editedIngredient: null,
//   editedIngredientIndex: -1
// };

// Below code will not work yet, since we have not yet created the shopping list actions.
// But we can still see how the reducer will work (soon)
// export const shoppingListReducer = createReducer(
//   initialState,
//   on(ShoppingListActions.AddIngredient, (state, action) => ({ // will only work if ShoppingListActions.AddIngredient is an action created via createAction()
//     ...state,
//     ingredients: [...state.ingredients, action.ingredient]
//   })),
// );
