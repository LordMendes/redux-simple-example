const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
  { id:1, title: 'Iniciando com React', lessons: [
    { id:1, title: 'Primeira aula' },
    { id:2, title: 'Segunda aula' },
  ]},
  {id:2, title: "aprendendo Redux", lessons: [
    { id:3, title: 'Terceira aula' },
    { id:4, title: 'Quarta aula' },
  ]}
]}

function courseReducer(state=INITIAL_STATE, action) {
  if(action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson
    }
  }
  return state;
}

export {courseReducer}