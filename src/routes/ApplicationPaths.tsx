export const ApplicationPaths = {
    ABOUT : 'about',
    MISSINGS : 'missings',
    REPORT : 'report'
}

export const composeUrl = (...args: string[]) => {
    return args.join('/');
}