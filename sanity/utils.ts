interface BuildQueryParams {
    type: string;
    query: string;
    category: string;
    page: number;
    perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
    const { type, query, category, page = 1, perPage = 10 } = params;

    const conditions = [`*[_type=="${type}"]`];

    if (query) {
        conditions.push(`title match "*${query}*"`);
    }

    if (category && category !== 'all') {
        conditions.push(`category == "${category}"`);
    }

    // Calculate pagination limits
    const offset = (page - 1) * perPage;
    const limit = perPage;

    const queryExpression = conditions.length > 1
        ? `${conditions.join(' && ')}[${offset}...${limit}]`
        : `${conditions.join(' && ')}[${offset}...${limit}]`;

    return queryExpression;
}
