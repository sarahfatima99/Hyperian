const data = [
    {
        PageType: "404",
        Content: "Opps! Page not found",
        description:"Sorry, the page you're looking for doesn't exist.",

    },
    {
        PageType: "401",
        Content: "No authorization found",
        description:"This page is not publically available",

    },
    {
        PageType: "403",
        Content: "Access Denied / Forbidden",
        description:"The page you are trying to access is absolutly forbidden for some reason",

    },
    {
        PageType: "500",
        Content: "Internal Server Error",
        description:"The server encountered an internal error or misconfiguration and was unable to complete your request",

    },
    {
        PageType: "502",
        Content: "Bad Gateway",
        description: "The server encountered a temporary error and could not complete your request.",

    },
    {
        PageType: "503",
        Content: "Service Unavailable",
        description:"Service temporarily unavailable,try again later",

    },
    {
        PageType: "504",
        Content: "Gateway Timeout",
        description:"We are sorry that it's a bit longer than you expected.",

    },
];
export default data;