import { DefectStatus, PriorityStatus, type Defect, type Project } from "../redux/projectsSlice";


export const createStatsCalculator = (projects: Project[]) => {

const lowDefectsCount = () => {
  const lowDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.priority === PriorityStatus.LOW));
  return lowDefects.length;
};
const mediumDefectsCount = () => {
  const mediumDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.priority === PriorityStatus.MEDIUM));
  return mediumDefects.length;
};
const highDefectsCount = () => {
  const highDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.priority === PriorityStatus.HIGH));
  return highDefects.length;
};
const criticalDefectsCount = () => {
  const criticalDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.priority === PriorityStatus.CRITICAL));
  return criticalDefects.length
};
const resolvedDefectsCount = () => {
  const resolvedDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.status === DefectStatus.RESOLVED));
  return resolvedDefects.length;
};
const in_progressDefectsCount = () => {
  const in_progressDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.status === DefectStatus.IN_PROGRESS));
  return in_progressDefects.length;
};
const unresolvedDefectsCount = () => {
  const unresolvedDefects: Defect[] = projects.flatMap(project => project.defects.filter(defect => defect.status === DefectStatus.UNRESOLVED));
  return unresolvedDefects.length;
};

return {
    lowDefectsCount: lowDefectsCount(),
  mediumDefectsCount: mediumDefectsCount(),
  highDefectsCount: highDefectsCount(),
  criticalDefectsCount: criticalDefectsCount(),
  resolvedDefectsCount: resolvedDefectsCount(),
  in_progressDefectsCount: in_progressDefectsCount(),
  unresolvedDefectsCount: unresolvedDefectsCount()
}

}

