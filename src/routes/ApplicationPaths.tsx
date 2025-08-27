export const ApplicationPaths = {
    ABOUT : 'about',
    MISSINGS : 'missings',
    REPORT : 'report',
    REPORT_PATH: 'report',
    DETAILED_MISSING: ':id'
}

export const composeUrl = (...args: string[]) : string => {
    return args.join('/');
}