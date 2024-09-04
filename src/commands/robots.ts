// src/commands/robots.ts
import {Command, Flags, Args} from '@oclif/core'

export default class Robots extends Command {
  static description = 'Generate robots.txt file'

  static examples = ['<%= config.bin %> <%= command.id %>  --disallow / --sitemap ./sitemap.xml --user-agent default']

  static override args = {
    output: Args.string({
      description: 'Output file path',
      required: true,
    }),
  }

  static override flags = {
    path: Flags.string({
      char: 'p',
      description: 'Paths to block the user agents from crawling',
      required: false,
      multiple: true,
      default: './',
      helpValue: ['./', './admin', './wp-admin'],
    }),
    sitemap: Flags.boolean({
      char: 's',
      description: 'Whether to include a sitemap in the robots.txt file',
      required: false,
      default: false,
    }),
    block: Flags.string({
      char: 'b',
      description: 'User-agents to block',
      required: false,
      multiple: true,
      default: 'default',
    }),
  }

  async run(): Promise<void> {
    const {args} = await this.parse(Robots)
    const {output} = args
    this.log(`Generating robots.txt file at ${output} ...`)
  }
}
