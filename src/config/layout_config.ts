import { Layout } from './layout_mappings'

export interface ProfileConfig {
  // if using e.g., an external Kinesis Advantage 2 with an actual DVORAK setting that outputs keystrokes
  // in advance of reaching software, then there is no need to consider software translations, and
  // we directly substitute the resulting letter in DVORAK from typing th.WERTY at that spot.
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
