import { Options } from 'orval';

const config: Record<string, Options> = {
    bffApi: {
        output: {
            client: 'axios',
            target: './generated/bff/bff.ts',
            mode: 'split',
            schemas: './generated/bff/schemas',
            prettier: true,
        },
        input: {
            target: './docs/openapi.yaml',
        },
    },
};

export default config;
