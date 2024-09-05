// src/commands/robots.ts
import {Args, Command, Flags} from '@oclif/core'

export default class Robots extends Command {
  static override args = {
    output: Args.string({
      description: 'Output file path',
      required: true,
    }),
  }

  static description = 'Generate robots.txt file'

  static examples = ['<%= config.bin %> <%= command.id %>  --disallow / --sitemap ./sitemap.xml --user-agent default']

  static override flags = {
    block: Flags.string({
      char: 'b',
      default: 'default',
      description: 'User-agents to block',
      multiple: true,
      required: false,
    }),
    path: Flags.string({
      char: 'p',
      default: './',
      description: 'Paths to block the user agents from crawling',
      helpValue: ['./', './admin', './wp-admin'],
      multiple: true,
      required: false,
    }),
    sitemap: Flags.boolean({
      char: 's',
      default: false,
      description: 'Whether to include a sitemap in the robots.txt file',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const {args} = await this.parse(Robots)
    const {output} = args
    this.log(`Generating robots.txt file at ${output} ...`)
  }
}
