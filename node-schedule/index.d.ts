// Type definitions for node-schedule
// Project: https://github.com/tejasmanohar/node-schedule/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Recurrence rules.
 */
export interface RecurrenceRule {
    /**
     * Day of the month.
     *
     * @public
     * @type {number}
     */
    date?: number;

    /**
     * Day of the week.
     *
     * @public
     * @type {number|Array<number|Range>}
     */
    dayOfWeek?: number | Array<number | Range>;

    /**
     * Hour.
     *
     * @public
     * @type {number}
     */
    hour?: number;

    /**
     * Minute.
     *
     * @public
     * @type {number}
     */
    minute?: number;

    /**
     * Month.
     *
     * @public
     * @type {number}
     */
    month?: number;

    /**
     * Second.
     *
     * @public
     * @type {number}
     */
    second?: number;

    /**
     * Year.
     *
     * @public
     * @type {number}
     */
    year?: number;
}
export interface RecurrenceRuleConstructor {
    new (year?: number,
         month?: number,
         date?: number,
         dayOfWeek?: number,
         hour?: number,
         minute?:number,
         second?:number): RecurrenceRule;
}
export const RecurrenceRule: RecurrenceRuleConstructor;

/**
 * Range.
 *
 * @class
 */
export declare class Range {
    /**
     * Constructor.
     *
     * @constructor
     * @param {number} start The start.
     * @param {end}    end   The end.
     * @param {step}   step  The step.
     */
    constructor(start?: number, end?: number, step?: number);

    /**
     * Return a {boolean} if the class contains the specified value.
     *
     * @param {number} value The value.
     * @returns {boolean} {true} if the class contains the specified value, otherwise, {false}.
     */
    contains(value: number): boolean;
}

/**
 * Scheduler jobs.
 *
 * @class
 */
export type SupportedJobEvents = 'run'|'scheduled'|'canceled';
export declare class Job {
    /**
     * Constructor.
     *
     * @constructor
     * @param {RecurrenceRule}  rule      The rule.
     * @param {callback}        callback  The callback.
     */
    constructor(name?: string, job?: Function, callback?: Function);

    /**
     * Constructor.
     *
     * @constructor
     * @param {RecurrenceRule} rule The rule.
     * @param
     */
    constructor(job?: Function, callback?: Function);

    /**
     * Attach an event handler function.
     *
     * @public
     * @param {string}    eventName The event name.
     * @param {Function}  handler   The function to execute when the event is triggered.
     */
    addListener(event: SupportedEvents, listener: Function): this;
    //full implementation of EventEmitter is supported
    on(event: SupportedEvents, listener: Function): this;
    once(event: SupportedEvents, listener: Function): this;
    removeListener(event: SupportedEvents, listener: Function): this;
    removeAllListeners(event?: SupportedEvents): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: SupportedEvents): Function[];
    emit(event: SupportedEvents, ...args: any[]): boolean;
    listenerCount(type: string): number;

    /**
     *
     * @public
     */
    schedule(date: Date): void;
    cancel(): boolean;
}

/**
 * Invocation.
 *
 * @class
 */
export declare class Invocation {
    /**
     * Fire date.
     *
     * @public
     * @type {Date}
     */
    public fireDate: Date;

    /**
     * Job.
     *
     * @public
     * @type {Job}
     */
    public job: Job;

    /**
     * Recurrence rule.
     *
     * @public
     * @type {RecurrenceRule}
     */
    public recurrenceRule: RecurrenceRule;

    /**
     * Timer identifier.
     *
     * @public
     * @type {number}
     */
    public timerID: number;

    /**
     * Constructor.
     *
     * @constructor
     * @param {Job}             job             The job.
     * @param {Date}            fireDate        The fire date.
     * @param {RecurrenceRule}  recurrenceRule  The recurrence rule.
     */
    constructor(job: Job, fireDate: Date, recurrenceRule: RecurrenceRule);
}

/**
 * Cancels the job.
 *
 * @param {Job} job The job.
 * @returns {boolean} {true} if the job has been cancelled with success, otherwise, {false}.
 */
export declare function cancelJob(job: Job): boolean;

/**
 * Create a schedule job.
 *
 * @param {RecurrenceRule} rule The rule.
 * @param {Function} callback The callback.
 */
export declare function scheduleJob(rule: RecurrenceRule | Date | string, callback: Function): Job;
