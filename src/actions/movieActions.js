export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
  id = Number(id);
  return ({ type: DELETE_MOVIE, payload: id });
}

export const addMovie = (data) => {
  return ({ type: ADD_MOVIE, payload: data });
}
