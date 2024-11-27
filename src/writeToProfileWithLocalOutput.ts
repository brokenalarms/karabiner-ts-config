import { writeFileSync } from 'fs'
import path from 'path'
import { Rule, RuleBuilder, writeToProfile, ModificationParameters, WriteTarget } from 'karabiner.ts'

/**
 * Write the dry-run output of `writeToProfile` to a local JSON file.
 *
 * @param rules       The complex_modifications rules.
 * @param parameters  Extra complex_modifications parameters.
 * @param outputPath  The path to the local JSON file.
 */
export function captureDryRunOutput(
  rules: Array<Rule | RuleBuilder>,
  parameters: ModificationParameters | undefined,
  outputPath: string,
): void {
  const originalLog = console.log // Preserve the original console.log
  let capturedOutput = ''

  // Override console.log to capture output
  console.log = (message: string) => {
    capturedOutput += message + '\n'
  }

  try {
    // Run the dry-run to capture its output
    writeToProfile('--dry-run', rules, parameters)

    // Restore the original console.log
    console.log = originalLog

    // Resolve the output path
    const resolvedPath = path.resolve(outputPath)

    // Write the captured output to the file
    writeFileSync(resolvedPath, capturedOutput, 'utf-8')
    console.log(`Successfully wrote captured output to ${resolvedPath}`)
  } catch (error) {
    console.log = originalLog // Ensure console.log is restored even if an error occurs
    console.error('Error during dry-run or writing output:', error)
  }
}

/**
 * Extended version of writeToProfile that also writes to a local JSON file.
 *
 * @param writeTarget The profile name or WriteTarget.
 * @param rules       The complex_modifications rules.
 * @param parameters  Extra complex_modifications parameters.
 * @param outputPath  The path to the local JSON file.
 */
export function writeToProfileWithLocalOutput(
  writeTarget: '--dry-run' | string | WriteTarget,
  rules: Array<Rule | RuleBuilder>,
  parameters: ModificationParameters | undefined,
  outputPath: string,
): void {
  // Call the original writeToProfile
  writeToProfile(writeTarget, rules, parameters)

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

  // Write the output to the local JSON file
  try {
    writeFileSync(resolvedPath, JSON.stringify(outputData, null, 2), 'utf-8')
    console.log(`Successfully wrote rules to ${resolvedPath}`)
  } catch (error) {
    console.error(`Failed to write rules to ${resolvedPath}:`, error)
  }
}
