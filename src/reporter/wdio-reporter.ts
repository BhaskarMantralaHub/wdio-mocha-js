import SpecReporter from "@wdio/spec-reporter";
import { SpecReporterOptions } from "@wdio/spec-reporter/build/types";

export class WdioReporter extends SpecReporter {

    constructor(options: SpecReporterOptions) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true })
        super(options)
    }

}

