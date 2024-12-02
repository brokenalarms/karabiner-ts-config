import { Layout } from "./constants"

export interface ProfileConfig {
  hardwareTranslation: boolean
  layout: Layout
  profileName: string
  outputPath: string
}

export const profileConfigs: ProfileConfig[] = [
  {
    hardwareTranslation: true,
    layout: 'qwerty',
    profileName: 'QWERTY',
    outputPath: './dist/output_qwerty.json',
  },
  {
    hardwareTranslation: true,
    layout: 'dvorak',
    profileName: 'DVORAK (hardware)',
    outputPath: './dist/output_dvorak_hardware.json',
  },
  {
    hardwareTranslation: false,
    layout: 'dvorak',
    profileName: 'DVORAK (software)',
    outputPath: './dist/output_dvorak_software.json',
  },
]
