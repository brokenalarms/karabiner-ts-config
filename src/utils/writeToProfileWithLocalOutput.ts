import { writeFileSync, existsSync } from 'fs'
import path from 'path'
import {
  Rule,
  RuleBuilder,
  writeToProfile,
  ModificationParameters,
} from 'karabiner.ts'

/**
 * Extended version of writeToProfile that also writes to a local JSON file.
 *
 * @param writeTarget The profile name or WriteTarget.
 * @param rules       The complex_modifications rules.
 * @param parameters  Extra complex_modifications parameters.
 * @param outputPath  The path to the local JSON file.
 */
export function writeToProfileWithLocalOutput(
  writeTarget: '--dry-run' | string,
  rules: Array<Rule | RuleBuilder>,
  parameters: ModificationParameters | undefined,
  outputPath: string,
): void {
  try {
    writeToProfile(writeTarget, rules, parameters)
  } catch (error) {
    console.error(
      `Failed to write rules to Karabiner config: ${writeTarget}:`,
      error,
    )
  }
  writeToLocalFile(rules, parameters, outputPath)
}

export function writeToLocalFile(
  rules: Array<Rule | RuleBuilder>,
  parameters: ModificationParameters | undefined,
  outputPath: string,
): void {
  // Build the output data
  const outputData = {
    rules: rules.map((rule) => {
      if ('build' in rule && typeof rule.build === 'function') {
        return rule.build() // Handle RuleBuilder case
      }
      return rule // Handle Rule case
    }),
    parameters,
  }

  // Resolve the output path
  const resolvedPath = path.resolve(outputPath)

  // Ensure the file exists
  if (!existsSync(resolvedPath)) {
    writeFileSync(resolvedPath, '{}', 'utf-8') // Create an empty JSON file if it doesn't exist
  }

  // Write the output to the local JSON file
  try {
    writeFileSync(resolvedPath, JSON.stringify(outputData, null, 2), 'utf-8')
    console.log(`Successfully wrote rules to ${resolvedPath}`)
  } catch (error) {
    console.error(`Failed to write rules to ${resolvedPath}:`, error)
  }
}
