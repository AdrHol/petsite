export const ApplicationPaths = {
    ABOUT : 'about',
    MISSINGS : 'missings',
    REPORT : 'report',
    REPORT_PATH: 'missings/report'
}

export const composeUrl = (...args: string[]) : string => {
    return args.join('/');
}