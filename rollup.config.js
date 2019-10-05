import typescript from 'rollup-plugin-typescript2';
import { createCompatibilityConfig } from '@open-wc/building-rollup';

const configs = createCompatibilityConfig({ input: './index.html' });

export default configs.map(config => ({
    ...config,
    output: {
        ...config.output,
        sourcemap: false,
    },
    plugins: [
        ...config.plugins,
        typescript({
            objectHashIgnoreUnknownHack: true,
        })
    ],
}));
