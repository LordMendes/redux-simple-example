import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../store/actions/course'

const SidebarComponent = ({modules, toggleLesson}) => {
  return (
    <aside>
      <ul>
        {modules.map(module => (
          <li key={module.id}>
            {module.title}
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  {lesson.title}
                  <button onClick={() => toggleLesson(module, lesson)}>
                    selecionar
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

const mapStateToProps = ({course}) => ({modules:course.modules})

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);