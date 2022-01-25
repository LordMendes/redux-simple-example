import {connect} from 'react-redux'

 const VideoComponent = ({activeLesson,activeModule})=> {
    return <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>;
}

const mapStateToProps = ({course}) => ({
  activeModule: course.activeModule,
  activeLesson: course.activeLesson
})

export const Video = connect(mapStateToProps)(VideoComponent);