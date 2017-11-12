export const noAssignee = () => "There are no assignees to this pull request."
export const descriptionNotLongEnough = (minimumLength: number) => `This PR's description is too short.
It should be contain at least ${minimumLength} characters.`
export const titleDoeNotMatch = (pattern: RegExp) => `This PR's title does not match the following pattern: ${pattern}`
