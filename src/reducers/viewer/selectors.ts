
export function exactForkedRepo(repos: any): Array<object> {
    return repos.filter((r: any) => {
        return r.fork === false;
    })
}
