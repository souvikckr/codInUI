import Collaborator from "./Collaborator.jsx";
import { connect } from "react-redux";

//action creators
import { createProject, showProject } from "./../../../modules/project";

const mapDispatchToProps = {
  createProject,
  showProject
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collaborator);
