// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
import * as messages from "./messages"

declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

export type Reporter = (message: string) => void

/**
 * Checks if the pull request has at least one assignee.
 * @param reporter The reporter function if the check fails.
 */
export function checkAssignees(reporter: Reporter = fail) {
  const hasAssignees = !!danger.github.pr.assignee

  if (!hasAssignees) {
    reporter(messages.noAssignee())
  }
}

/**
 * Checks if the description of the PR is long enough.
 * @param minimumLength The minimum length of the description.
 * @param reporter The reporter function if the check fails.
 */
export function checkDescription(minimumLength: number, reporter: Reporter = fail) {
  const descriptionIsLongEnough = danger.github.pr.body.length >= minimumLength

  if (!descriptionIsLongEnough) {
    reporter(messages.descriptionNotLongEnough(minimumLength))
  }
}

/**
 * Checks if the pull request title matches a given pattern.
 * @param pattern The pattern to match.
 * @param reporter The reporter function if the check fails.
 */
export function checkTitle(pattern: RegExp, reporter: Reporter = fail) {
  const title = danger.github.pr.title
  const titleIsValid = pattern.test(title)

  if (!titleIsValid) {
    reporter(messages.titleDoeNotMatch(pattern))
  }
}
